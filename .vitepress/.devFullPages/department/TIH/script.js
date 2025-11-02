document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const scrollButton = document.querySelector('.scroll-button');
    const mainContent = document.querySelector('main');

    scrollButton.addEventListener('click', function() {
        mainContent.scrollIntoView({ behavior: 'smooth' });
    });

    function updateHeader() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition > windowHeight * 0.8) {
            header.classList.remove('hidden', 'transparent');
            header.classList.add('scrolled');
        } else if (scrollPosition > 100) {
            header.classList.remove('hidden', 'scrolled');
            header.classList.add('transparent');
        } else {
            header.classList.add('hidden');
            header.classList.remove('transparent', 'scrolled');
        }
    }

    window.addEventListener('scroll', updateHeader);
    updateHeader(); 

    const sections = document.querySelectorAll('section');
    const fadeInSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(fadeInSection, {
        root: null,
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add('fade-out');
        sectionObserver.observe(section);
    });
});