document.addEventListener("DOMContentLoaded", () => {
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    const heroElement = document.querySelector('.hero');
    if (heroElement) {
        heroElement.offsetHeight; // Trigger een reflow
    }
});