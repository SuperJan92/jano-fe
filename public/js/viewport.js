document.addEventListener("DOMContentLoaded", () => {
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // Stel de juiste viewporthoogte in bij laden en resizing
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    // Simuleer een klik op de body na het laden
    const body = document.querySelector('body');
    if (body) {
        setTimeout(() => {
            body.click(); // Virtuele klik
        }, 100); // Wacht 100ms na laden
    }
});