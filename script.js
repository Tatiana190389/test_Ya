const carousel = document.querySelector('.participants__cards');
const prevButtonBrowser = document.querySelector('.toggle-left-br');
const nextButtonBrowser = document.querySelector('.toggle-right-br');
const prevButtonMobile = document.querySelector('.participants-mobile-left');
const nextButtonMobile = document.querySelector('.participants-mobile-right');
const sliders = document.querySelector('.sliders');
const slidersMobile = document.querySelector('.sliders-mobile');
const slidersArr = Array.from(carousel.querySelectorAll('li'));
const slidersCount = slidersArr.length;

let i = 1;
for (let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  i++;
}
let tablet = document.documentElement.clientWidth < 995;
let width = tablet ? 355 : 414;
let count = tablet ? 1 : 3;
let slide = 1;

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0;
function nextSlides() {
  console.log(position);
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
  slide += 1;
  sliders.textContent = '6/6';
  slidersMobile.textContent = `${slide}/6`;
}

function prevSlides() {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
  sliders.textContent = '3/6';
  slide -= 1;
  slidersMobile.textContent = `${slide}/6`;
}

setInterval(() => {
  position == 0 ? nextSlides() : prevSlides();
  position != -1775 ? nextSlides() : prevSlides();
}, 4000);

nextButtonBrowser.addEventListener('click', nextSlides);
prevButtonBrowser.addEventListener('click', prevSlides);
prevButtonMobile.addEventListener('click', prevSlides);
nextButtonMobile.addEventListener('click', nextSlides);
