window.addEventListener("load", () => {
  const leftDoor = document.querySelector(".door-left");
  const rightDoor = document.querySelector(".door-right");
  const truck = document.querySelector(".intro-truck");

  setTimeout(() => {
    leftDoor.classList.add("open");
    rightDoor.classList.add("open");
  }, 600);

  setTimeout(() => {
    truck.classList.add("move");
  }, 1400);

  setTimeout(() => {
    document.body.classList.add("show-site");
  }, 3600);
});
