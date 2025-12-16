import React, { useState, useEffect } from 'react';
import TileGrid from './components/TileGrid';
import Controls from './components/Controls';
import DebugConsole from './components/DebugConsole';
import { useAdaptiveUI } from './hooks/useAdaptiveUI';
import './App.css';

function App() {
  const { debugLogs, log, clearLog, onSignal } = useAdaptiveUI();
  const [tileEffects, setTileEffects] = useState({});
  const [expandSpacing, setExpandSpacing] = useState(false);

  useEffect(() => {
    log('AdaptiveUI initialized');
  }, [log]);

  const handleTestSignal = (signalType, payload) => {
    const result = onSignal(signalType, payload, 6);
    
    if (!result) return;

    const { effect, targetTileIndex } = result;

    if (effect === 'expand-spacing') {
      setExpandSpacing(true);
      setTimeout(() => setExpandSpacing(false), 3000);
    } else {
      setTileEffects(prev => ({
        ...prev,
        [targetTileIndex]: effect
      }));
      
      setTimeout(() => {
        setTileEffects(prev => {
          const newEffects = { ...prev };
          delete newEffects[targetTileIndex];
          return newEffects;
        });
      }, effect === 'highlight' ? 2000 : effect === 'pulse' || effect === 'quick-combo' ? 1000 : 600);
    }
  };

  const handleAnimationEnd = (tileId) => {
    log(`Animation cleanup: tile-${tileId}`);
  };

  return (
    <div className="container">
      <h1>Adaptive UI React Demo</h1>
      
      <TileGrid 
        expandSpacing={expandSpacing}
        tileEffects={tileEffects}
        onAnimationEnd={handleAnimationEnd}
      />
      
      <Controls onTestSignal={handleTestSignal} />
      
      <DebugConsole logs={debugLogs} onClearLog={clearLog} />
    </div>
  );
}

export default App;