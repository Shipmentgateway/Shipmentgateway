(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const gate = document.getElementById("gate");
  const site = document.getElementById("site");

  const hasPlayed = localStorage.getItem("sg_gate_played") === "1";

  function showSite() {
    if (gate) gate.style.display = "none";
    if (site) site.style.display = "block";
  }

  // If already played once, skip animation
  if (hasPlayed) {
    showSite();
    return;
  }

  // Play animation once
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.querySelector(".left")?.classList.add("open");
      document.querySelector(".right")?.classList.add("open");

      setTimeout(() => {
        localStorage.setItem("sg_gate_played", "1");
        showSite();
      }, 1450);
    }, 650);
  });
})();
