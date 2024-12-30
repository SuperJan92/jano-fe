
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
});

document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.querySelector(".header__container");
    const hamburgerButton = document.querySelector("button.hamburger");

    hamburgerButton.addEventListener("click", () => {
        headerContainer.classList.toggle("is-open");
    });
});