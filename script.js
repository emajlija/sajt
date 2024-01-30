const fixedNav = document.querySelector(".nav");
const textType = document.querySelector(".text");
const languageSelect = document.getElementById("language-select");
const srp = document.getElementById("srp");
const eng = document.getElementById("eng");

window.addEventListener("scroll", fixNav);

languageSelect.addEventListener("change", selectLanguage);

function fixNav() {
  if (window.scrollY > fixedNav.offsetHeight + 150) {
    fixedNav.classList.add("active");
  } else {
    fixedNav.classList.remove("active");
  }
}

function selectLanguage() {
  if (languageSelect.value === "eng") {
    srp.forEach((elem) => (elem.style.display = "none"));
    eng.innerText = "XXXXXXXXXXXXXX";
  } else {
    eng.forEach((elem) => (elem.style.display = "none"));
  }
}
