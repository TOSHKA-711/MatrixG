const navToggleIcon = document.getElementById("navToggle");
const layer = document.getElementById("layer");
const navMenu = document.querySelector(".toggle-list");
const xIcon = document.querySelector(".x-icon");
const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");
const numThree = document.getElementById("numThree");
const numFour = document.getElementById("numFour");

// Handle toggle navbar
const toggleNavbar = () => {
  navMenu.style.display = layer.style.display = "flex";
  document.body.style.overflow = "hidden";
};

const closeNavbar = () => {
  layer.style.display = navMenu.style.display = "none";
  document.body.style.overflowY = "auto";
};

navToggleIcon.addEventListener("click", toggleNavbar);
xIcon.addEventListener("click", closeNavbar);
layer.addEventListener("click", closeNavbar);

// Count up functions
const countUpTo = (targetNum, element) => {
  let i = 0;

  function printNumber() {
    if (i <= targetNum) {
      element.innerHTML = i;
      i++;
      setTimeout(printNumber, 5);
    }
  }

  printNumber();
};

countUpTo(250, numOne);
countUpTo(150, numTwo);
countUpTo(97, numThree);
countUpTo(1, numFour);
