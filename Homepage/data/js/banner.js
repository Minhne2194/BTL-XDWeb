let slider = document.querySelector('.slider .slider__list');
let items = document.querySelectorAll('.slider .slider__list-item');
let next = document.querySelector('.slider .next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .slider__dots li');

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function() {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};

prev.onclick = function() {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};

let refreshInterval = setInterval(() => {
  next.click();
}, 3000);

function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + 'px';

  let lastActiveDot = document.querySelector('.slider .slider__dots li.active');
  lastActiveDot.classList.remove('active');
  dots[active].classList.add('active');

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener('click', () => {
    active = key;
    reloadSlider();
  });
});

window.onresize = function(event) {
  reloadSlider();
};
