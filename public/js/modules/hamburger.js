export function initHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const headerContainer = document.querySelector('.header__container');
    const main = document.querySelector('main');

    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        headerContainer?.classList.toggle('is-open');
        main?.classList.toggle('blur');
    });
} 