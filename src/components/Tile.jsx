import { useEffect, useRef } from 'react';

const Tile = ({ id, title, description, effect }) => {
  const tileRef = useRef(null);

  useEffect(() => {
    if (!effect || !tileRef.current) return;

    const tile = tileRef.current;

    // clear previous effects
    tile.classList.remove(
      'highlight',
      'pulse',
      'nudge',
      'quick-highlight'
    );

    let timeouts = [];

    const cleanup = (cls, time) => {
      const t = setTimeout(() => {
        tile.classList.remove(cls);
      }, time);
      timeouts.push(t);
    };

    switch (effect) {
      case 'highlight':
        tile.classList.add('highlight');
        cleanup('highlight', 2000);
        break;

      case 'pulse':
        tile.classList.add('pulse');
        cleanup('pulse', 1000);
        break;

      case 'nudge':
        tile.classList.add('nudge');
        cleanup('nudge', 600);
        break;

      case 'quick-combo':
        tile.classList.add('quick-highlight', 'pulse');
        cleanup('quick-highlight', 1000);
        cleanup('pulse', 1000);
        break;

      default:
        break;
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [effect]);

  return (
    <div
      ref={tileRef}
      className="tile"
      id={`tile-${id}`}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Tile;
