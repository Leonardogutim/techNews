document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cards', { delay: 500});
ScrollReveal().reveal('.new-banner-two', { delay: 500});
ScrollReveal().reveal('.cards-banner-one', { delay: 500});