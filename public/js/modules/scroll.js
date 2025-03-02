export function initScrollBehavior() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').slice(1);
            
            if (sectionId === 'home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const element = document.getElementById(sectionId);
            if (element) {
                // Menu sluiten op mobiel
                if (window.innerWidth < 768) {
                    // Trigger een klik op de hamburger knop om het menu te sluiten
                    const hamburgerButton = document.querySelector('.hamburger');
                    if (hamburgerButton) {
                        hamburgerButton.dispatchEvent(new Event('click'));
                    }
                }

                // Bereken de juiste offset op basis van schermgrootte
                let offset = 0;
                
                // Voor lage schermen (landscape mode)
                if (window.innerHeight <= 500) {
                    offset = 80; // Meer ruimte boven voor lage schermen
                } 
                // Voor mobiel
                else if (window.innerWidth < 768) {
                    offset = 60;
                } 
                // Voor specifieke secties
                else if (sectionId === 'about') {
                    offset = 40;
                }

                // Scroll naar het element met de juiste offset
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
} 