'use strict';

const menuBarIcon = document.querySelector('.navigation-links i');
const navigationMenu = document.querySelector('.navigation-links ul');



menuBarIcon.addEventListener('click', () => {
    if (menuBarIcon.classList.contains('fa-bars')) {
        menuBarIcon.classList.remove('fa-bars');
        menuBarIcon.classList.add('fa-xmark');
        navigationMenu.style.visibility = 'visible';
    } else {
        menuBarIcon.classList.add('fa-bars');
        menuBarIcon.classList.remove('fa-xmark');
        navigationMenu.style.visibility = 'hidden';
    }



})