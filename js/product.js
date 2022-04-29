let dropDown = document.querySelector(".main-category");
let filter = document.querySelector('.filter-icon i');
let mainCategory = document.querySelector('.main-category');

dropDown.addEventListener("click", function (e) {
    let element = e.target.parentNode.querySelector(".category-dp");
    element.classList.toggle("active");
    let panel = element.nextElementSibling;
    if(panel.style.maxHeight) {
        panel.style.maxHeight =null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
    // element.nextElementSibling.classList.add("show");
  });

filter.addEventListener('click', function() {
    // console.log('clicked');
    mainCategory.classList.toggle('show');
});


