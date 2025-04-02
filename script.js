// Particles.js Configuration
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00e6a8"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00e6a8",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Animation
const scrollElements = document.querySelectorAll('.fade-up, .fade-in');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            el.style.animationPlayState = 'running';
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Run once on load
handleScrollAnimation();

// Form Input Animation
const formControls = document.querySelectorAll('.form-control');

formControls.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focus');
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.classList.remove('focus');
    });
});

// Form Submission
// Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simulate form submission
        const submitButton = this.querySelector('.form-submit');
        submitButton.innerHTML = 'Sending...';
        
        // Here you would typically send the data to a server
        // For demonstration, we're just logging it
        console.log(`Sending to: kanagesh2504@gmail.com`);
        console.log(`From: ${name} (${email})`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);
        
        // In a real implementation, you would use a server-side script or email service
        // This is where you'd make an AJAX request to your backend
        
        setTimeout(() => {
            submitButton.innerHTML = 'Message Sent!';
            this.reset();
            
            // Reset button text after 3 seconds
            setTimeout(() => {
                submitButton.innerHTML = 'Send Message';
            }, 3000);
        }, 1500);
    });
}

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('.newsletter-input');
        const submitBtn = this.querySelector('.newsletter-btn');
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i>';
            emailInput.value = '';
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
            }, 3000);
        }, 1500);
    });
}

// 3D Tilt Effect for Cards
const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach(card => {
    const inner = card.querySelector('.tilt-card-inner');
    
    card.addEventListener('mousemove', (e) => {
        if (!inner) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        inner.style.transform = `translateZ(20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        if (inner) {
            inner.style.transform = 'translateZ(20px) rotateX(0deg) rotateY(0deg)';
        }
    });
});

// Animated Counter
function animateCounter(id, start, end, duration) {
    const element = document.getElementById(id);
    if (!element) return;
    
    let startTime = null;
    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.innerHTML = value + (id === 'counter-years' ? '+' : '+');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize counter animations when section is in view
const aboutSection = document.querySelector('.about');
let countersAnimated = false;

window.addEventListener('scroll', () => {
    if (!countersAnimated && aboutSection && elementInView(aboutSection)) {
        animateCounter('counter-clients', 0, 5, 2000);
        animateCounter('counter-projects', 0, 15, 2000);
        animateCounter('counter-years', 0, 1, 2000);
        animateCounter('counter-team', 0, 20, 2000);
        countersAnimated = true;
    }
});

// Tech Stack Slider Animation
const techSlider = document.querySelector('.tech-slider');
let isDown = false;
let startX;
let scrollLeft;

if (techSlider) {
    techSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        techSlider.classList.add('active');
        startX = e.pageX - techSlider.offsetLeft;
        scrollLeft = techSlider.scrollLeft;
    });
    
    techSlider.addEventListener('mouseleave', () => {
        isDown = false;
        techSlider.classList.remove('active');
    });
    
    techSlider.addEventListener('mouseup', () => {
        isDown = false;
        techSlider.classList.remove('active');
    });
    
    techSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - techSlider.offsetLeft;
        const walk = (x - startX) * 2;
        techSlider.scrollLeft = scrollLeft - walk;
    });
}

// Active Navigation Links
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.querySelector('a').getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});