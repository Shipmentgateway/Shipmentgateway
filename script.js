// Footer year
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

// Gate intro (run once per browser session)
(function(){
  const gate = document.getElementById("gate");
  if (!gate) return;

  // Run ONLY on home page
  const isHome = document.body.classList.contains("page-home");
  if (!isHome) {
    gate.style.display = "none";
    return;
  }

  const seen = sessionStorage.getItem("sg_gate_seen");
  if (seen) {
    gate.style.display = "none";
    return;
  }

  // Start animation
  requestAnimationFrame(() => gate.classList.add("open"));

  // Fade out after pass animation finishes
  setTimeout(() => gate.classList.add("fade-out"), 50);

  // Remove from layout and remember
  setTimeout(() => {
    sessionStorage.setItem("sg_gate_seen", "1");
    gate.style.display = "none";
  }, 3600);
})();
