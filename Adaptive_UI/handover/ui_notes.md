# Adaptive UI - Trigger and Effect Mapping

### EXCESSIVE_UNDO
Trigger: 3+ undo button clicks
UI Effect: Main panel pulses with alternating blue/orange border
CSS Class:`.pulse`
Animation: 1s infinite border color transition
Purpose: Alert user to potential confusion requiring help

### REPEATED_HOVER
Trigger: 3+ hover events on secondary panel
UI Effect:
- Main panel gains blue highlight border with glow
- Secondary panel dims to 40% opacity
CSS Classes: `.highlight` + `.dim`
Purpose: Focus attention on main panel when user shows uncertainty

### LONG_DWELL
Trigger: Mouse hover on main panel >3 seconds
UI Effect: Main panel shifts 10px to the right
CSS Class: `.shift`
Transform: `translateX(10px)`
Purpose: Subtle movement to indicate system awareness of hesitation

### FAST_ACTION
Trigger: Mouse click duration <500ms
UI Effect: Main panel gains blue highlight border with glow
CSS Class: `.highlight`
Purpose: Acknowledge rapid expert actions or potential accidents

### BACKTRACK
Trigger: Not implemented
UI Effect: None defined
Status: Signal defined but no tracking or UI response

## CSS Effect Details

### .highlight
- Blue border: `#38bdf8`
- Box shadow: `0 0 20px rgba(56,189,248,0.8)`
- Transition: `0.3s ease`

### .dim
- Opacity: `0.4`
- Transition: `0.3s ease`

### .pulse
- Keyframe animation alternating between blue (`#38bdf8`) and orange (`#f97316`)
- Duration: 1s infinite

### .shift
- Transform: `translateX(10px)`
- Transition: `0.3s ease`

## Reset Behavior
All effects are cleared before applying new ones to prevent conflicts.