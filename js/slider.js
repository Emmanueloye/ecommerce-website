let slides = document.querySelectorAll(".slide");
let previousBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let slidePosition = 0;

previousBtn.addEventListener("click", function () {
  moveToPreviousslide();
});

nextBtn.addEventListener("click", function () {
  moveToNextSlide();
});

function updateSlides(n) {
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");
  }
  slides[n].classList.add("show");
}

function moveToNextSlide() {
  if (slidePosition === slides.length - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlides(slidePosition);
}

function moveToPreviousslide() {
  if (slidePosition == 0) {
    slidePosition = slides.length - 1;
  } else {
    slidePosition--;
  }
  updateSlides(slidePosition);
}

setInterval(moveToNextSlide, 5000);
