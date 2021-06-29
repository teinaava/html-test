'use strcit'
const MENU = document.querySelector('.header__list');
const HEADER = document.querySelector('.header__menu');
function toggleMenu(){
    MENU.classList.toggle("header__list-active");
}


document.addEventListener('scroll',(e=>{

    if(pageYOffset>150){
        HEADER.classList.add("header__menu-down-active")
    }
    if(pageYOffset <= 150){
        HEADER.classList.remove('header__menu-down-active');
    }
}))

