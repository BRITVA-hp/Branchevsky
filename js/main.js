window.addEventListener('DOMContentLoaded', () => {

  const countSlide = document.querySelector('.stock__card-counter--active'),
        slide = document.querySelectorAll('.stock__slider-card1'),
        total = document.querySelector('.stock__card-counter--all'),
        triggerModalMain = document.querySelectorAll('.stock__slider-main a'),
        triggerModalMobile = document.querySelectorAll('.stock__slider-media a'),
        stockModalMain = document.querySelector('.stock__modal-main'),
        stockModalMobile = document.querySelector('.stock__modal-mobile'),
        modalContentMain = stockModalMain.querySelector('.stock__modal-text'),
        modalContentMobile = stockModalMobile.querySelector('.stock__modal-text');

  total.textContent = slide.length;

  $('.variable-width').slick({
    prevArrow: $('.stock__card-arrow--right'),
    nextArrow: $('.stock__card-arrow--left'),
    dots: false,
    arrows : false,
    infinite: false,
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
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true
    });
  
  function addContent() {

  }
  
  function openModal(triggers, modal, visibleClass) {
    const close = modal.querySelector('.stock__modal-close'),
          content = modal.querySelector('.stock__modal-text');
          
    triggers.forEach((trigger, i) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        arrayContent.forEach((text, y) => {
          if (i == y) {
            content.innerHTML = text;
          }
        });
        modal.classList.add(visibleClass);
      });
    });
    close.addEventListener('click', () => {
      modal.classList.remove(visibleClass);
    });
    modal.addEventListener('click', e => {
      if (e.target == modal) {
        modal.classList.remove(visibleClass);
      }
    });
    document.addEventListener('keydown', e => {
      if (e.key == "Escape") {
        modal.classList.remove(visibleClass);
      }
    });
  }
  
  openModal(triggerModalMain, stockModalMain, 'stock__modal--visible');
  openModal(triggerModalMobile, stockModalMobile, 'stock__modal--visible');

  const arrayContent = [
    "Хорошие солнцезащитные очки – аксессуар первостепенной важности, они необходимы нашим глазам. </br></br> При выборе солнцезащитных очков не стоит забывать о главной их функции – защита от солнца. Болезни, которые вызывает вредное излучение, действительно серьезные: катаракта, ожег роговицы, злокачественные заболеваниями кожи век и конъюнктивы. </br></br> Что бы избежать данных сложнений, нужно выбирать качественную оптику.",
    "1Хорошие солнцезащитные очки – аксессуар первостепенной важности, они необходимы нашим глазам. </br></br> При выборе солнцезащитных очков не стоит забывать о главной их функции – защита от солнца. Болезни, которые вызывает вредное излучение, действительно серьезные: катаракта, ожег роговицы, злокачественные заболеваниями кожи век и конъюнктивы. </br></br> Что бы избежать данных сложнений, нужно выбирать качественную оптику.",
    "2Хорошие солнцезащитные очки – аксессуар первостепенной важности, они необходимы нашим глазам. </br></br> При выборе солнцезащитных очков не стоит забывать о главной их функции – защита от солнца. Болезни, которые вызывает вредное излучение, действительно серьезные: катаракта, ожег роговицы, злокачественные заболеваниями кожи век и конъюнктивы. </br></br> Что бы избежать данных сложнений, нужно выбирать качественную оптику.",
    "3Хорошие солнцезащитные очки – аксессуар первостепенной важности, они необходимы нашим глазам. </br></br> При выборе солнцезащитных очков не стоит забывать о главной их функции – защита от солнца. Болезни, которые вызывает вредное излучение, действительно серьезные: катаракта, ожег роговицы, злокачественные заболеваниями кожи век и конъюнктивы. </br></br> Что бы избежать данных сложнений, нужно выбирать качественную оптику.",
    "4Хорошие солнцезащитные очки – аксессуар первостепенной важности, они необходимы нашим глазам. </br></br> При выборе солнцезащитных очков не стоит забывать о главной их функции – защита от солнца. Болезни, которые вызывает вредное излучение, действительно серьезные: катаракта, ожег роговицы, злокачественные заболеваниями кожи век и конъюнктивы. </br></br> Что бы избежать данных сложнений, нужно выбирать качественную оптику.",
    "5Хорошие солнцезащитные очки – аксессуар первостепенной важности, они необходимы нашим глазам. </br></br> При выборе солнцезащитных очков не стоит забывать о главной их функции – защита от солнца. Болезни, которые вызывает вредное излучение, действительно серьезные: катаракта, ожег роговицы, злокачественные заболеваниями кожи век и конъюнктивы. </br></br> Что бы избежать данных сложнений, нужно выбирать качественную оптику."
  ];

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