// Slider 1
const slides1 = document.querySelector(".slides:nth-of-type(1)");
const totalSlides1 = slides1.children.length;
let index1 = 0;

function nextSlide1() {
  index1 = (index1 + 1) % totalSlides1;
  updateSlide1();
}

function prevSlide1() {
  index1 = (index1 - 1 + totalSlides1) % totalSlides1;
  updateSlide1();
}

function updateSlide1() {
  const offset1 = -index1 * 100;
  slides1.style.transform = `translateX(${offset1}%)`;
}

const slides2 = document.querySelector(".slides:nth-of-type(2)");
const totalSlides2 = slides2.children.length;
let index2 = 0;

function nextSlide2() {
  index2 = (index2 + 1) % totalSlides2;
  updateSlide2();
}

function prevSlide2() {
  index2 = (index2 - 1 + totalSlides2) % totalSlides2;
  updateSlide2();
}

function updateSlide2() {
  const offset2 = -index2 * 100;
  slides2.style.transform = `translateX(${offset2}%)`;
}
