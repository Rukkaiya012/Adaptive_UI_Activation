class AdaptiveUI {
    constructor() {
        this.activeEffects = new Map();
        this.throttleMap = new Map();
        this.signalMapping = {
            'undo-loop': 'pulse',
            'hover-repeat': 'highlight', 
            'dwell': 'expand-spacing',
            'backtrack': 'nudge',
            'fast-action': 'quick-combo'
        };
        
        this.init();
    }

    init() {
        this.log('AdaptiveUI initialized');
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('animationend', (e) => {
            if (e.target.classList.contains('tile')) {
                this.cleanupTileEffects(e.target);
            }
        });
    }

    onSignal(type, payload = {}) {
        this.log(`Signal received: ${type}`, payload);

        if (this.isThrottled(type)) {
            this.log(`Signal ${type} throttled`);
            return;
        }

        const effect = this.signalMapping[type];
        if (!effect) {
            this.log(`No mapping found for signal: ${type}`);
            return;
        }

        const targetTile = this.selectTargetTile(payload.targetId);
        if (!targetTile) {
            this.log('No target tile found');
            return;
        }

        this.applyEffect(effect, targetTile, payload);
        
        this.setThrottle(type, 1000); 
    }

    selectTargetTile(targetId) {
        if (targetId !== undefined && targetId !== 'auto') {
            return document.getElementById(`tile-${targetId}`);
        }

        const tiles = document.querySelectorAll('.tile');
        const randomIndex = Math.floor(Math.random() * tiles.length);
        return tiles[randomIndex];
    }

    applyEffect(effect, targetTile, payload) {
        this.log(`Applying effect: ${effect} to tile: ${targetTile.id}`);

        this.clearTileEffects(targetTile);

        switch (effect) {
            case 'highlight':
                this.applyHighlight(targetTile);
                break;
            case 'pulse':
                this.applyPulse(targetTile);
                break;
            case 'nudge':
                this.applyNudge(targetTile);
                break;
            case 'expand-spacing':
                this.applyExpandSpacing();
                break;
            case 'quick-combo':
                this.applyQuickCombo(targetTile);
                break;
            default:
                this.log(`Unknown effect: ${effect}`);
        }
    }

    applyHighlight(tile) {
        tile.classList.add('highlight');
        this.scheduleCleanup(tile, 'highlight', 2000);
    }

    applyPulse(tile) {
        tile.classList.add('pulse');
        this.scheduleCleanup(tile, 'pulse', 1000);
    }

    applyNudge(tile) {
        tile.classList.add('nudge');
        this.scheduleCleanup(tile, 'nudge', 600);
    }

    applyExpandSpacing() {
        const grid = document.getElementById('tileGrid');
        grid.classList.add('expand-spacing');
        this.scheduleCleanup(grid, 'expand-spacing', 3000);
    }

    applyQuickCombo(tile) {
        tile.classList.add('quick-highlight', 'pulse');
        this.scheduleCleanup(tile, 'quick-highlight', 1000);
        this.scheduleCleanup(tile, 'pulse', 1000);
    }

    scheduleCleanup(element, className, timeout) {
        setTimeout(() => {
            element.classList.remove(className);
            this.log(`Cleaned up effect: ${className}`);
        }, timeout);
    }

    clearTileEffects(tile) {
        const effectClasses = ['highlight', 'pulse', 'nudge', 'glow', 'quick-highlight'];
        effectClasses.forEach(cls => tile.classList.remove(cls));
    }

    cleanupTileEffects(tile) {
        const animationClasses = ['pulse', 'nudge'];
        animationClasses.forEach(cls => {
            if (tile.classList.contains(cls)) {
                tile.classList.remove(cls);
                this.log(`Animation cleanup: ${cls}`);
            }
        });
    }

    isThrottled(signalType) {
        const now = Date.now();
        const lastTime = this.throttleMap.get(signalType) || 0;
        return (now - lastTime) < 500;
    }

    setThrottle(signalType, duration) {
        setTimeout(() => {
            this.throttleMap.delete(signalType);
        }, duration);
        this.throttleMap.set(signalType, Date.now());
    }

    log(message, data = null) {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = `[${timestamp}] ${message}`;
        
        console.log(logEntry, data || '');
        
        const debugLog = document.getElementById('debugLog');
        if (debugLog) {
            const logLine = document.createElement('div');
            logLine.textContent = logEntry + (data ? ` ${JSON.stringify(data)}` : '');
            debugLog.appendChild(logLine);
            debugLog.scrollTop = debugLog.scrollHeight;
        }
    }
}

window.AdaptiveUI = AdaptiveUI;
window.adaptiveUI = new AdaptiveUI();
