//  DROP DOWN MENU
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.nextElementSibling.classList.toggle("dropdown-content-hide");
  });
});

// HAMBURGER MENU
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const menuBg = document.getElementById("menu-bg");

menu.addEventListener("click", () => {
  menu.classList.toggle("change");
  nav.classList.toggle("change");
  menuBg.classList.toggle("change-bg");
});