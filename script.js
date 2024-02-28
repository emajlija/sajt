const fixedNav = document.querySelector(".nav");
const textType = document.querySelector(".text");
const srpBtn = document.querySelector(".lang-btn__srp");
const engBtn = document.querySelector(".lang-btn__eng");
const hiddenEl = document.querySelectorAll(".hide");
const logo = document.querySelector(".logo-animation");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showing");
    } else {
      entry.target.classList.remove("showing");
    }
  });
});

hiddenEl.forEach((el) => observer.observe(el));

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".loader").style.visibility = "visible";
  } else {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

srpBtn.style.color = "orange";
window.addEventListener("scroll", fixNav);
srpBtn.addEventListener("click", () => {
  srpBtn.style.color = "orange";
  engBtn.style.color = "#ab8566";
});

engBtn.addEventListener("click", () => {
  engBtn.style.color = "orange";
  srpBtn.style.color = "#ab8566";
});

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

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  logo.style.transform = "translateX(" + -scrollPosition * 1.5 + "px)";
});
