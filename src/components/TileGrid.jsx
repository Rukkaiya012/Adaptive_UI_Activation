import React, { useState, useEffect, useRef } from 'react';
import Tile from './Tile';

const TileGrid = ({ expandSpacing, tileEffects, onAnimationEnd }) => {
  const [gridEffect, setGridEffect] = useState('');
  const gridTimeoutRef = useRef(null);

  const tiles = [
    { id: 0, title: 'Dashboard', description: 'Main overview' },
    { id: 1, title: 'Analytics', description: 'Data insights' },
    { id: 2, title: 'Settings', description: 'Configuration' },
    { id: 3, title: 'Profile', description: 'User account' },
    { id: 4, title: 'Reports', description: 'Generate reports' },
    { id: 5, title: 'Help', description: 'Support center' }
  ];

  useEffect(() => {
    if (expandSpacing) {
      setGridEffect('expand-spacing');
      
      if (gridTimeoutRef.current) {
        clearTimeout(gridTimeoutRef.current);
      }
      
      gridTimeoutRef.current = setTimeout(() => {
        setGridEffect('');
      }, 3000);
    }

    return () => {
      if (gridTimeoutRef.current) {
        clearTimeout(gridTimeoutRef.current);
      }
    };
  }, [expandSpacing]);

  const gridClassName = `tile-grid ${gridEffect}`.trim();

  return (
    <div className={gridClassName} id="tileGrid">
      {tiles.map(tile => (
        <Tile
          key={tile.id}
          id={tile.id}
          title={tile.title}
          description={tile.description}
          effect={tileEffects[tile.id]}
          onAnimationEnd={onAnimationEnd}
        />
      ))}
    </div>
  );
};

export default TileGrid;