window.addEventListener('DOMContentLoaded', () => {

  const countSlide = document.querySelector('.stock__card-counter--active'),
        slide = document.querySelectorAll('.stock__slider-card1'),
        total = document.querySelector('.stock__card-counter--all');

    total.textContent = slide.length;
  $('.variable-width').slick({
    prevArrow: $('.stock__card-arrow--right'),
    nextArrow: $('.stock__card-arrow--left'),
    dots: false,
    arrows : false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true
    });
  
    $('.stock__card-arrow--left').on('click', function() {
    $('.variable-width').slick('slickPrev');
    });
  
    $('.stock__card-arrow--right').on('click', function() {
    $('.variable-width').slick('slickNext');
    });

    $('.variable-width').on('afterChange', function(event, slick, currentSlide, nextSlide){ //счётчик слайдов
      countSlide.innerText = currentSlide + 1;
    });

    $('.variable-width1').slick({
      dots: true,
      arrows : false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: true
      });
  // const dots = document.querySelector('.variable-width1 .slick-dots');

  // console.log(dots);

  // dots.style.cssText = `margin-left: ${screen.width/2}px; transform: translateX(-50%)`;

  // window.addEventListener(`resize`, event => {
  //   dots.style.cssText = `margin-left: ${screen.width/2}px; transform: translateX(-50%)`;
  // }, false);
  

  // const sliderBox = document.querySelector('.stock__slider'),
  //       sliderWrapper = document.querySelector('.stock__slider-wrap'),
  //       slide = sliderBox.querySelectorAll('.stock__slider-card'),
  //       next = document.querySelector('.stock__card-arrow--right'),
  //       prev = document.querySelector('.stock__card-arrow--left'),
  //       counterActive = document.querySelector('.stock__card-counter--active'),
  //       counterAll = document.querySelector('.stock__card-counter--all'),
  //       width = (+window.getComputedStyle(slide[0]).width.substring(0, window.getComputedStyle(slide[0]).width.length - 2) + 
  //       +window.getComputedStyle(slide[0]).marginRight.substring(0, window.getComputedStyle(slide[0]).marginRight.length - 2));

  // let counter = 1;
  // let offset = 0;

  // sliderBox.style.width = width * +slide.length + 'px';
  // sliderWrapper.style.padding = '40px 0 40px 40px';
  // sliderBox.style.transition = '0.5s all';

  // next.addEventListener('click', () => {
  //   if (offset == width * (slide.length - 1)) {
  //     offset = 0;
  //   } else {
  //     offset += width;
  //   }
  //   sliderBox.style.transform = `translateX(-${offset}px)`;

  //   counter++;

  //   if (counter > slide.length) {
  //           counter = 1;
  //         }
  //   counterActive.textContent = counter;
  // });

  // prev.addEventListener('click', () => {
  //   if (offset == 0) {
  //     offset = width * (slide.length - 1);
  //   } else {
  //     offset -= width;
  //   }
  //   sliderBox.style.transform = `translateX(-${offset}px)`;

  //   counter--;

  //     if (counter < 1) {
  //       counter = slide.length;
  //     }
  //     counterActive.textContent = counter;
  // });
  // counterAll.textContent = slide.length;

});