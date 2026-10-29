// Работа с слайдерами 
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
const buttons   = document.querySelectorAll(".button-circle"); 

const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");

const slider = document.querySelector(".slider");
let currentIndex = 0;
let autoPlayInterval;

function goToSlide(index) {
  if (index < 0) {
    index = slideCount - 1;
  } else if (index >= slideCount) {
    index = 0;
  }
  currentIndex = index;
  slides.style.transform = `translateX(${-index * 100}%)`;

    buttons.forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });
}

prevArrow.addEventListener("click", () => 
    goToSlide(currentIndex - 1)
);
nextArrow.addEventListener("click", () => 
    goToSlide(currentIndex + 1)
);

  buttons.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            goToSlide(i);
        });
    });

goToSlide(0);

// Aвтоматическая прокрутка если пользователь нажал в не область слайдера
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 3000);
}

// Приостановка автоматической прокрутки
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

startAutoPlay();

// Останавливаем автопрокрутку, если пользователь навёл курсор на слайдер
slider.addEventListener("mouseenter", stopAutoPlay);

// Возобновляем автопрокрутку, когда пользователь убирает курсор
slider.addEventListener("mouseleave", startAutoPlay);




