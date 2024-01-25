const fixedNav = document.querySelector(".nav");
const textType = document.querySelector(".text");
const contactBtn = document.querySelector("#contact");

contactBtn.addEventListener("click", () => {
  document.querySelector(".contact").scrollIntoView({ behavior: smooth });
});

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > fixedNav.offsetHeight + 150) {
    fixedNav.classList.add("active");
  } else {
    fixedNav.classList.remove("active");
  }
}
