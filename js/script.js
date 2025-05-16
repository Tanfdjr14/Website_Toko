// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu diklik
const hamburger = document.querySelector("#hamburger-menu");

hamburger.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// klik di luar sidebar untuk menghilangkan nav
const hamburgerIcon = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburgerIcon.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
