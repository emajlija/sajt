const fixedNav = document.querySelector(".header__nav");
const textType = document.querySelector(".text");
const contactBtn = document.querySelector("#contact");

window.addEventListener("scroll", fixNav);
contactBtn.addEventListener("click", function () {
  window.open("../pages/contact.html", "_blank");
});

function fixNav() {
  if (window.scrollY > fixedNav.offsetHeight + 150) {
    fixedNav.classList.add("active");
  } else {
    fixedNav.classList.remove("active");
  }
}
