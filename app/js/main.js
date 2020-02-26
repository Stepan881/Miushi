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



btnOpen.addEventListener('click', function() {
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
});

btnClose.addEventListener('click', function() {
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
});


window.addEventListener('resize', function(event){
    let width = document.documentElement.clientWidth;
    if (width >= 1170) {
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
    } else {
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
    
  });

// document.addEventListener("DOMContentLoaded", function(event) {
//     headerAddress.classList.add('header__address--active');
//     headerMail.classList.add('header__mail--active');
//     headerContact.classList.add('header__contact--active');
//     headerCall.classList.add('header__call--active');
//     headerList.classList.add('header__list--active');
//     btnClose.classList.add('header__btn-close--active');
//     btnOpen.classList.add('header__btn-open--active');
//     headerImage.classList.add('header__image--active');
//     headerTop.classList.add('header__top--active');
//     headerBottom.classList.add('header__bottom--active');
//     header.classList.add('header--active');
//     headerItemPopup.forEach(element => {
        
//         element.style.display = "none";
//     });
//   });