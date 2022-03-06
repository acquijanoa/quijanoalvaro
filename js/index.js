'use strict';

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    if ('active' in navbarLinks.classList){
        navbarLinks.classList.delete('active');
        console.log(navbarLinks.classList);
    }else{
        navbarLinks.classList.add("active");
    }
});





