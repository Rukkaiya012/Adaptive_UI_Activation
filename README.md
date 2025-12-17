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

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

## 📖 Usage Guide

### Testing Adaptive Behaviors

1. **Manual Signal Testing**
   - Use the control buttons to trigger different behavior signals
   - Select specific tiles or use auto-selection
   - Observe the visual effects and debug console output

2. **Available Test Signals**
   - **Undo Loop**: Triggers a pulsing animation on the target tile
   - **Hover Repeat**: Creates a highlight effect with color gradient
   - **Dwell**: Expands the spacing between all tiles
   - **Backtrack**: Applies a subtle nudging animation
   - **Fast Action**: Combines quick highlight with pulse effect

3. **Target Selection**
   - Choose "Auto-select" for random tile targeting
   - Select specific tiles (Dashboard, Analytics, Settings, Profile, Reports, Help)

### Debug Console Features
- Real-time logging of all signal processing
- Timestamped entries for behavior tracking
- Clear log functionality for fresh testing sessions
- Automatic scrolling to latest entries

## 🎨 Visual Effects

### Tile Effects
- **Highlight**: Warm gradient background with scale transformation
- **Pulse**: Rhythmic scaling animation
- **Nudge**: Subtle left-right movement
- **Quick Combo**: Combined highlight and pulse for rapid interactions

### Grid Effects
- **Expand Spacing**: Increases gap between tiles from 20px to 40px
- **Smooth Transitions**: All effects use CSS transitions for fluid animations

### Responsive Design
- Mobile-friendly grid layout
- Adaptive button sizing
- Optimized for various screen sizes

## ⚙️ Configuration

### Signal Mapping
The signal-to-effect mapping is configured in `useAdaptiveUI.js`:
```javascript
const SIGNAL_MAPPING = {
  'undo-loop': 'pulse',
  'hover-repeat': 'highlight',
  'dwell': 'expand-spacing',
  'backtrack': 'nudge',
  'fast-action': 'quick-combo'
};
```

### Throttling
- Default throttle time: 500ms
- Prevents signal spam and ensures smooth user experience
- Configurable via `THROTTLE_TIME` constant

### Animation Durations
- Highlight: 2000ms
- Pulse: 1000ms
- Nudge: 600ms
- Quick Combo: 1000ms
- Expand Spacing: 3000ms

