const mobile_nav = document.querySelector(".nav_menu");
const nav_header = document.querySelector(".container");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener('click', () => toggleNavbar());