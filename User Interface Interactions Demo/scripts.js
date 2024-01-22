//  DROP DOWN MENU
function toggleDropdown() {
  const dropdownContent = document.getElementById("dropdownContent");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

document.querySelectorAll(".dropdown-content").forEach((item) => {
  item.addEventListener("click", () => {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = "none";
  });
});

// HAMBURGER MENU