# Adaptive UI

A behavior-driven user interface that responds to user interaction patterns with visual feedback and adaptive elements.

## Overview

Adaptive UI monitors user behavior patterns and provides real-time visual feedback to improve user experience. The system tracks various interaction signals and responds with contextual UI adaptations.

## Features

- **Behavior Signal Detection**: Monitors user interaction patterns
- **Real-time Visual Feedback**: Immediate UI responses to detected behaviors
- **Adaptive Interface Elements**: Dynamic styling based on user actions
- **Smooth Animations**: CSS transitions for polished user experience

## Behavior Signals

| Signal             | Trigger                        | UI Response                         | Purpose                       |
|--------------------|--------------------------------|-------------------------------------|-------------------------------|
| **Excessive Undo** | 3+ undo actions                | Pulsing border (blue/orange)        | Alert to potential confusion  |
| **Repeated Hover** | 3+ hovers on secondary panel   | Highlight main panel, dim secondary | Focus attention on main panel |
| **Long Dwell**     | Hover >3 seconds on main panel | Shift panel 10px right              | Acknowledge hesitation        |
| **Fast Action**    | Click duration <500ms          | Blue highlight border               | Acknowledge rapid actions     |

## Project Structure

```
Adaptive_UI/
├── index.html          # Main HTML structure
├── styles.css          # UI styling and animations
├── JS/
│   ├── signals.js      # Behavior tracking logic
│   └── adaptiveUI.js   # UI response handlers
└── handover/
    ├── signal_map.md   # Behavior signal documentation
    └── ui_notes.md     # UI effect mapping details
```

## Getting Started

1. Open `index.html` in a web browser
2. Interact with the interface elements:
   - Hover over panels
   - Click the Action and Undo buttons
   - Observe the adaptive responses

## Technical Implementation

### Signal Detection
- **Hover Tracking**: Counts consecutive hover events
- **Undo Monitoring**: Tracks sequential undo button clicks
- **Dwell Time**: Measures hover duration on elements
- **Action Speed**: Calculates click duration timing

### Visual Effects
- **Highlight**: Blue border with glow effect
- **Pulse**: Animated border color transitions
- **Dim**: Reduced opacity for secondary elements
- **Shift**: Subtle positional movement

### Event System
Uses custom events to decouple signal detection from UI responses, enabling modular and maintainable code architecture.

## Browser Compatibility

Compatible with modern browsers supporting:
- CSS3 animations and transitions
- ES6 JavaScript features
- Custom DOM events
