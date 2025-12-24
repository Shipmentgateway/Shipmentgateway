// Shipment Gateway intro animation
window.addEventListener("DOMContentLoaded", () => {
  const gate = document.getElementById("gate");
  const site = document.getElementById("site");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Safety: if gate missing, show site anyway
  if (!gate || !site) return;

  // Run animation sequence
  // 1) small delay
  setTimeout(() => {
    gate.classList.add("open");      // doors start opening
  }, 400);

  // 2) truck comes forward after doors start moving
  setTimeout(() => {
    gate.classList.add("truckgo");   // truck moves toward user
  }, 900);

  // 3) finish: fade out gate and reveal site
  setTimeout(() => {
    gate.classList.add("fadeout");
    site.classList.remove("site-hidden");
    site.classList.add("site-show");
  }, 3200);

  // 4) remove gate from layout after fade
  setTimeout(() => {
    gate.style.display = "none";
  }, 3900);
});
