document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.querySelector(".header__container");
    const hamburgerButton = document.querySelector("button.hamburger");
    const mainblur = document.querySelector("main");
    const hamburger = document.querySelector(".hamburger");
    const scrollableElement = window;

    // Toggle menu bij klik op de hamburgerknop
    hamburgerButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Voorkomt dat de klik elders wordt geregistreerd
        const isOpen = headerContainer.classList.toggle("is-open");
        mainblur.classList.toggle("blur", isOpen);
        hamburger.classList.toggle("is-active", isOpen);
    });

    // Klik buiten het menu sluit het menu
    document.addEventListener("click", (event) => {
        if (!headerContainer.contains(event.target) && !hamburgerButton.contains(event.target)) {
            closeMenu();
        }
    });

    // Scroll op body sluit het menu
    scrollableElement.addEventListener("scroll", () => {
        closeMenu();
    });

    // Functie om het menu te sluiten
    function closeMenu() {
        headerContainer.classList.remove("is-open");
        mainblur.classList.remove("blur");
        hamburger.classList.remove("is-active");
    }
});