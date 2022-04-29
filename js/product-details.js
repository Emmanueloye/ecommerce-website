let mainImage = document.querySelector(".main-image img");
let thumbnails = document.querySelectorAll(".thumb-img");
let currentImage = 0;

let tab = document.querySelector(".tab");
let tabBtns = document.querySelectorAll("e-tab-btn");
let tabPanes = document.querySelectorAll(".e-tab-pane");

let addReviewBtn = document.querySelector(".js-b");
let review = document.querySelector(".cust-rev");
let reviewForm = document.querySelector(".review-form");

addReviewBtn.addEventListener("click", function () {
  review.classList.remove("show");
  reviewForm.classList.add("show");
});

for (i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function (e) {
    thumbnails[currentImage].classList.remove("active");
    e.target.classList.add("active");
    mainImage.src = e.target.src;

    if (currentImage === thumbnails.length - 1) {
      currentImage = 0;
    } else {
      currentImage++;
    }
  });
}

tab.addEventListener("click", function (e) {
  let id = e.target.dataset.id;
  if (id) {
    for (i = 0; i < tabBtns.length; i++) {
      tabBtns[i].classList.remove("active");
    }
    e.target.classList.add("active");
    for (i = 0; i < tabPanes.length; i++) {
      tabPanes[i].classList.remove("show");
    }
    let element = document.getElementById(id);
    element.classList.add("show");
  }
});
