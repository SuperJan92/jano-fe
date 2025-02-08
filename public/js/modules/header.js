export function initHeaderScroll() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const SCROLL_THRESHOLD = 100;
    const BLUR_THRESHOLD = 50;  // Eerder blur effect dan hide effect
    const MOBILE_BREAKPOINT = 768;

    window.addEventListener('scroll', () => {
        // Skip op mobiel
        if (window.innerWidth < MOBILE_BREAKPOINT) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Blur effect
        if (scrollTop > BLUR_THRESHOLD) {
            header?.classList.add('header--blur');
        } else {
            header?.classList.remove('header--blur');
        }
        
        // Hide/show effect
        if (scrollTop > lastScrollTop && scrollTop > SCROLL_THRESHOLD) {
            header?.classList.add('header--hidden');
        } else {
            header?.classList.remove('header--hidden');
        }
        
        lastScrollTop = scrollTop;
    });

    // Reset classes bij resize naar mobiel
    window.addEventListener('resize', () => {
        if (window.innerWidth < MOBILE_BREAKPOINT) {
            header?.classList.remove('header--blur', 'header--hidden');
        }
    });
} 