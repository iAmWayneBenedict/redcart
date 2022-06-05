//Carousel
const carouselContainer = document.querySelector(".slider").children;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let counter = 0;

//Call function on window load
let timer = -1;
timer = setInterval(nextSlide, 5000);

nextBtn.addEventListener("click", nextSlide);

function nextSlide() {
  if (counter == carouselContainer.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  // updates/switches to the next slide
  update();
  // updates the marker
  updateMarker();
}

prevBtn.addEventListener("click", prevSlide);

function prevSlide() {
  if (counter == 0) {
    counter = carouselContainer.length - 1;
  } else {
    counter--;
  }
  // updates/switches to the next slide
  update();
  // updates the marker
  updateMarker();
}

//
function update() {
  for (let index = 0; index < carouselContainer.length; index++) {
    carouselContainer[index].classList.remove("active");
  }
  carouselContainer[counter].classList.add("active");
}

//Adding marker
const markerContainer = document.querySelector(".marker");

function addMarker() {
  for (let index = 0; index <= carouselContainer.length; index++) {
    let markerBtn = document.createElement("div");
    markerBtn.setAttribute("onclick", "displayMark(this)");
    if (index == carouselContainer.length) {
      let pauseBtn = document.createElement("div");
      for (let index = 0; index < 2; index++) {
        markerBtn = document.createElement("div");
        markerBtn.classList.add("pause");
        pauseBtn.classList.add("pause-btn");
        pauseBtn.appendChild(markerBtn);
      }
      let mySpan = document.createElement("div");
      mySpan.classList.add("span");
      pauseBtn.appendChild(mySpan);
      markerContainer.appendChild(pauseBtn);
    } else {
      markerContainer.appendChild(markerBtn);
    }
  }
}
addMarker();

//updating marker
function updateMarker() {
  for (let index = 0; index < markerContainer.children.length; index++) {
    markerContainer.children[index].classList.remove("active-marker");
  }
  markerContainer.children[counter].classList.add("active-marker");
}