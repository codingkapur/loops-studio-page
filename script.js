'use strict';

const overlay =document.querySelector('.overlay');
const openMobileMenuBtn =document.querySelector('.fa-bars');
const closeMobileMenuBtn =document.querySelector('.fa-times');
const mobileMenu =document.querySelector('.navbar-mobile ');
const body = document.body;

const openMobileMenu = function() {
overlay.classList.remove('hidden');
mobileMenu.classList.remove('hidden');
openMobileMenuBtn.classList.add('hidden');
closeMobileMenuBtn.classList.remove("hidden");
body.style.overflow= "hidden";
}

const closeMobileMenu = function() {
    overlay.classList.add('hidden');
    mobileMenu.classList.add('hidden');
    openMobileMenuBtn.classList.remove('hidden');
    closeMobileMenuBtn.classList.add("hidden");
    body.style.overflow= "auto";
    }






openMobileMenuBtn.addEventListener('click', openMobileMenu);
closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);
document.addEventListener('keydown', function(e){
    e.key==="Escape"? closeMobileMenu : null;
})