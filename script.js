const welcomeButton = document.getElementById("welcomeButton");

if (welcomeButton) {
  welcomeButton.addEventListener("click", closeWelcomeGate);
}

window.addEventListener("scroll", function () {
  handleProgressBar();
  handleTimelineHighlight();
}, { passive: true });

function closeWelcomeGate() {
  const overlay = document.getElementById("welcomeOverlay");

  if (!overlay) {
    return;
  }

  overlay.classList.add("is-hidden");

  document.body.classList.remove("no-scroll");
  document.documentElement.classList.remove("no-scroll");

  handleProgressBar();
  handleTimelineHighlight();
}

function handleProgressBar() {
  const progressBar = document.getElementById("luxuryBar");

  if (!progressBar) {
    return;
  }

  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

  progressBar.style.width = scrolled + "%";
}

function handleTimelineHighlight() {
  const steps = document.querySelectorAll(".step");
  const activationPoint = window.innerHeight * 0.75;

  steps.forEach(function (step) {
    const rect = step.getBoundingClientRect();

    if (rect.top < activationPoint) {
      step.classList.add("is-active");
    } else {
      step.classList.remove("is-active");
    }
  });
}

handleProgressBar();
handleTimelineHighlight();