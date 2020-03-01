let menuOpened = false;
let menuCollapseElement;
let menuElement;

document.addEventListener('DOMContentLoaded', () => {
    menuCollapseElement = document.querySelector('.menu-toggle');
    menuElement = document.querySelector('.menu-collapse');
    menuElement.style.display = 'none';
    menuCollapseElement.addEventListener('click', toggleMenu);
});

const toggleMenu = () => {

    menuElement.style.display = menuOpened ? 'none' : 'block';
    menuOpened = !menuOpened;

}