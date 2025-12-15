# Adaptive UI Demo

A complete implementation of an Adaptive UI system that maps user behaviour signals to visual interface adaptations.

## Behaviour Mapping Table

| Behaviour Signal | UI Effect | Description | Duration |
|-----------------|-----------|-------------|----------|
| `undo-loop` | Pulse | Tile pulses to indicate undo availability | 1s |
| `hover-repeat` | Highlight | Tile gets highlighted with warm colors | 2s |
| `dwell` | Expand Spacing | Grid spacing increases for better focus | 3s |
| `backtrack` | Nudge | Tile shifts left-right to draw attention | 0.6s |
| `fast-action` | Quick Combo | Quick highlight + pulse combination | 1s |

## Setup Instructions

1. **Open the demo:**
   ```
   Open index.html in any modern web browser
   ```

2. **Test the system:**
   - Use the test buttons to trigger different behaviour signals
   - Select specific tiles or use auto-selection
   - Watch the debug console for real-time feedback

3. **View effects:**
   - Each signal produces a visible animation
   - Effects are throttled to prevent spam
   - Multiple effects can run simultaneously on different tiles

## File Structure

```
adaptive-demo/
├── index.html      # Main demo page with tile grid
├── styles.css      # All animations and responsive design
├── adaptive.js     # Core AdaptiveUI class and logic
└── README.md       # This documentation
```

## Core Features

- **Signal Processing**: `onSignal(type, payload)` method handles all behaviour signals
- **Effect Mapping**: Configurable mapping between signals and visual effects
- **Throttling**: Prevents overwhelming animations from repeated signals
- **Auto-cleanup**: Effects automatically remove after completion
- **Debug Console**: Real-time logging of all signal processing

## React/Tailwind Migration Notes

### Converting to Tailwind Classes

Replace CSS animations with Tailwind utilities:

```javascript

.highlight → bg-gradient-to-br from-yellow-200 to-orange-200 scale-105
.pulse → animate-pulse
.nudge → animate-bounce
.expand-spacing → gap-10 (instead of gap-5)
```

### AdaptiveUIProvider Pattern

```jsx

<AdaptiveUIProvider>
  <TileGrid />
  <Controls />
</AdaptiveUIProvider>


const { onSignal } = useAdaptiveUI();
```

### Props/Context Integration

```jsx

<Tile 
  id="tile-1" 
  onSignal={onSignal}
  effects={activeEffects}
/>

const adaptiveContext = {
  onSignal,
  activeEffects,
  signalMapping
};