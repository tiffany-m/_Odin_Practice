//  DROP DOWN MENU
function toggleDropdown() {
  let dropdownContent = event.target.nextElementSibling;
  dropdownContent.classList.toggle("dropdown-content");
}

document.querySelectorAll(".dropdown-content").forEach((button) => {
  button.addEventListener("click", toggleDropdown);
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
