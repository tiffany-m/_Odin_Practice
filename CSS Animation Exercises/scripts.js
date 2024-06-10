// Exercise 2
const openButton = document.getElementById("trigger-modal");
const closeButton = document.getElementById("close-modal");

function toggleModal() {
  const modalDiv = document.querySelector(".popup-modal");
  const backdrop = document.querySelector(".backdrop");
  modalDiv.classList.toggle("show");
  backdrop.classList.toggle("show");
}

openButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

// Exercise 3
const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuTitle.addEventListener("click", e => {
  if (e.target === e.currentTarget) {
    dropdownMenu.classList.toggle("visible");
  }
});

window.addEventListener("click", e => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.classList.remove("visible");
  }
});