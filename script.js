function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.fade-in, .slide-up, .zoom-in');
    let windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        let positionFromTop = element.getBoundingClientRect().top;
        
        if (positionFromTop - windowHeight <= -100) {
            element.classList.add('visible');
        }
    });
});
