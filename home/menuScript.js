document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {  
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});