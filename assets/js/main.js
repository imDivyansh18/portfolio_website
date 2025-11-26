document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons (if loaded)
    if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }

    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Initial theme detection (same logic as before)
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    // Theme Toggle Logic
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');

            if (htmlElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    }

    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // GSAP Animations
    if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animations
        const heroTimeline = gsap.timeline();

        heroTimeline.to('.hero-animate', {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });

        // Section Title Animations
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // Card Animations (Skills & Projects)
        gsap.utils.toArray('.glass-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'power3.out'
            });
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (!submitBtn) return;

            const originalText = submitBtn.innerText;

            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerText = 'Message Sent!';
                submitBtn.classList.add('bg-green-500', 'hover:bg-green-600');
                submitBtn.classList.remove('bg-primary', 'hover:bg-primary/90');

                contactForm.reset();

                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
                    submitBtn.classList.add('bg-primary', 'hover:bg-primary/90');
                }, 3000);
            }, 1500);
        });
    }
});
