document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (window.innerWidth <= 600) {
        nav.style.display = 'none';
        
        menuButton.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
        });
    }
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active-section'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active-section');
            
            // Close mobile menu if open
            if (window.innerWidth <= 600) {
                nav.style.display = 'none';
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
    
    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        const content = item.nextElementSibling;
        content.style.display = 'none';
        
        item.addEventListener('click', function() {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            this.parentElement.classList.toggle('active');
        });
    });
    
    // Product filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // In a real implementation, you would filter products here
            // For now, we'll just log the category
            const category = this.getAttribute('data-category');
            console.log(`Filtering by: ${category}`);
        });
    });
    
    // Sample product data (in a real app, this would come from an API)
    const products = [
        {
            id: 1,
            name: 'Bamboo Toothbrush',
            price: 4.99,
            category: 'personal-care',
            image: 'assets/images/bamboo-toothbrush.jpg'
        },
        {
            id: 2,
            name: 'Reusable Grocery Bags',
            price: 12.99,
            category: 'home',
            image: 'assets/images/reusable-bags.jpg'
        },
        {
            id: 3,
            name: 'Organic Cotton Tote',
            price: 9.99,
            category: 'fashion',
            image: 'assets/images/cotton-tote.jpg'
        },
        {
            id: 4,
            name: 'Stainless Steel Straws',
            price: 7.99,
            category: 'kitchen',
            image: 'assets/images/steel-straws.jpg'
        },
        {
            id: 5,
            name: 'Beeswax Wraps',
            price: 14.99,
            category: 'kitchen',
            image: 'assets/images/beeswax-wraps.jpg'
        },
        {
            id: 6,
            name: 'Natural Deodorant',
            price: 8.99,
            category: 'personal-care',
            image: 'assets/images/natural-deodorant.jpg'
        }
    ];
    
    // Render products
    const productsGrid = document.querySelector('.products-grid');
    
    function renderProducts(category = 'all') {
        productsGrid.innerHTML = '';
        
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image" style="background-image: url('${product.image}')"></div>
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <div class="product-price">kshskshs{product.price.toFixed(2)}</div>
                    <button class="add-to-cart" data-id="kshs{product.id}">Add to Cart</button>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
        
        // Add event listeners to "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                alert(`Added ${product.name} to your cart!`);
                // In a real implementation, you would add to a cart system
            });
        });
    }
    
    // Initial render
    if (productsGrid) {
        renderProducts();
    }
    
    // Sample events data
    const events = [
        {
            title: 'Community Cleanup Day',
            date: 'June 15, 2025',
            location: 'Local Park',
            image: 'assets/images/cleanup-event.jpg'
        },
        {
            title: 'Sustainable Gardening Workshop',
            date: 'June 22, 2025',
            location: 'Community Center',
            image: 'assets/images/gardening-workshop.jpg'
        },
        {
            title: 'Zero Waste Cooking Class',
            date: 'July 5, 2025',
            location: 'Green Kitchen',
            image: 'assets/images/cooking-class.jpg'
        }
    ];
    
    // Render events
    const eventsList = document.querySelector('.events-list');
    
    if (eventsList) {
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.innerHTML = `
                <div class="event-image" style="background-image: url('${event.image}')"></div>
                <div class="event-details">
                    <h4>${event.title}</h4>
                    <div class="event-date">${event.date}</div>
                    <p>Location: ${event.location}</p>
                    <button class="register-btn">Register</button>
                </div>
            `;
            eventsList.appendChild(eventCard);
        });
        
        // Add event listeners to register buttons
        document.querySelectorAll('.register-btn').forEach(button => {
            button.addEventListener('click', function() {
                const eventTitle = this.parentElement.querySelector('h4').textContent;
                alert(`You've registered for ${eventTitle}!`);
            });
        });
    }
    
    // Sample testimonials
    const testimonials = [
        {
            text: "Green Harmony has completely transformed my approach to sustainable living. Their resources and community support are invaluable!",
            author: "Joy K.",
            role: "Eco-Enthusiast"
        },
        {
            text: "I've reduced my household waste by 80% thanks to the tips and products I found here. Highly recommend!",
            author: "Love T.",
            role: "Happy Customer"
        },
        {
            text: "The workshops are fantastic - so much practical information presented in an engaging way. I've learned so much!",
            author: "Grace B.",
            role: "Community Member"
        }
    ];
    
    // Render testimonials
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    if (testimonialSlider) {
        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card';
            testimonialCard.innerHTML = `
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-author">- ${testimonial.author}, ${testimonial.role}</div>
            `;
            testimonialSlider.appendChild(testimonialCard);
        });
        
        // Simple slider functionality
        let currentTestimonial = 0;
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        
        function showTestimonial(index) {
            testimonialCards.forEach(card => card.style.display = 'none');
            testimonialCards[index].style.display = 'block';
        }
        
        // Initial display
        showTestimonial(currentTestimonial);
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    const newsletterForms = document.querySelectorAll('.newsletter-form, .footer-newsletter');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! You'll receive our next newsletter soon.`);
            this.reset();
        });
    });
    
    // Responsive adjustments
    window.addEventListener('resize', function() {
        if (window.innerWidth > 600) {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    });
});