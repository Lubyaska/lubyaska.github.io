// Smooth scrolling dan active nav link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');

    // Hamburger menu toggle (safe for null)
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            const isOpen = navMenu.style.display === 'flex';
            navMenu.style.display = isOpen ? 'none' : 'flex';
        });
    }

    // Highlight active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });

        // Sticky navbar after passing hero
        if (navbar && hero) {
            const threshold = hero.offsetHeight * 0.85; // stick only after 85% of hero
            if (window.scrollY > threshold) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }
    });

    // Smooth scroll on click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Close only on mobile; keep desktop nav visible
                if (navMenu && window.innerWidth <= 900) {
                    navMenu.style.display = 'none';
                }
            }
        });
    });

    // Ensure nav menu resets on resize (desktop)
    window.addEventListener('resize', () => {
        if (navMenu) {
            if (window.innerWidth > 900) {
                navMenu.style.display = 'flex';
            } else if (navMenu.style.display === '') {
                navMenu.style.display = 'none';
            }
        }
    });

    // Tab switching for experiences
    const expTabs = document.querySelectorAll('.exp-tab');
    const expContents = document.querySelectorAll('.exp-content');

    expTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            expTabs.forEach(t => t.classList.remove('active'));
            expContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[placeholder="Your Name"]').value;
            const email = this.querySelector('input[placeholder="Your Email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (name && email && subject && message) {
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
                
                // In production, you would send this data to a server
                console.log({
                    name,
                    email,
                    subject,
                    message
                });
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Scroll animations
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

    document.querySelectorAll('.passion-item, .timeline-item, .project-card, .skill-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Skill filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    const applyFilter = (filter) => {
        skillCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const shouldShow = filter === 'all' || category === filter;
            card.classList.toggle('hidden', !shouldShow);
            card.classList.toggle('visible', shouldShow);
        });
    };

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selected = btn.getAttribute('data-filter');
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilter(selected);
        });
    });

    applyFilter('all');

    // Skill bars animation
    const skillFills = document.querySelectorAll('.skill-fill');
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });

    skillFills.forEach(fill => {
        skillObserver.observe(fill);
    });

    // Parallax effect on hero
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollPosition = window.scrollY;
            hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
        }
    });

    // Add parallax to doodles
    window.addEventListener('scroll', function() {
        const doodles = document.querySelectorAll('.doodle');
        doodles.forEach((doodle, index) => {
            const speed = 0.5 + (index * 0.1);
            doodle.style.transform = `translateY(${window.scrollY * speed}px)`;
        });
    });

    // Certificate Modal
    const modal = document.getElementById('certificateModal');
    const modalImage = modal?.querySelector('.modal-image');
    const modalTitle = modal?.querySelector('.modal-title');
    const modalSubtitle = modal?.querySelector('.modal-subtitle');
    const modalClose = modal?.querySelector('.modal-close');
    const modalBackdrop = modal?.querySelector('.modal-backdrop');
    
    const achievementItems = document.querySelectorAll('.achievement-item');
    achievementItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const title = this.getAttribute('data-title');
            const subtitle = this.getAttribute('data-subtitle');
            
            if (modal && modalImage && modalTitle && modalSubtitle) {
                modalImage.src = imgSrc;
                modalTitle.textContent = title;
                modalSubtitle.textContent = subtitle;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }
    
    // Project gallery + auto-preview data
    const projectGrid = document.getElementById('projectGrid');
    const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
    const projectModal = document.getElementById('projectModal');
    const projectModalImage = projectModal?.querySelector('.modal-image');
    const projectModalTitle = projectModal?.querySelector('.project-modal-title');
    const projectModalSubtitle = projectModal?.querySelector('.project-modal-subtitle');
    const projectModalCategory = projectModal?.querySelector('.project-modal-category');
    const overviewText = projectModal?.querySelector('.overview-text');
    const detailText = projectModal?.querySelector('.detail-text');
    const techText = projectModal?.querySelector('.tech-text');
    const projectLink = projectModal?.querySelector('.project-link');
    const projectModalClose = projectModal?.querySelector('.modal-close');
    const projectModalBackdrop = projectModal?.querySelector('.modal-backdrop');
    const galleryPrev = projectModal?.querySelector('.gallery-prev');
    const galleryNext = projectModal?.querySelector('.gallery-next');
    const galleryDots = projectModal?.querySelector('.gallery-dots');

    const projectsData = [
        {
            title: 'AI-Powered Fall Detection System',
            category: 'Immersive Tech & AI',
            short: 'A real-time safety monitoring system using YOLOv8 to detect falls.',
            detail: 'An advanced computer vision system designed to enhance patient safety in medical environments. Built using Python, this system processes live video feeds to detect critical events in real-time.\n\nKey Capabilities:\n- Pose Estimation: Utilizes YOLOv8-pose to track key body points and determine if a person is standing, sitting, or falling.\n- Environment Awareness: Uses YOLOv8-seg to identify furniture (beds, chairs), distinguishing between a patient resting safely vs. collapsing on the floor.\n- Emergency Gesture: Engineered a specific algorithm to detect a "hand-waving" gesture, triggering a "Help Needed" alert even if the patient hasn\'t fallen.\n- System Integration: Features a Flask web dashboard for remote monitoring and Pygame for immediate audio alarms.',
            images: [
                'assets/projects/falldetection/1.jpeg',
                'assets/projects/falldetection/2.jpeg',
                'assets/projects/falldetection/3.png',
                'assets/projects/falldetection/4.png',
                'assets/projects/falldetection/5.png',
                'assets/projects/falldetection/6.png'
            ],
            link: 'https://github.com/SchwererPanzerSpahwagen/AI-Fall-Detection#',
            tech: 'Python - YOLOv8 pose/seg - Flask - Pygame'
        },
        {
            title: 'BeatWall: Interactive Rhythm Projection',
            category: 'Immersive Tech & AI',
            short: 'A social immersive installation turning a wall into a rhythm game.',
            detail: 'An interactive installation designed to gamify physical spaces. "BeatWall" transforms a static wall into a dynamic, touch-responsive rhythm game using projection mapping.\n\nRole: Conceptor & Visual Designer\nI was responsible for conceptualizing the gameplay mechanics and designing the entire visual aesthetic to ensure an immersive experience.\n\nThe Experience:\nA focused single-player experience where the user must physically tap visual nodes projected on the wall in sync with high-tempo music. Developed using Unity, this project blends physical exercise, rhythm gaming mechanics, and generative visual art.',
            images: [
                'assets/projects/beatwall/demo1.png',
                'assets/projects/beatwall/demo2.png',
                'assets/projects/beatwall/unity.png',
                'assets/projects/beatwall/unity1.png',
                'assets/projects/beatwall/unity2.png'
            ],
            link: '',
            tech: 'Unity - Projection mapping - Interaction design'
        },
        {
            title: 'Virtual Reality Escape Room',
            category: 'Immersive Tech & AI',
            short: 'A fully immersive VR puzzle experience.',
            detail: 'A Virtual Reality game that challenges players\' spatial reasoning and logic skills within a locked, mysterious dimension. Unlike traditional screen-based games, this project leverages VR presence to create genuine tension.\n\nTechnical Highlights:\n- Interaction Design: Developed using Unity 3D and VR SDKs, featuring realistic physics where players can grab, inspect, and throw objects.\n- Environmental Puzzles: Players must physically look under tables, open drawers, and align artifacts to unlock mechanisms.\n- Atmosphere: Focuses on immersive lighting and spatial audio to guide (or mislead) the player.',
            images: ['assets/projects/vrescaperoom.jpg'],
            link: 'https://tsania24.met.student.pens.ac.id/VR/indexg.html',
            tech: 'Unity 3D - VR SDK - Spatial audio'
        },
        {
            title: 'Solar System Mixed Reality',
            category: 'Immersive Tech & AI',
            short: 'An educational MR app bringing the solar system into your room.',
            detail: 'An educational Mixed Reality (MR) application designed to revolutionize how we learn astronomy. By overlaying high-fidelity holographic planets into the user\'s real-world environment, abstract concepts become tangible.\n\nFeatures:\n- Spatial Scaling: Users can resize the solar system to fit on a tabletop or expand it to fill the entire room.\n- Interactive Inspection: Intuitive hand gestures allow users to rotate planets, view cross-sections, and access data about orbital periods and composition.\n- Goal: To prove that immersive technology can increase information retention in STEM education.',
            images: ['assets/projects/MR.png'],
            link: '',
            tech: 'Mixed Reality - Gesture interaction'
        },
        {
            title: 'Melody Memory: Interactive Poster',
            category: 'Immersive Tech & AI',
            short: 'An interactive poster that transforms touch into audio.',
            detail: 'An experimental project exploring Tangible User Interfaces (TUI). This project bridges the gap between static graphic design and digital interactivity.\n\nHow it Works:\nA visually designed poster is embedded with capacitive touch sensors behind specific illustrations. When a user touches an instrument or character on the paper, the system triggers a corresponding digital sound loop or melody. This creates a multi-sensory experience that invites the audience to "play" the design.',
            images: ['assets/projects/melodymemory.jpeg'],
            link: '',
            tech: 'Tangible UI - Capacitive touch - Audio prototyping'
        },
        {
            title: 'REVILM: Movie Review App',
            category: 'Web & App Development',
            short: 'Cross-platform movie review app built with Flutter.',
            detail: 'A comprehensive mobile application for movie enthusiasts to discover, track, and review films. Designed and developed from scratch to ensure a seamless user experience.\n\nRole: UI/UX Designer & Front End Developer\n- Tech Stack: Built with Flutter (Dart) for cross-platform compatibility (iOS/Android).\n- UI/UX: Features a sleek "Dark Mode" aesthetic with micro-interactions, focus on readability, and smooth transitions between movie details and reviews.\n- Functionality: Includes user authentication, movie search (simulating API calls), and a rating system.',
            images: [
                'assets/projects/revilm/1.jpg',
                'assets/projects/revilm/2.jpg',
                'assets/projects/revilm/3.jpg',
                'assets/projects/revilm/4.jpg',
                'assets/projects/revilm/5.jpg',
                'assets/projects/revilm/6.jpg',
                'assets/projects/revilm/7.jpg',
                'assets/projects/revilm/8.jpg',
                'assets/projects/revilm/9.jpg',
                'assets/projects/revilm/10.jpg',
                'assets/projects/revilm/11.jpg'
            ],
            link: '',
            tech: 'Flutter - Dart - Mobile UI/UX'
        },
        {
            title: 'WEARDOSE: Alternative Fashion E-Commerce',
            category: 'Web & App Development',
            short: 'Custom-built e-commerce platform for an alternative fashion brand.',
            detail: 'A bespoke e-commerce website developed for "WEARDOSE," an alternative fashion brand. Unlike template-based stores, this project focuses on a unique, edgy visual identity that reflects the brand\'s rebellious character.\n\nHighlights:\n- Custom UI: Breaks away from standard grid layouts to offer a more editorial and visual shopping journey.\n- Responsive Design: Optimized for mobile and desktop, ensuring the visual impact remains consistent across devices.\n- Functionality: Features product categorization, detailed image zoom, and a seamless checkout flow simulation.',
            images: [
                'assets/projects/weardose/1.png',
                'assets/projects/weardose/2.png',
                'assets/projects/weardose/3.png',
                'assets/projects/weardose/4.png',
                'assets/projects/weardose/5.png',
                'assets/projects/weardose/6.png',
                'assets/projects/weardose/7.png',
                'assets/projects/weardose/8.png',
                'assets/projects/weardose/9.png'
            ],
            link: 'https://lubyaska.github.io/WEARDOSE/',
            tech: 'HTML - CSS - JavaScript'
        },
        {
            title: 'Interactive Blockchain Learning Hub',
            category: 'Web & App Development',
            short: 'Educational site demystifying blockchain via interactive modules.',
            detail: 'A dedicated web platform designed to demystify complex blockchain technologies for absolute beginners. The goal was to translate abstract cryptographic concepts into visual, understandable lessons.\n\nApproach:\n- Gamified Learning: Users progress through modules, unlocking new topics as they understand the basics.\n- Visual storytelling: Uses interactive diagrams and step-by-step animations to explain how blocks are hashed and chained, removing the intimidation of text-heavy technical documentation.\n- Tech: Built with semantic HTML, CSS3, and JavaScript.',
            images: [
                'assets/projects/blockchain/1.png',
                'assets/projects/blockchain/2.png',
                'assets/projects/blockchain/3.png',
                'assets/projects/blockchain/4.png',
                'assets/projects/blockchain/5.png',
                'assets/projects/blockchain/6.png',
                'assets/projects/blockchain/7.png'
            ],
            link: 'https://websiteblockchain.vercel.app/',
            tech: 'Semantic HTML - CSS3 - JavaScript'
        },
        {
            title: 'Mata Visual: Gamified Company Profile',
            category: 'Web & App Development',
            short: 'Company profile app integrating gamification and quizzes.',
            detail: 'A corporate mobile application for "Mata Visual" that rethinks the traditional company profile. Instead of a static PDF or brochure, this app engages potential clients through interactivity.\n\nInnovation:\n- Gamification: Developed using Smart Apps Creator (SAC), the app includes a quiz game that tests users on the company\'s services, increasing engagement time and brand recall.\n- Multimedia Integration: Seamlessly blends video portfolios, text, and interactive galleries into a single native-like application experience.',
            images: [
                'assets/projects/maviscomproapp/1.png',
                'assets/projects/maviscomproapp/2.png',
                'assets/projects/maviscomproapp/3.jpeg',
                'assets/projects/maviscomproapp/4.jpeg',
                'assets/projects/maviscomproapp/5.jpeg',
                'assets/projects/maviscomproapp/6.jpeg',
                'assets/projects/maviscomproapp/7.jpeg',
                'assets/projects/maviscomproapp/8.jpeg',
                'assets/projects/maviscomproapp/9.jpeg'
            ],
            link: '',
            tech: 'Smart Apps Creator - Mobile UX'
        },
        {
            title: 'Legacy Portfolio (Early Works)',
            category: 'Web & App Development',
            short: 'My foundational HTML/CSS portfolio (Vocational School era).',
            detail: 'The very first portfolio website I developed during my vocational school years. While simple by modern standards, this project represents the foundation of my coding journey.\n\nContext:\nIt demonstrates a raw understanding of the core pillars of the web: Semantic HTML structure and the CSS Box Model, built entirely without frameworks or libraries. It stands as a testament to my long-term commitment to learning web technologies.',
            images: [
                'assets/projects/websmk/1.png',
                'assets/projects/websmk/2.png',
                'assets/projects/websmk/3.png'
            ],
            link: 'https://lubyaska.github.io/lubyaskawebsitesmk/',
            tech: 'HTML - CSS - Early UX exploration'
        },
        {
            title: 'Modern Portfolio UI/UX Design',
            category: 'Web & App Development',
            short: 'High-fidelity interface design crafted in Figma.',
            detail: 'The comprehensive design blueprint for my current professional website. This project showcases my UI/UX workflow before a single line of code was written.\n\nKey Aspects:\n- User Journey Mapping: Planned how recruiters and clients would navigate the diverse project categories (Tech vs. Art).\n- Visual System: Established a strict grid system, a dark-mode color palette for an immersive feel, and a typography hierarchy that balances readability with aesthetic appeal.\n- Tools: Crafted entirely in Figma.',
            images: ['assets/projects/uiuxporto.png'],
            link: 'https://www.figma.com/proto/yJzMkYFp9i0ThLPBhLOXw8/Portofolio-Website?node-id=67-42&starting-point-node-id=67%3A42&hide-ui=1&t=4X4hVJ7E16ws1Ppx-8',
            tech: 'Figma - UI systems - Prototyping'
        },
        {
            title: 'Immersive Fiesta: Event Visual Identity',
            category: 'Visual Art, Branding & Assets',
            short: 'Unified visual system: ID Cards, Motion Graphics, and Social Media.',
            detail: 'A massive, unified design ecosystem created for the "Immersive Fiesta" event. As the lead visual designer, I ensured every touchpoint communicated the event\'s futuristic and immersive theme.\n\nScope of Work:\n- Identity Cards: Designed functional yet collectible ID cards for staff and participants, utilizing data-driven layouts.\n- Awarding Visuals: Created high-impact presentation slides and motion graphics for the main stage LED screens during the climax of the event.\n- Social Media: Developed a cohesive Instagram content strategy, ensuring a consistent visual narrative from the teaser phase to the post-event recap.',
            images: [
                'assets/projects/if/awardingslides.png',
                'assets/projects/if/idcard.png',
                'assets/projects/if/konten1.png',
                'assets/projects/if/konten2.png',
                'assets/projects/if/9.%20Alur%20Kompetisi%201.png',
                'assets/projects/if/9.%20Alur%20Kompetisi%202.png',
                'assets/projects/if/10.%20TRM%201.png',
                'assets/projects/if/10.%20TRM%202.png',
                'assets/projects/if/10.%20TRM%203.png',
                'assets/projects/if/10.%20TRM%204.png',
                'assets/projects/if/10.%20TRM%205.png'
            ],
            link: '',
            tech: 'Event branding - Motion graphics - Social content'
        },
        {
            title: 'Typopersona Design',
            category: 'Visual Art, Branding & Assets',
            short: 'Experimental typography project exploring personality through type.',
            detail: 'An experimental graphic design project that explores the relationship between typography and human psychology. "Typopersona" investigates how font weight, serif details, and kerning can evoke specific personality traits.\n\nDesign Process:\nThe project involved extensive sketching and digital manipulation to create custom lettering that visualizes abstract concepts like "Boldness," "Anxiety," or "Elegance" purely through the manipulation of letterforms and negative space.',
            images: [
                'assets/projects/typopersona/typopersona.png',
                'assets/projects/typopersona/typopersona1.png',
                'assets/projects/typopersona/typopersona2.png'
            ],
            link: '',
            tech: 'Typography - Visual research'
        },
        {
            title: 'Modern Portfolio UI/UX Design',
            category: 'Visual Art, Branding & Assets',
            short: 'High-fidelity interface design crafted in Figma.',
            detail: 'The comprehensive design blueprint for my current professional website. This project showcases my UI/UX workflow before a single line of code was written.\n\nKey Aspects:\n- User Journey Mapping: Planned how recruiters and clients would navigate the diverse project categories (Tech vs. Art).\n- Visual System: Established a strict grid system, a dark-mode color palette for an immersive feel, and a typography hierarchy that balances readability with aesthetic appeal.\n- Tools: Crafted entirely in Figma.',
            images: ['assets/projects/uiuxporto.png'],
            link: 'https://www.figma.com/proto/yJzMkYFp9i0ThLPBhLOXw8/Portofolio-Website?node-id=67-42&starting-point-node-id=67%3A42&hide-ui=1&t=4X4hVJ7E16ws1Ppx-8',
            tech: 'Figma - UI systems - Prototyping'
        },
        {
            title: 'Oishii Sushi Brand Identity',
            category: 'Visual Art, Branding & Assets',
            short: 'Branding for a culinary product, including Logo and GSM.',
            detail: 'A comprehensive branding package for "Oishii Sushi," designed to stand out in the competitive culinary market.\n\nDeliverables:\n- Logo Design: Created a memorable logomark that combines traditional Japanese aesthetics with modern simplicity.\n- Graphic Standard Manual (GSM): Produced a full guideline book defining logo usage, color palettes (appetizing psychology), and typography to ensure brand consistency.\n- Packaging: Designed mockup applications for sushi boxes and chopsticks to visualize the brand in the real world.',
            images: [
                'assets/projects/logogsm/gsmsushi.png',
                'assets/projects/logogsm/gsmsushi1.png',
                'assets/projects/logogsm/gsmsushi2.png',
                'assets/projects/logogsm/gsmsushi3.png'
            ],
            link: '',
            tech: 'Brand identity - GSM - Packaging mockups'
        },
        {
            title: 'Personal Monogram Identity',
            category: 'Visual Art, Branding & Assets',
            short: 'Personal branding project establishing a versatile logo system.',
            detail: 'The development of my own professional visual identity. The challenge was to create a symbol that represents both the "Structured/Logical" nature of Engineering and the "Fluid/Expressive" nature of Art.\n\nOutcome:\nA geometric monogram logo that is versatile enough to work on a website header, a business card, or as a watermark on creative assets, accompanied by a strict visual guideline.',
            images: ['assets/projects/logogsm/Logogsmlulie.png'],
            link: '',
            tech: 'Logo design - Personal branding'
        },
        {
            title: 'Publication & Apparel',
            category: 'Visual Art, Branding & Assets',
            short: 'Layout design for history book and merchandise.',
            detail: 'A multi-disciplinary graphic design project centered around the historical figure R.H.S Wongsodinomo.\n\nScope:\n- Editorial Design: Handled the layouting for a biography book, managing typography, margins, and photo restoration to ensure a comfortable reading experience.\n- Merchandise: Designed commercial apparel (t-shirts) and promotional banners (MMT) to support the publication launch, translating historical elements into modern wearable fashion.',
            images: [
                'assets/projects/printing/Billboard.png',
                'assets/projects/printing/Book.png',
                'assets/projects/printing/shirt.png',
                'assets/projects/printing/shirt1.png'
            ],
            link: '',
            tech: 'Editorial design - Merchandise graphics'
        },
        {
            title: 'Social Media Content Strategy',
            category: 'Visual Art, Branding & Assets',
            short: 'Curated Instagram visuals demonstrating adaptability across themes.',
            detail: 'A showcase of visual versatility. This gallery features a collection of social media designs across four distinct aesthetic themes.\n\nThe Goal:\nTo demonstrate the ability to adapt design styles to different brand voices—from corporate and professional to playful and artistic. It involves strategic use of typography and layout to maximize engagement and "stop the scroll."',
            images: [
                'assets/projects/lkmm/1.heic',
                'assets/projects/lkmm/2.heic',
                'assets/projects/lkmm/3.heic',
                'assets/projects/lkmm/4.heic',
                'assets/projects/lkmm/5.heic',
                'assets/projects/lkmm/6.heic'
            ],
            link: '',
            tech: 'Content strategy - Social design'
        },
        {
            title: 'Visual Novel Character Assets',
            category: 'Visual Art, Branding & Assets',
            short: 'Character assets for "Ande Ande Lumut" using AI & CorelDraw.',
            detail: 'Character design for a digital retelling of the folklore "Ande Ande Lumut." This project utilized a hybrid, modern workflow.\n\nWorkflow:\n- Generative AI: Used AI tools to explore rapid iteration of costume designs and facial expressions.\n- Vector Refinement: Imported concepts into CorelDraw for manual tracing, color correction, and vectorization to ensure high-resolution, scalable assets suitable for game engines.',
            images: [
                'assets/projects/karaktervinov.png',
                'assets/projects/karaktervinov1.jpeg'
            ],
            link: '',
            tech: 'Character design - AI ideation - CorelDraw'
        },
        {
            title: 'Animation & 3D Assets',
            category: 'Visual Art, Branding & Assets',
            short: '2D sprites and 3D character models for animation projects.',
            detail: 'A technical showcase of asset creation for animation pipelines.\n\n3D Modeling: Modeled the protagonist for the animation "Friendship." Focus was placed on clean topology (edge loops) to ensure proper deformation during rigging and animation.\n2D Assets: Created sprite sheets and layered backgrounds for "Aku Hanyalah Seorang Animasi," organizing files efficiently for compositing.',
            images: [
                'assets/projects/animasi2d.png',
                'assets/projects/3d/1.png',
                'assets/projects/3d/2.png',
                'assets/projects/3d/3.png'
            ],
            link: '',
            tech: '3D modeling - 2D sprite design'
        },
        {
            title: 'Seamless Pattern Design',
            category: 'Visual Art, Branding & Assets',
            short: 'Custom seamless repeat patterns for textile and apparel.',
            detail: 'Designing scalable, repeat patterns intended for the textile industry.\n\nTechnique:\nFocuses on creating "Seamless Tiles"—motifs that loop perfectly on all sides without visible breaks. These patterns were designed for sublimation and screen printing on commercial apparel products (shirts, jackets), requiring precise attention to color separation and vector scalability.',
            images: [
                'assets/projects/seamlessdesign/seamless.png',
                'assets/projects/seamlessdesign/seamless1.png',
                'assets/projects/seamlessdesign/seamless2.png',
                'assets/projects/seamlessdesign/seamless3.png',
                'assets/projects/seamlessdesign/seamless4.png'
            ],
            link: '',
            tech: 'Pattern design - Textile ready artwork'
        }
    ];

    let activeGallery = [];
    let activeGalleryIndex = 0;

    const setActiveFilter = (category) => {
        projectFilterBtns.forEach(btn => {
            const isMatch = btn.getAttribute('data-category') === category;
            btn.classList.toggle('active', isMatch);
        });
    };

    const openProjectModal = (project) => {
        if (!projectModal || !projectModalImage) return;
        activeGallery = project.images;
        activeGalleryIndex = 0;
        projectModalImage.src = activeGallery[0];
        projectModalTitle.textContent = project.title;
        projectModalSubtitle.textContent = project.short;
        projectModalCategory.textContent = project.category;
        detailText.textContent = project.detail;
        techText.textContent = project.tech || '';

        if (project.link) {
            projectLink?.classList.remove('disabled');
            projectLink.textContent = 'Visit project';
            projectLink.setAttribute('href', project.link);
        } else {
            projectLink?.classList.add('disabled');
            projectLink.textContent = 'No live link';
            projectLink.setAttribute('href', '#');
        }

        if (galleryDots) {
            galleryDots.innerHTML = '';
            activeGallery.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => updateGallery(index));
                galleryDots.appendChild(dot);
            });
        }

        if (galleryPrev && galleryNext) {
            const shouldShowNav = activeGallery.length > 1;
            galleryPrev.style.display = shouldShowNav ? 'inline-flex' : 'none';
            galleryNext.style.display = shouldShowNav ? 'inline-flex' : 'none';
        }

        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeProjectModal = () => {
        if (projectModal) {
            projectModal.classList.remove('active');
            projectModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }
    };

    const updateGalleryDots = () => {
        if (!galleryDots) return;
        const dots = galleryDots.querySelectorAll('.gallery-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeGalleryIndex);
        });
    };

    const updateGallery = (nextIndex) => {
        if (!projectModalImage || !activeGallery.length) return;
        activeGalleryIndex = (nextIndex + activeGallery.length) % activeGallery.length;
        projectModalImage.style.opacity = '0';
        setTimeout(() => {
            projectModalImage.src = activeGallery[activeGalleryIndex];
            projectModalImage.style.opacity = '1';
            updateGalleryDots();
        }, 120);
    };

    if (galleryPrev) {
        galleryPrev.addEventListener('click', () => updateGallery(activeGalleryIndex - 1));
    }

    if (galleryNext) {
        galleryNext.addEventListener('click', () => updateGallery(activeGalleryIndex + 1));
    }

    const renderProjects = (filterCategory = 'all') => {
        if (!projectGrid) return;
        projectGrid.innerHTML = '';
        const filtered = projectsData.filter(project => filterCategory === 'all' || project.category === filterCategory);

        filtered.forEach(project => {
            const card = document.createElement('article');
            card.className = 'project-card';
            card.setAttribute('data-category', project.category);
            card.setAttribute('tabindex', '0');

            const thumb = document.createElement('div');
            thumb.className = 'project-thumb';
            const img = document.createElement('img');
            img.src = project.images[0];
            img.alt = `${project.title} preview`;
            thumb.appendChild(img);

            const content = document.createElement('div');
            content.className = 'project-content';
            content.innerHTML = `
                <div class="project-meta">
                    <span class="project-category-tag">${project.category}</span>
                </div>
                <h4 class="project-title">${project.title}</h4>
                <p class="project-subtitle">${project.short}</p>
                <span class="project-link-chip">Preview <i class="fas fa-play"></i></span>
            `;

            card.appendChild(thumb);
            card.appendChild(content);

            let hoverInterval = null;
            let hoverIndex = 0;

            card.addEventListener('mouseenter', () => {
                if (project.images.length <= 1) return;
                hoverInterval = setInterval(() => {
                    hoverIndex = (hoverIndex + 1) % project.images.length;
                    img.src = project.images[hoverIndex];
                }, 900);
            });

            card.addEventListener('mouseleave', () => {
                if (hoverInterval) {
                    clearInterval(hoverInterval);
                    hoverInterval = null;
                }
                hoverIndex = 0;
                img.src = project.images[0];
            });

            card.addEventListener('click', () => {
                if (hoverInterval) {
                    clearInterval(hoverInterval);
                    hoverInterval = null;
                    hoverIndex = 0;
                    img.src = project.images[0];
                }
                openProjectModal(project);
            });
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProjectModal(project);
                }
            });

            // Animate on scroll
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(card);

            projectGrid.appendChild(card);
        });
    };

    projectFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category') || 'all';
            setActiveFilter(category);
            renderProjects(category);
        });
    });

    renderProjects('all');
    setActiveFilter('all');

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modal?.classList.contains('active')) {
                closeModal();
            }
            if (projectModal?.classList.contains('active')) {
                closeProjectModal();
            }
        }
        if (projectModal?.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                updateGallery(activeGalleryIndex - 1);
            } else if (e.key === 'ArrowRight') {
                updateGallery(activeGalleryIndex + 1);
            }
        }
    });

    if (projectModalClose) {
        projectModalClose.addEventListener('click', closeProjectModal);
    }

    if (projectModalBackdrop) {
        projectModalBackdrop.addEventListener('click', closeProjectModal);
    }
});

// Fade in on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Prevent flash of unstyled content
document.body.style.opacity = '0';
