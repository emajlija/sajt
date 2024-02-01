const fixedNav = document.querySelector(".nav");
const textType = document.querySelector(".text");
const languageSelect = document.getElementById("language-select");
const srp = document.querySelectorAll(".srp");
const eng = document.querySelectorAll(".eng");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > fixedNav.offsetHeight + 150) {
    fixedNav.classList.add("active");
  } else {
    fixedNav.classList.remove("active");
  }
}
