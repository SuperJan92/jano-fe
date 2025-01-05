document.addEventListener("DOMContentLoaded", () => {
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // Stel de viewporthoogte in bij laden en resizing
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    // Forceer een reflow op de hero en loader elementen
    const heroElement = document.querySelector('.hero');
    const loaderElement = document.querySelector('#js-overlay'); // Pas aan naar jouw loader-ID
    if (heroElement) {
        heroElement.style.display = 'none';
        heroElement.offsetHeight; // Trigger reflow
        heroElement.style.display = 'flex'; // Herstel oorspronkelijke display
    }
    if (loaderElement) {
        loaderElement.style.display = 'none';
        loaderElement.offsetHeight; // Trigger reflow
        loaderElement.style.display = ''; // Herstel oorspronkelijke display
    }
});
document.addEventListener('touchstart', () => {
    const heroElement = document.querySelector('.hero');
    if (heroElement) {
        heroElement.offsetHeight; // Force layout recalculatie
    }
}, { once: true }); // Alleen de eerste keer dat de pagina wordt aangeraakt