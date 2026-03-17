// ===== Show/Hide Menu =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// ===== Remove Menu Mobile =====
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// ===== Change Background Header =====
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

// ===== Show Scroll Up =====
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 400) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

// ===== Scroll Sections Active Link =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// ===== Smooth Scroll =====
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== Animate on Scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate
const animatedElements = document.querySelectorAll('.services__card, .project__card, .about__feature');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Counter Animation for Stats =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stats__number');
            counters.forEach(counter => {
                const target = Number.parseInt(counter.textContent);
                animateCounter(counter, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===== Form Handling =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send this data to a server
        // using FormData and fetch API to POST to your backend endpoint
    });
}

// ===== Typing Effect for Home Title =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing effect on page load
window.addEventListener('load', () => {
    const homeTitle = document.querySelector('.home__title');
    if (homeTitle) {
        const originalText = homeTitle.textContent;
        setTimeout(() => {
            typeWriter(homeTitle, originalText, 50);
        }, 500);
    }
});

// ===== Lazy Loading Images (if you add real images later) =====
if ('IntersectionObserver' in globalThis) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ===== Add Active State to Current Page Section =====
document.addEventListener('DOMContentLoaded', () => {
    // Set first nav link as active on page load
    const firstNavLink = document.querySelector('.nav__link');
    if (firstNavLink) {
        firstNavLink.classList.add('active-link');
    }
});

// ===== Service Cards Hover Effect =====
const serviceCards = document.querySelectorAll('.services__card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderTop = '4px solid var(--primary-color)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderTop = 'none';
    });
});

// ===== Project Cards Click to View Details =====
const projectCards = document.querySelectorAll('.project__card');
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        const projectTitle = this.querySelector('.project__title').textContent;
        
        // You can implement a modal or redirect to project detail page
        console.log('Project clicked:', projectTitle);
    });
    
    // Add pointer cursor
    card.style.cursor = 'pointer';
});

// ===== Mobile Menu Swipe Gesture =====
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - close menu
        navMenu.classList.remove('show-menu');
    }
    if (touchEndX > touchStartX + swipeThreshold && touchStartX < 50) {
        // Swipe right from left edge - open menu
        navMenu.classList.add('show-menu');
    }
}

// ===== Dark Mode Toggle (Optional Feature) =====
// To enable dark mode, create a toggle button and add event listeners
// to switch between light and dark themes using CSS classes

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== Console Message =====
console.log('%c🏠 Golden Home Điện Biên', 'font-size: 20px; color: #d4af37; font-weight: bold;');
console.log('%cWebsite designed and developed with ❤️', 'font-size: 12px; color: #666;');
console.log('%cContact: info@goldenhomedb.vn', 'font-size: 12px; color: #666;');
