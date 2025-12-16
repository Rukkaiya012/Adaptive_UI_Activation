import React, { useState } from 'react';

const Controls = ({ onTestSignal }) => {
  const [targetTile, setTargetTile] = useState('auto');

  const handleTestSignal = (signalType) => {
    const payload = {
      targetId: targetTile === 'auto' ? undefined : parseInt(targetTile),
      timestamp: Date.now(),
      source: 'manual-test'
    };
    
    onTestSignal(signalType, payload);
  };

  return (
    <div className="controls">
      <h2>Test Behaviour Signals</h2>
      <div className="control-group">
        <button onClick={() => handleTestSignal('undo-loop')} className="test-btn">
          Undo Loop
        </button>
        <button onClick={() => handleTestSignal('hover-repeat')} className="test-btn">
          Hover Repeat
        </button>
        <button onClick={() => handleTestSignal('dwell')} className="test-btn">
          Dwell
        </button>
        <button onClick={() => handleTestSignal('backtrack')} className="test-btn">
          Backtrack
        </button>
        <button onClick={() => handleTestSignal('fast-action')} className="test-btn">
          Fast Action
        </button>
      </div>
      <div className="target-selector">
        <label>Target Tile: </label>
        <select 
          value={targetTile} 
          onChange={(e) => setTargetTile(e.target.value)}
        >
          <option value="auto">Auto-select</option>
          <option value="0">Dashboard</option>
          <option value="1">Analytics</option>
          <option value="2">Settings</option>
          <option value="3">Profile</option>
          <option value="4">Reports</option>
          <option value="5">Help</option>
        </select>
      </div>
    </div>
  );
};

export default Controls; 