# AdaptiveUI React Demo

A React-based demonstration of adaptive user interface behaviors that respond to user interaction patterns and signals. This project showcases how UI elements can dynamically adapt their appearance and behavior based on detected user patterns.

## 🚀 Features

### Adaptive UI Behaviors
- **Signal-Based Animations**: UI responds to different user behavior signals with appropriate visual feedback
- **Dynamic Tile Effects**: Individual tiles can display various effects based on user interactions
- **Grid Spacing Adaptation**: The entire grid can expand spacing based on user behavior patterns
- **Real-time Debug Console**: Live logging of all adaptive behaviors and signal processing

### Supported Behavior Signals
- **Undo Loop** → Pulse Effect: Detects repetitive undo actions
- **Hover Repeat** → Highlight Effect: Identifies repeated hovering patterns
- **Dwell** → Expand Spacing: Responds to prolonged interaction in one area
- **Backtrack** → Nudge Effect: Detects navigation backtracking behavior
- **Fast Action** → Quick Combo Effect: Identifies rapid user interactions

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── TileGrid.jsx      # Main grid container with 6 demo tiles
│   ├── Tile.jsx          # Individual tile component with effect handling
│   ├── Controls.jsx      # Test interface for triggering signals
│   └── DebugConsole.jsx  # Real-time logging and debugging
├── hooks/
│   └── useAdaptiveUI.js  # Core adaptive UI logic and signal processing
├── App.js                # Main application component
├── App.css               # Complete styling with animations
└── index.js              # Application entry point
```

### Key Technologies
- **React 19.2.3** - Latest React with modern hooks
- **CSS Animations** - Smooth transitions and effects
- **Custom Hooks** - Reusable adaptive UI logic
- **Signal Processing** - Throttled behavior detection
- **Real-time Logging** - Debug console with timestamps

### Animation Durations
- Highlight: 2000ms
- Pulse: 1000ms
- Nudge: 600ms
- Quick Combo: 1000ms
- Expand Spacing: 3000ms

