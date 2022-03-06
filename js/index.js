const toggleButton = document.querySelector('.toggle-button')
const bar = document.querySelector('.bar')
const navbarLinks = document.querySelector('.navbar-links')

toggleButton.addEventListener('click', () => {
    if ('active' in navbarLinks.classList){
        navbarLinks.classList.delete('active');
        console.log(navbarLinks.classList);
    }else{
        navbarLinks.classList.add('active');
    }
});





