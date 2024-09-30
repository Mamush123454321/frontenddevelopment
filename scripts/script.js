document.addEventListener("DOMContentLoaded", function () {
  const clothingItems = document.querySelectorAll(".clothing-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  clothingItems.forEach((item) => {
    observer.observe(item);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const clothingItems = document.querySelectorAll(".clothing-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  clothingItems.forEach((item) => {
    observer.observe(item);
  });
});

// https://codepen.io/malchata/pen/YeMyrQ

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burgermenu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuOverlay = document.createElement("div");

  menuOverlay.classList.add("menu-overlay");
  document.body.appendChild(menuOverlay);

  burgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("visible");
    menuOverlay.classList.toggle("visible");
  });

  menuOverlay.addEventListener("click", () => {
    mobileMenu.classList.remove("visible");
    menuOverlay.classList.remove("visible");
  });

  const closeButton = document.querySelector(".menu-close");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      mobileMenu.classList.remove("visible");
      menuOverlay.classList.remove("visible");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".signup-form");
  const overlay = document.querySelector(".overlay");
  const closeOverlayButton = document.querySelector(".overlay-close");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    overlay.classList.add("show");
  });

  closeOverlayButton.addEventListener("click", function () {
    overlay.classList.remove("show");
  });
});
