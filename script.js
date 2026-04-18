document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Navbar padding effect on scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "15px 40px";
            navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        } else {
            navbar.style.padding = "20px 40px";
            navbar.style.boxShadow = "none";
        }
    });

    // 2. Intersection Observer for Scroll Animations
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.2)) {
                displayScrollElement(el);
            }
        })
    }

    // Trigger animations on initial load
    handleScrollAnimation();

    // Trigger animations on scroll
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
});
