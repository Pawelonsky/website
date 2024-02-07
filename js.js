const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");
const navItems = document.querySelector(".nav__items");

const tabs = document.querySelectorAll(".about__button");
const tabsContent = document.querySelectorAll(".about__table");

const form = document.querySelector("form");
const reason = document.querySelector(".reason-select");
const options = document.querySelectorAll("option");
const submitForm = document.querySelector(".submit__form-button");
const inputs = document.querySelectorAll(".form-group input");
const errors = document.querySelectorAll(".errorText");

const carousel = document.querySelector(".testimonials__slide-wrapper");
const slides = document.querySelectorAll(".testimonials__slide");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

const handleSlide = () => {
  currentIndex++;
  changeSlide();
};

let startCarousel = setInterval(handleSlide, 5000);

const changeSlide = () => {
  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex === slides.length - 1;
  }

  dots.forEach((dot) => {
    dot.classList.remove("activeColor");
    dots[currentIndex].classList.add("activeColor");
  });

  slides.forEach((slide) => {
    carousel.style.transform = `translateX(${
      -currentIndex * slide.offsetWidth
    }px)`;
  });
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index
    changeSlide();
    clearInterval(startCarousel)
    let startCarousel = setInterval(handleSlide, 5000);
  });
});

submitForm.addEventListener("click", (e) => {
  e.preventDefault();

  let messageError = "the field is required";

  inputs.forEach((input, index) => {
    if (input.value == "" || input.value == null) {
      errors[index].textContent = messageError;
    } else {
      errors[index].textContent = "";
    }
  });

  const lastError = errors[errors.length - 1];

  if (reason.value == "") {
    lastError.textContent = messageError;
  } else {
    lastError.textContent = "";
  }

  // const petsEl = form.elements["pets"];
  // if (petsEl.value === "") {
  //   petsEl.nextSibling.textContent = messageError;
  // } else {
  //   petsEl.nextSibling.textContent = "";
  // }
});

openMenu.addEventListener("click", () => {
  navItems.style.top = "0";
});

closeMenu.addEventListener("click", () => {
  navItems.style.top = "-100%";
});

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabsContent.forEach((tabContent, index) => {
      tabContent.classList.remove("activeTable");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("activeColor");
    });
    tabs[index].classList.add("activeColor");
    tabsContent[index].classList.add("activeTable");
  });
});
