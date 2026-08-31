const menu = document.querySelector('header');
const menuIcon = document.querySelector('.menu-icon'); 
const allOfThePage = document.querySelector('.all-of-the-page');


menuIcon.addEventListener('click', function(event) {
    event.stopPropagation();
    menu.classList.toggle('active');
});

allOfThePage.addEventListener('click', function() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});


const menuLinks = menu.querySelectorAll('a.header_item');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});