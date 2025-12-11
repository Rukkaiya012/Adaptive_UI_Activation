const mainPanel = document.getElementById("main-panel");
const secondaryPanel = document.getElementById("secondary-panel");
const actionBtn = document.getElementById("action-btn");
const undoBtn = document.getElementById("undo-btn");

secondaryPanel.addEventListener("mouseenter", BehaviourSignals.trackHover);

undoBtn.addEventListener("click", BehaviourSignals.trackUndo);

document.addEventListener("mousedown", BehaviourSignals.startAction);
document.addEventListener("mouseup", BehaviourSignals.endAction);

mainPanel.addEventListener("mouseenter", BehaviourSignals.startDwell);
mainPanel.addEventListener("mouseleave", BehaviourSignals.endDwell);


window.addEventListener("signal", function (e) {
  const signal = e.detail.signal;

  mainPanel.classList.remove("highlight", "pulse", "shift");
  secondaryPanel.classList.remove("dim");

  switch (signal) {
    case BehaviourSignals.SIGNALS.EXCESSIVE_UNDO:
      mainPanel.classList.add("pulse");
      break;

    case BehaviourSignals.SIGNALS.REPEATED_HOVER:
      mainPanel.classList.add("highlight");
      secondaryPanel.classList.add("dim");
      break;

    case BehaviourSignals.SIGNALS.LONG_DWELL:
      mainPanel.classList.add("shift");
      break;

    case BehaviourSignals.SIGNALS.FAST_ACTION:
      mainPanel.classList.add("highlight");
      break;
  }

  console.log(`SIGNAL: ${signal}`);
});
