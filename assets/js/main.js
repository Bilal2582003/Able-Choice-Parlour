   
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

        // Gallery data - more pictures for each category
        const galleryData = {
            hair: {
                title: "Hair Styling Gallery",
                description: "Discover our premium hair styling services including cutting, coloring, extensions, and special occasion styling. Our expert stylists create personalized looks that enhance your natural beauty.",
                images: [
                    "https://i.pinimg.com/736x/f3/90/37/f3903796869347e7f8e7a55f765584d4.jpg",
                    "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzI2mIOblHpcRSonCctWvUzaWrxCLdgAVkkg&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNqhnluymo0Q2CByG8Io8akKG2XHjucai-5CoYrxrEg&s",
                    "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                ]
            },
            makeup: {
                title: "Makeup Artistry Gallery",
                description: "Professional makeup services for weddings, special events, photoshoots, and everyday glamour. Our makeup artists use premium products to create flawless, long-lasting looks.",
                images: [
                    "https://t4.ftcdn.net/jpg/03/22/80/69/240_F_322806998_Vb1isNrcMqbegaok0AY41VEgGEpCr5AC.jpg",
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_TJIWe-lzlefo3sFlaxcQFYwnho99Jff4Q&s",
                    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1487&q=80",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJypaM6VNSaGYUeUZU0t0nbHSCOPKwcLwcw&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmb1L1Cbj8kicecA7Hefd8N0bxVUc5_tcxg&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItTVwmgedPUrQ0FdPjNI6tNBpCDvGPYvYkg&s"
                ]
            },
            nails: {
                title: "Nail Art Design Gallery",
                description: "Creative nail art designs, gel manicures, acrylic extensions, and spa pedicures. We offer the latest trends in nail care with attention to detail and hygiene.",
                images: [
                    "https://t3.ftcdn.net/jpg/01/84/71/06/240_F_184710668_mAiofSt4PkqOFXXvKpT6mBR40yiecjfF.jpg",
                    "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjRyL8ekt0v79atlF76Bsdp3dMEDHbbA8Vfw&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqmqwhAeFlZGmssjZ1bA3Oi4AI8dhcZD1FA&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOSnJZ7Vr3t3feRexqs2lVG0f6pIVddrP2w&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaukdtVth_EwJuyTArYAKyHVX0qShcB05wjQ&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqx-bGlP6S6heyjanXvEN_x2SbahABWDSMw&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Ju7Ig1FgvnhIkZxpXcJ4JUdTsiFezUlD7Q&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPS0oRva28D1H-uHugAXz1eoBM4mJqMX9Pw&s"
                ]
            },
            facial: {
                title: "Facial Treatment Gallery",
                description: "Luxury facial treatments including deep cleansing, anti-aging, hydrating, and acne control facials. Our skincare experts use organic products for radiant results.",
                images: [
                    "https://as1.ftcdn.net/v2/jpg/02/56/10/28/1000_F_256102884_DpVm0pzGi0NI9NZTrfM9mY7zCTJGA0rE.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWWOZLN8YE_QWrswgyj2O-CN2uDbzEFQIwg&s",
                    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPGuyEKD9H6VMKmbkEyrY1DUCifObYVGcnw&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93tgwj2R2cd2ftpSd3b6qiG9jil4jqJQWEw&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqZNkgz-KVyB-f5s7RrRA3mA72niKW79eeA&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7dKAFFIWQuNxqguLlYlAp6X1WvCBPaihzg&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOYHABK0lnF50pDHdw5_b8swifDbMWoaoIw&s",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80"
                ]
            }
        };

        // DOM Elements
        const galleryItems = document.querySelectorAll('.gallery-item');
        const modal = document.getElementById('galleryModal');
        const imageModal = document.getElementById('imageModal');
        const closeModal = document.getElementById('closeModal');
        const closeImageModal = document.getElementById('closeImageModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalGallery = document.getElementById('modalGallery');
        const modalDescription = document.getElementById('modalDescription');
        const zoomedImage = document.getElementById('zoomedImage');
        const prevImageBtn = document.getElementById('prevImage');
        const nextImageBtn = document.getElementById('nextImage');
        const imageCounter = document.getElementById('imageCounter');

        // Variables for image modal
        let currentImages = [];
        let currentImageIndex = 0;

        // Open gallery modal when gallery item is clicked
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const category = item.getAttribute('data-category');
                const data = galleryData[category];
                
                if (data) {
                    // Set modal title and description
                    modalTitle.textContent = data.title;
                    modalDescription.innerHTML = `<p>${data.description}</p>`;
                    
                    // Clear previous images
                    modalGallery.innerHTML = '';
                    
                    // Add images to modal gallery
                    data.images.forEach((imgSrc, index) => {
                        const img = document.createElement('img');
                        img.src = imgSrc;
                        img.alt = `${data.title} - Image ${index + 1}`;
                        img.dataset.index = index;
                        img.addEventListener('click', () => openImageModal(data.images, index));
                        modalGallery.appendChild(img);
                    });
                    
                    // Store current images for image modal
                    currentImages = data.images;
                    
                    // Show modal
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        });
         function openImageModal(images, index) {
            currentImages = images;
            currentImageIndex = index;
            zoomedImage.src = images[index];
            imageCounter.textContent = `${index + 1} / ${images.length}`;
            imageModal.style.display = 'block';
        }

        // Close gallery modal
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        // Close image modal
        closeImageModal.addEventListener('click', () => {
            imageModal.style.display = 'none';
        });

        // Navigate through images in image modal
        prevImageBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
            zoomedImage.src = currentImages[currentImageIndex];
            imageCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
        });

          nextImageBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % currentImages.length;
            zoomedImage.src = currentImages[currentImageIndex];
            imageCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
        });

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            if (e.target === imageModal) {
                imageModal.style.display = 'none';
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Close modals with ESC key
            if (e.key === 'Escape') {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                if (imageModal.style.display === 'block') {
                    imageModal.style.display = 'none';
                }
            }
            
            // Navigate images with arrow keys
            if (imageModal.style.display === 'block') {
                if (e.key === 'ArrowLeft') {
                    prevImageBtn.click();
                }
                if (e.key === 'ArrowRight') {
                    nextImageBtn.click();
                }
            }
        });

        // document.querySelectorAll('.gallery-item').forEach(item => {
        //     item.addEventListener('click', () => {
        //         const title = item.querySelector('h4').textContent;
        //         alert(`Viewing our ${title} gallery. In a complete implementation, this would open a lightbox with more images.`);
        //     });
        // });
        
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
    