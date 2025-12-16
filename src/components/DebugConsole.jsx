import React, { useEffect, useRef } from 'react';

const DebugConsole = ({ logs, onClearLog }) => {
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="debug-console">
      <h3>Debug Log</h3>
      <div id="debugLog" ref={logRef}>
        {logs.map(log => (
          <div key={log.id}>
            {log.message}{log.data ? ` ${log.data}` : ''}
          </div>
        ))}
      </div>
      <button onClick={onClearLog} className="clear-btn">
        Clear Log
      </button>
    </div>
  );
};

export default DebugConsole;