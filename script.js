let button = document.getElementById("menu_button");
let firstPage = document.getElementById("head");
let secondPage = document.getElementById("second_page");
let secondButton = document.getElementById("second_button");
let thirdButton = document.getElementById("third_button");
let sidebarbutton = document.getElementById("side_bar_button");
let menu = document.getElementById("menu_div");
let lightMode = document.getElementById("dark_light_button");
let sidebar = document.getElementById("side_bar");

button.addEventListener("click", function () {
  if ((firstPage.style.display = "block")) {
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
  }
});
secondButton.addEventListener("click", function () {
  if ((firstPage.style.display = "block")) {
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
  }
});
thirdButton.addEventListener("click", function () {
  if ((secondPage.style.display = "block")) {
    secondPage.style.display = "none";
    firstPage.style.display = "flex";
    if ((thirdButton.textContent = "||")) {
      thirdButton.textContent = "X";
    }
  }
});
sidebarbutton.addEventListener("click", function () {
  if ((secondPage.style.display = "flex")) {
    secondPage.style.display = "none";
    firstPage.style.display = "flex";
  }
  if ((sidebarbutton.textContent = "||")) {
    sidebarbutton.textContent = "X";
  }
});
