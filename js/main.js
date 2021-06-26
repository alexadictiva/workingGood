let buttonMenu = document.getElementById("buttonMenu");
buttonMenu.addEventListener("click", showMenu);
let menu = document.querySelector(".menu");

function showMenu() {
  menu.classList.toggle("hidden");
}
