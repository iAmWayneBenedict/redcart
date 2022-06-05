const hamburger = document.querySelector(".hamburger");
const hamburgerDiv = document.querySelectorAll(".hamburger div");
const hamburger2 = document.querySelector(".hamburger2");
const hamburgerDiv2 = document.querySelectorAll(".hamburger2 div");
const sideNav = document.querySelector("header");

// filter
const blur = document.querySelector(".blur");

// hamburger animate on click
hamburger.addEventListener("click", hamburgerActive);

function hamburgerActive() {
  blur.classList.add("blur-active");
  hamburger.style.transitionDelay = "0s";
  hamburgerDiv.forEach((element) => {
    element.style.transitionDelay = "0s";
  });
  hamburger2.style.transitionDelay = ".3s";
  hamburgerDiv2.forEach((element) => {
    element.style.transitionDelay = ".3s";
  });
  sideNav.classList.toggle("nav-active");
  hamburger.classList.toggle("hamburger-active");
  hamburger2.classList.toggle("hamburger-active2");
}

// hamburger2 animate on click
hamburger2.addEventListener("click", hamburger2Active);

function hamburger2Active() {
  blur.classList.remove("blur-active");
  smartphoneItems.classList.remove("activate-smartphones-items");
  smartphoneIconRotate.classList.remove("activate-rotate");
  hamburger2.style.transitionDelay = "0s";
  hamburgerDiv2.forEach((element) => {
    element.style.transitionDelay = "0s";
  });
  hamburger2.classList.toggle("hamburger-active2");
  sideNav.classList.toggle("nav-active");
  hamburger.style.transitionDelay = ".5s";
  hamburgerDiv.forEach((element) => {
    element.style.transitionDelay = ".5s";
  });
  hamburger.classList.toggle("hamburger-active");
  headerLi.style.transform = `translateX(-150%)`;
}

//filter activate
blur.addEventListener("click", hamburger2Active);


// Smartphone Side Navigation Menu

const smartphone = document.querySelector("#smartphones");
const headerLi = document.querySelector(".header-li");
const smartphoneItems = document.querySelector(".smartphone-container-items");
const smartphoneIconRotate = document.querySelector("#myimg-smartphone");

smartphone.addEventListener("mouseover", smartphoneOn);

function smartphoneOn() {
  headerLi.style.transform = `translateX(99%)`;

  // Smartphone Nav
  smartphoneItems.classList.add("activate-smartphones-items");
  smartphoneIconRotate.classList.add("activate-rotate");
}