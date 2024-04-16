// notatie camel case
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const overlay = document.querySelector('.overlay');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');


const openMobileMenu = () => {
    overlay.style.display = 'block';
    mobileMenuContainer.style.transform = 'translateX(0px)';
};

mobileMenuIcon.addEventListener('click', openMobileMenu);

const closeMobileMenu = () => {
    overlay.style.display = 'none';
    mobileMenuContainer.style.transform = 'translateX(360px)';
};

overlay.addEventListener('click', closeMobileMenu);