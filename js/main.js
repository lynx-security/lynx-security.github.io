/**
 * Lynx Security - Shared JavaScript
 * Multi-page static site - Minimal vanilla JS
 */

(function() {
    'use strict';

    const CONFIG = {
        headerScrollThreshold: 50,
        revealThreshold: 0.18,
        revealDelayStep: 70,
        parallaxLimit: 40
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const elements = {
        header: document.getElementById('header'),
        navToggle: document.querySelector('.nav-toggle'),
        navMenu: document.querySelector('.nav-menu'),
        revealElements: document.querySelectorAll('.reveal'),
        parallaxElements: document.querySelectorAll('[data-parallax]')
    };

    // Header scroll effect
    function handleHeaderScroll() {
        if (!elements.header) return;
        const isScrolled = window.scrollY > CONFIG.headerScrollThreshold;
        elements.header.classList.toggle('header--scrolled', isScrolled);
    }

    // Mobile navigation
    function initMobileNav() {
        if (!elements.navToggle || !elements.navMenu) return;

        elements.navToggle.addEventListener('click', () => {
            const isExpanded = elements.navToggle.getAttribute('aria-expanded') === 'true';
            elements.navToggle.setAttribute('aria-expanded', !isExpanded);
            elements.navMenu.classList.toggle('is-open', !isExpanded);
        });

        elements.navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                elements.navToggle.setAttribute('aria-expanded', 'false');
                elements.navMenu.classList.remove('is-open');
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.navMenu.classList.contains('is-open')) {
                elements.navToggle.setAttribute('aria-expanded', 'false');
                elements.navMenu.classList.remove('is-open');
            }
        });
    }

    // Scroll reveal
    function initScrollReveal() {
        if (!elements.revealElements.length) return;

        if (prefersReducedMotion) {
            elements.revealElements.forEach(el => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: CONFIG.revealThreshold, rootMargin: '0px 0px -8% 0px' });

        elements.revealElements.forEach(el => observer.observe(el));
    }

    function initRevealDelays() {
        if (!elements.revealElements.length) return;

        elements.revealElements.forEach((el, index) => {
            const delay = (index % 6) * CONFIG.revealDelayStep;
            el.style.setProperty('--reveal-delay', `${delay}ms`);
        });
    }

    function initParallax() {
        if (!elements.parallaxElements.length || prefersReducedMotion) return;
        if (window.innerWidth < 768) return;

        function updateParallax() {
            const viewportHeight = window.innerHeight || 1;
            elements.parallaxElements.forEach(el => {
                const speed = Number(el.getAttribute('data-parallax-speed') || 0.1);
                const scale = Number(el.getAttribute('data-parallax-scale') || 1);
                const rect = el.getBoundingClientRect();
                const progress = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
                const clamped = Math.max(-1, Math.min(1, progress));
                const offset = clamped * CONFIG.parallaxLimit * speed;
                el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0) scale(${scale})`;
            });
        }

        let ticking = false;
        const requestUpdate = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
        };

        window.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', requestUpdate);
        updateParallax();
    }

    // Smooth scroll for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (!target) return;

                e.preventDefault();
                const headerHeight = elements.header ? elements.header.offsetHeight : 72;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            });
        });
    }

    // Initialize
    function init() {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleHeaderScroll();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        handleHeaderScroll();
        initMobileNav();
        initRevealDelays();
        initScrollReveal();
        initParallax();
        initSmoothScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
