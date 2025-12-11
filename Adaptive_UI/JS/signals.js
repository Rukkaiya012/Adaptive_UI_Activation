const BehaviourSignals = (function () {

  let hoverCount = 0;
  let undoCount = 0;
  let actionSpeedStart = 0;
  let dwellStart = 0;

  const SIGNALS = {
    EXCESSIVE_UNDO: "excessive_undo",
    REPEATED_HOVER: "repeated_hover",
    LONG_DWELL: "long_dwell",
    FAST_ACTION: "fast_action",
    BACKTRACK: "backtrack"
  };

  function logSignal(signal) {
    window.dispatchEvent(new CustomEvent("signal", {
      detail: { signal }
    }));
  }

  function trackHover() {
    hoverCount++;
    if (hoverCount >= 3) {
      logSignal(SIGNALS.REPEATED_HOVER);
      hoverCount = 0;
    }
  }

  function trackUndo() {
    undoCount++;
    if (undoCount >= 3) {
      logSignal(SIGNALS.EXCESSIVE_UNDO);
      undoCount = 0;
    }
  }

  function startDwell() {
    dwellStart = Date.now();
  }

  function endDwell() {
    const time = Date.now() - dwellStart;
    if (time > 3000) {
      logSignal(SIGNALS.LONG_DWELL);
    }
  }

  function startAction() {
    actionSpeedStart = Date.now();
  }

  function endAction() {
    const time = Date.now() - actionSpeedStart;
    if (time < 500) {
      logSignal(SIGNALS.FAST_ACTION);
    }
  }

  return {
    trackHover,
    trackUndo,
    startDwell,
    endDwell,
    startAction,
    endAction,
    SIGNALS
  };

})();
