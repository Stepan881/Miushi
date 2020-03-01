"use strict";

const btnOpen = document.querySelector('.header__btn-open');
const btnClose = document.querySelector('.header__btn-close');
const header = document.querySelector('.header');
const headerAddress = document.querySelector('.header__address');
const headerMail = document.querySelector('.header__mail');
const headerContact = document.querySelector('.header__contact');
const headerCall = document.querySelector('.header__call');
const headerList = document.querySelector('.header__list');
const headerImage = document.querySelector('.header__image');
const headerTop = document.querySelector('.header__top');
const headerBottom = document.querySelector('.header__bottom');
const headerItemPopup = document.querySelectorAll('.header__item--popup');
const priorityBtn = document.querySelector('.priority__btn');
const priorityList = document.querySelector('.priority__list');
const aboutBtn = document.querySelector('.about__btn');
const mobileText = document.querySelectorAll('.mobile-text');
const footerList = document.querySelector('.footer__list');
const footerItem = document.querySelectorAll('.footer__item');
let width = window.innerWidth;
const articleWrapper = document.querySelectorAll('.article__wrapper');

articleWrapper.forEach(function(i) {
     
    i.addEventListener('click', function(event) {
      console.log('i: ', i);
      const num = i.querySelector('.article__count-num');

      if (event.target.classList[1] === 'article__minus' && num.outerText > 1) {
      num.innerHTML = Number(num.innerHTML) - 1;
      
    } else if (event.target.classList[1] === 'article__plus') {
      num.innerHTML = Number(num.innerHTML) + 1;
    }

  });
});




footerList.addEventListener('click', function(event) {
    if ((event.target.classList[0] === 'footer__link') && (width < 1169)) {
      event.preventDefault();
       event.path[1].classList.toggle("footer__item--avtive");
    } else if (event.target.classList[0] === 'footer__link'){
      event.preventDefault();
    }
});


aboutBtn.addEventListener('click', function(event) {
  event.preventDefault();
  mobileText.forEach(function(item, i) {
    mobileText[i].classList.toggle("dispalay-none");
  });
  
  if (mobileText[1].classList[2] === undefined) {
    aboutBtn.innerHTML = 'Скрыть';    
  } else {
    aboutBtn.innerHTML = 'Показать ещё';

    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});

priorityBtn.addEventListener('click', function(event) {
  event.preventDefault();
  priorityList.classList.toggle("priority__list--disable");

  if (priorityList.classList[1] === undefined) {
    priorityBtn.innerHTML = 'Скрыть все';
  } else {
    priorityBtn.innerHTML = 'Показать все';
    document.querySelector('#priority').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});

function add() {
  headerAddress.classList.add('header__address--active');
  headerMail.classList.add('header__mail--active');
  headerContact.classList.add('header__contact--active');
  headerCall.classList.add('header__call--active');
  headerList.classList.add('header__list--active');
  btnClose.classList.add('header__btn-close--active');
  btnOpen.classList.add('header__btn-open--active');
  headerImage.classList.add('header__image--active');
  headerTop.classList.add('header__top--active');
  headerBottom.classList.add('header__bottom--active');
  header.classList.add('header--active');
  headerItemPopup.forEach(element => {
      element.style.display = "none";
  });
}

function remove() {
  headerAddress.classList.remove('header__address--active');
  headerMail.classList.remove('header__mail--active');
  headerContact.classList.remove('header__contact--active');
  headerCall.classList.remove('header__call--active');
  headerList.classList.remove('header__list--active');
  btnClose.classList.remove('header__btn-close--active');
  btnOpen.classList.remove('header__btn-open--active');
  headerImage.classList.remove('header__image--active');
  headerTop.classList.remove('header__top--active');
  headerBottom.classList.remove('header__bottom--active');
  header.classList.remove('header--active');
  headerItemPopup.forEach(element => {
      
      element.style.display = "block";
  });
}
btnOpen.addEventListener('click', add);
btnClose.addEventListener('click', remove);

remove();


if (width > 749) {
  priorityList.classList.remove("priority__list--disable");
  window.location.hash = 'about';
} else {
  priorityList.classList.add("priority__list--disable");
  priorityBtn.innerHTML = 'Показать все';
}

let swiperHeader = new Swiper('.banner', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.banner__bulets',
    bulletClass: 'banner__bulet',
    bulletActiveClass: 'banner__bulet--active',
    clickable: true,
    type: 'bullets',   
  },
  navigation: {
    nextEl: '.banner__next',
    prevEl: '.banner__prev',
  },
});

const setsSwiper = document.querySelector('.sets > .sets__continer');
let swiperSets = new Swiper(setsSwiper, {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.pagination__bulets',
    bulletClass: 'pagination__bulet',
    bulletActiveClass: 'pagination__bulet--active',
    clickable: true,
    type: 'bullets',   
  },
  breakpoints: {
    0: {
      centeredSlides: true,
      loop: true,
    },
    750: {
      centeredSlides: false,
      loop: false,
      slidesPerView: 3,
      loopedSlides: 3,
    },
    1170: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    debugger: false
  },
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
});

const RollSwiper = document.querySelector('.rolls > .rolls__continer');
let swiperRoll = new Swiper(RollSwiper, {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.pagination__bulets',
    bulletClass: 'pagination__bulet',
    bulletActiveClass: 'pagination__bulet--active',
    clickable: true,
    type: 'bullets',   
  },
  breakpoints: {
    0: {
      centeredSlides: true,
      loop: true,
    },
    750: {
      centeredSlides: false,
      loop: false,
      slidesPerView: 3,
      loopedSlides: 3,
    },
    1170: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    debugger: false
  },
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
});

const pizzaSwiper = document.querySelector('.pizza > .pizza__continer');
let swiperpizza = new Swiper(pizzaSwiper, {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.pagination__bulets',
    bulletClass: 'pagination__bulet',
    bulletActiveClass: 'pagination__bulet--active',
    clickable: true,
    type: 'bullets',   
  },
  breakpoints: {
    0: {
      centeredSlides: true,
      loop: true,
    },
    750: {
      centeredSlides: false,
      loop: false,
      slidesPerView: 3,
      loopedSlides: 3,
    },
    1170: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    debugger: false
  },
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
});

const pizzawok = document.querySelector('.wok > .wok__continer');
let swiperwok = new Swiper(pizzawok, {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.pagination__bulets',
    bulletClass: 'pagination__bulet',
    bulletActiveClass: 'pagination__bulet--active',
    clickable: true,
    type: 'bullets',   
  },
  breakpoints: {
    0: {
      centeredSlides: true,
      loop: true,
    },
    750: {
      centeredSlides: false,
      loop: false,
      slidesPerView: 3,
      loopedSlides: 3,
    },
    1170: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    debugger: false
  },
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
});

const stock = document.querySelector('.stock > .stock__continer');
let swiperstock = new Swiper(stock, {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.pagination__bulets',
    bulletClass: 'pagination__bulet',
    bulletActiveClass: 'pagination__bulet--active',
    clickable: true,
    type: 'bullets',   
  },
  breakpoints: {
    0: {
      centeredSlides: true,
      loop: true,
    },
    750: {
      centeredSlides: false,
      loop: false,
      slidesPerView: 3,
      loopedSlides: 3,
    },
    1170: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    debugger: false
  },
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
});