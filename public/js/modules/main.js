import { initHeaderScroll } from './header.js';
import { initHamburger } from './hamburger.js';
import { initScrollBehavior } from './scroll.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initHamburger();
    initScrollBehavior();
}); 