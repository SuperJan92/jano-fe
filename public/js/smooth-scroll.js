import { gsap } from "/node_modules/gsap/index.js";
import { ScrollToPlugin } from "/node_modules/gsap/ScrollToPlugin.js";

// Registreer de plugin
gsap.registerPlugin(ScrollToPlugin);

document.addEventListener("DOMContentLoaded", () => {
    console.log("GSAP smooth scroll initialized.");

    // Selecteer alle links die beginnen met #
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Voorkom het standaardgedrag van springen

            // Haal de ID op van het doel-element
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                console.log(`Scrolling to: ${targetId}`);

                // Smooth scroll met GSAP
                gsap.to(window, {
                    duration: 0.8,
                    scrollTo: {
                        y: targetElement.offsetTop, // Scroll naar de offset van het doel-element
                        autoKill: true, // Stop de animatie als de gebruiker handmatig scrollt
                    },
                    ease: "power2.out", // Mooi smooth easing
                });
            } else {
                console.log(`Element met ID "${targetId}" niet gevonden.`);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".about__img");

    // Voeg een hover-animatie toe met GSAP
    image.addEventListener("mouseenter", () => {
        gsap.to(image, {
            duration: 0.5, // Langere duur om meerdere rondjes te zien
            rotation: 720, // Draai drie volledige rondjes (360 * 3)
            ease: "power2.out", // Smooth easing
        });
    });

    // Reset de afbeelding bij het verlaten van hover
    image.addEventListener("mouseleave", () => {
        gsap.to(image, {
            duration: 0.5,
            rotation: 0, // Reset naar originele positie
            ease: "power2.inOut",
        });
    });
});