document.addEventListener('DOMContentLoaded', () => {
    // ===== Preloader =====
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }

    // ===== Mobile Menu Toggle =====
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    const toggleIcon = toggle ? toggle.querySelector('i') : null;

    if (toggle && menu && toggleIcon) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');

            // Change icon
            if (menu.classList.contains('active')) {
                toggleIcon.classList.remove('fa-bars');
                toggleIcon.classList.add('fa-times'); // X icon
            } else {
                toggleIcon.classList.remove('fa-times');
                toggleIcon.classList.add('fa-bars'); // Hamburger
            }
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-menu ul li a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggleIcon.classList.remove('fa-times');
                toggleIcon.classList.add('fa-bars');
            });
        });
    }

    // ===== Sticky Header on Scroll =====
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // ===== Back-to-Top Button =====
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== Optional: Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


    var testimonialSwiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 'auto',    // Adjust automatically based on card width
        spaceBetween: 30,
        loop: true,                // Loop seamlessly
        speed: 8000,               // Slower = smoother scrolling
        autoplay: {
            delay: 0,              // No delay between slides
            disableOnInteraction: false,
        },
        freeMode: true,            // Continuous smooth scrolling
        freeModeMomentum: false,   // Keeps constant speed
        loopedSlides: 10,          // Number of slides to loop (can be total slides or slightly more)
        breakpoints: {
            768: {
                slidesPerView: 'auto',
            },
            1200: {
                slidesPerView: 'auto',
            },
        },
    });

    var featureSwiper = new Swiper(".feature-swiper", {
        slidesPerView: 4,          // Show 4 cards at a time
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: { slidesPerView: 1 },   // Mobile
            640: { slidesPerView: 2 },   // Small tablets
            1024: { slidesPerView: 3 },  // Tablets / small desktops
            1200: { slidesPerView: 4 }   // Large screens
        }
    });


});


