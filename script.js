const fixedNav = document.querySelector(".nav");
const textType = document.querySelector(".text");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > fixedNav.offsetHeight + 150) {
    fixedNav.classList.add("active");
  } else {
    fixedNav.classList.remove("active");
  }
}

let languageContent = {
  srp: {
    "header title": "Lorem ipsum dolor sit amet consectetur",
    "header text":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, incidunt ducimus unde consectetur quisquam dolor amet dignissimos minima",
    "about title":
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit",
    "about text":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, incidunt ducimus unde consectetur quisquam dolor amet dignissimos minima Lorem ipsum dolor sit amet consectetur adipisi",
    "next about":
      "TLorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  eng: {
    "header title": "ENG Lorem ipsum dolor sit amet consectetur",
    "header text":
      "ENG Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, incidunt ducimus unde consectetur quisquam dolor amet dignissimos minima",
    "about title":
      "ENG Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit",
    "about text":
      "ENG Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, incidunt ducimus unde consectetur quisquam dolor amet dignissimos minima Lorem ipsum dolor sit amet consectetur adipisi",
    "next about":
      "ENG TLorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
};

function swithcLang(lang) {
  for (let key in languageContent[lang]) {
    document.getElementById(key).innerHTML = languageContent[lang][key];
  }
}
