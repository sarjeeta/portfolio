       // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        });

        // CV Download function
        function downloadCV(type) {
            let filename;
            switch(type) {
                case 'sde':
                    filename = 'Sarjeeta_SDE_CV.pdf';
                    break;
                case 'data':
                    filename = 'Sarjeeta_DataAnalyst_CV.pdf';
                    break;
                case 'core':
                    filename = 'Sarjeeta_Mechanical_CV.pdf';
                    break;
            }
            alert(`Downloading ${filename}...`);
            // In a real implementation, you would trigger the actual download here
        }

        // Contact form submission
        function sendMessage(event) {
            event.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            event.target.reset();
        }

        // Initial animation trigger
        window.addEventListener('load', () => {
            document.querySelectorAll('.fade-in-up').forEach((el, index) => {
                setTimeout(() => {
                    if (el.getBoundingClientRect().top < window.innerHeight) {
                        el.classList.add('visible');
                    }
                }, index * 100);
            });
        });
   