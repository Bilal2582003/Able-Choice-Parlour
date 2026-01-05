   
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        const navbar = document.querySelector('.navbar');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Testimonial Slider
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const prevBtn = document.getElementById('prevTestimonial');
        const nextBtn = document.getElementById('nextTestimonial');
        let currentSlide = 0;
        
        function showSlide(n) {
            // Hide all slides
            testimonialSlides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Calculate new slide index
            currentSlide = (n + testimonialSlides.length) % testimonialSlides.length;
            
            // Show current slide
            testimonialSlides[currentSlide].classList.add('active');
        }
        
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
        
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
        
        // Form submission
        const appointmentForm = document.getElementById('appointmentForm');
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show success message
            const submitBtn = appointmentForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Appointment Requested!';
            submitBtn.style.background = 'linear-gradient(to right, #4CAF50, #45a049)';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = 'linear-gradient(to right, var(--primary), var(--accent))';
                alert('Thank you for your appointment request! We will contact you within 24 hours to confirm your booking.');
                appointmentForm.reset();
            }, 2000);
        });
        
        // Newsletter form submission
        const newsletterForm = document.querySelector('.newsletter-form');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input[type="email"]');
            const button = newsletterForm.querySelector('button');
            
            if (input.value) {
                const originalText = button.textContent;
                button.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
                button.style.background = 'linear-gradient(to right, #4CAF50, #45a049)';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = 'linear-gradient(to right, var(--primary), var(--accent))';
                    input.value = '';
                    alert('Thank you for subscribing to our newsletter!');
                }, 2000);
            }
        });
        
        // Gallery item click effect
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const title = item.querySelector('h4').textContent;
                alert(`Viewing our ${title} gallery. In a complete implementation, this would open a lightbox with more images.`);
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    window.scrollTo({
                        top: targetElement.offsetTop - navbarHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Initialize navbar state on load
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        }
    