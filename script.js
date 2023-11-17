const slider = document.querySelector(".slider");
let count = 0;

function nextSlide() {
  count++;
  if (count >= slider.children.length) {
    count = 0;
  }
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(-${count * 100}%)`;
}

setInterval(nextSlide, 3000);z
