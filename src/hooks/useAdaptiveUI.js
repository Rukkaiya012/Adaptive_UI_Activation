import { useState, useCallback, useRef } from 'react';

const THROTTLE_TIME = 500;

const SIGNAL_MAPPING = {
  'undo-loop': 'pulse',
  'hover-repeat': 'highlight',
  'dwell': 'expand-spacing',
  'backtrack': 'nudge',
  'fast-action': 'quick-combo'
};

export const useAdaptiveUI = () => {
  const [debugLogs, setDebugLogs] = useState([]);
  const throttleMapRef = useRef(new Map());

  const log = useCallback((message, data = null) => {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] ${message}`;

    console.log(logEntry, data || '');

    setDebugLogs(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        message: logEntry,
        data: data
          ? typeof data === 'object'
            ? JSON.stringify(data)
            : String(data)
          : null
      }
    ]);
  }, []);

  const clearLog = useCallback(() => {
    setDebugLogs([]);
    console.clear();
    console.debug('Debug logs cleared');
  }, []);

  const isThrottled = useCallback((signalType) => {
    const now = Date.now();
    const lastTime = throttleMapRef.current.get(signalType) || 0;
    return now - lastTime < THROTTLE_TIME;
  }, []);

  const setThrottle = useCallback((signalType) => {
    throttleMapRef.current.set(signalType, Date.now());

    setTimeout(() => {
      throttleMapRef.current.delete(signalType);
    }, THROTTLE_TIME);
  }, []);

  const selectTargetTile = useCallback((targetId, tilesCount) => {
    if (targetId !== undefined && targetId !== 'auto') {
      return Number(targetId);
    }

    if (!tilesCount || tilesCount <= 0) return null;

    return Math.floor(Math.random() * tilesCount);
  }, []);

  const onSignal = useCallback(
    (type, payload = {}, tilesCount) => {
      log(`Signal received: ${type}`, payload);

      if (isThrottled(type)) {
        log(`Signal ${type} throttled`);
        return null;
      }

      const effect = SIGNAL_MAPPING[type];
      if (!effect) {
        log(`No mapping found for signal: ${type}`);
        return null;
      }

      const targetTileIndex = selectTargetTile(payload.targetId, tilesCount);
      if (targetTileIndex === null) {
        log('No target tile found');
        return null;
      }

      log(`Applying effect: ${effect} to tile: ${targetTileIndex}`);
      setThrottle(type);

      return { effect, targetTileIndex };
    },
    [log, isThrottled, setThrottle, selectTargetTile]
  );

  return {
    debugLogs,
    log,
    clearLog,
    onSignal
  };
};
