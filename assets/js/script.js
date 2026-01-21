// assets/js/script.js

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the selected page
    document.getElementById(pageId).classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Close mobile menu if open
    document.getElementById('navMenu').classList.remove('show');
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Form Submissions
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your volunteer application! We will contact you soon.');
            this.reset();
        });
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will respond as soon as possible.');
            this.reset();
        });
    }
    
    // Animation for elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all cards and sections
    document.querySelectorAll('.card, .program-card, .testimonial-card, .value-card, .help-card').forEach(item => {
        item.style.opacity = '0';
        observer.observe(item);
    });
});

// Scroll to form
function scrollToForm() {
    showPage('get-involved');
    setTimeout(() => {
        document.getElementById('volunteer-form').scrollIntoView({ behavior: 'smooth' });
    }, 500);
}

// Make functions globally available
window.showPage = showPage;
window.scrollToForm = scrollToForm;
