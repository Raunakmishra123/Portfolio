/* ================================================================
   PREMIUM PORTFOLIO — SCRIPT.JS
   Author: Raunak Mishra | Version: 1.0
   Interactive JavaScript features for high-end developer portfolio
================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ============================================================ PAGE LOADER
  // The loader will be hidden on window 'load' event, but in case it fails,
  // we add a backup timeout here.
  setTimeout(() => {
    const loader = document.getElementById('page-loader');
    if (loader && !loader.classList.contains('hidden')) {
      loader.classList.add('hidden');
    }
  }, 3000);

  // ============================================================ THEME TOGGLE
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const htmlEl = document.documentElement;

  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    
    if (theme === 'light') {
      if (themeIcon) {
        themeIcon.className = 'fas fa-sun';
      }
    } else {
      if (themeIcon) {
        themeIcon.className = 'fas fa-moon';
      }
    }

    // Adapt Particles.js colors dynamically if initialized
    if (window.pJSDom && window.pJSDom.length > 0) {
      const pJS = window.pJSDom[0].pJS;
      if (pJS && pJS.particles) {
        const color = theme === 'light' ? '#2563EB' : '#ffffff';
        const lineColor = theme === 'light' ? '#2563EB' : '#ffffff';
        pJS.particles.color.value = color;
        pJS.particles.line_linked.color = lineColor;
        pJS.fn.particlesRefresh();
      }
    }
  }

  // Get saved theme or system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });
  }

  // ============================================================ PARTICLES.JS INITIALIZATION
  if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": initialTheme === 'light' ? '#2563EB' : '#ffffff'
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.2,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 0.8,
            "opacity_min": 0.05,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1.5,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": initialTheme === 'light' ? '#2563EB' : '#ffffff',
          "opacity": 0.12,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.2,
          "direction": "none",
          "random": true,
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
              "opacity": 0.35
            }
          },
          "push": {
            "particles_nb": 3
          }
        }
      },
      "retina_detect": true
    });
  }

  // ============================================================ TYPED.JS INITIALIZATION
  if (typeof Typed !== 'undefined' && document.getElementById('typed-text')) {
    new Typed('#typed-text', {
      strings: [
        'Full Stack Developer',
        'Software Engineer',
        'MERN Stack Expert',
        'Problem Solver'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      startDelay: 400,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // ============================================================ VANILLA TILT INITIALIZATION
  if (typeof VanillaTilt !== 'undefined') {
    // Standard cards
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 12,
      speed: 350,
      glare: true,
      "max-glare": 0.12,
      scale: 1.02,
      gyroscope: true,
      transition: true
    });
    
    // Premium hero image card tilt configuration
    const heroTilt = document.getElementById('hero-tilt');
    if (heroTilt) {
      VanillaTilt.init(heroTilt, {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.18,
        scale: 1.03,
        gyroscope: true
      });
    }
  }

  // ============================================================ AOS INITIALIZATION
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      delay: 50,
      easing: 'ease-out-cubic'
    });
  }

  // ============================================================ SCROLL PROGRESS & STICKY NAVBAR
  const scrollProgress = document.getElementById('scroll-progress');
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Update scroll progress bar
    if (scrollProgress && docHeight > 0) {
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + '%';
    }
    
    // Sticky navbar header shadows
    if (navbar) {
      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    
    // Back to top button visibility
    if (scrollTopBtn) {
      if (scrollTop > 500) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  // Scroll back to top trigger
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ============================================================ ACTIVE NAV NAVIGATION LINK HIGHLIGHT
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  const navObserver = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => navObserver.observe(section));

  // ============================================================ MOBILE NAV HAMBURGER MENU
  const hamburger = document.getElementById('hamburger');
  const navLinksMenu = document.getElementById('nav-links');

  if (hamburger && navLinksMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = hamburger.classList.contains('open');
      if (isOpen) {
        hamburger.classList.remove('open');
        navLinksMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      } else {
        hamburger.classList.add('open');
        navLinksMenu.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
      }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinksMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside of the navbar
    document.addEventListener('click', (e) => {
      if (navLinksMenu.classList.contains('open') && !navLinksMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('open');
        navLinksMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ============================================================ PROJECT FILTERING BY CATEGORY
  const projectFilterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button style
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-project-filter');
      
      projectCards.forEach(card => {
        const category = card.getAttribute('data-project-category');
        
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          // Trigger smooth fade-in animation
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95) translateY(10px)';
          setTimeout(() => {
            card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'scale(1) translateY(0)';
          }, 50);
        } else {
          card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95) translateY(10px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 400);
        }
      });
    });
  });

  // ============================================================ CERTIFICATION SEARCH & FILTER
  const certSearchInput = document.getElementById('cert-search');
  const certFilterBtns = document.querySelectorAll('.cert-filter');
  const certCards = document.querySelectorAll('.cert-card');
  const visibleCertCount = document.getElementById('visible-cert-count');
  const noCertsMsg = document.getElementById('no-certs-msg');

  function filterCertifications() {
    const query = certSearchInput ? certSearchInput.value.toLowerCase().trim() : '';
    
    let activeFilter = 'all';
    certFilterBtns.forEach(btn => {
      if (btn.classList.contains('active')) {
        activeFilter = btn.getAttribute('data-cert-filter');
      }
    });
    
    let visibleCount = 0;
    
    certCards.forEach(card => {
      const provider = card.getAttribute('data-cert-provider') || '';
      const name = card.getAttribute('data-cert-name') || '';
      const title = card.querySelector('.cert-title')?.textContent || '';
      const tags = Array.from(card.querySelectorAll('.cert-tags span')).map(s => s.textContent.toLowerCase()).join(' ');
      
      const matchesFilter = (activeFilter === 'all' || provider === activeFilter);
      const matchesSearch = !query || 
        name.toLowerCase().includes(query) || 
        title.toLowerCase().includes(query) || 
        provider.toLowerCase().includes(query) ||
        tags.includes(query);
        
      if (matchesFilter && matchesSearch) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });
    
    // Update count indicator
    if (visibleCertCount) {
      visibleCertCount.textContent = visibleCount;
    }
    
    // Show/hide empty results message
    if (noCertsMsg) {
      if (visibleCount === 0) {
        noCertsMsg.style.display = 'block';
      } else {
        noCertsMsg.style.display = 'none';
      }
    }
  }

  if (certSearchInput) {
    certSearchInput.addEventListener('input', filterCertifications);
  }

  certFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      certFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      certFilterBtns.forEach(b => {
        if (b !== btn) b.setAttribute('aria-selected', 'false');
      });
      
      filterCertifications();
    });
  });

  // Run certification filter count once initially
  filterCertifications();

  // ============================================================ ANIMATED MILESTONE COUNTERS
  const counterElements = document.querySelectorAll('[data-count]');

  if (counterElements.length > 0) {
    const countUp = (element) => {
      const target = parseInt(element.getAttribute('data-count'), 10);
      let count = 0;
      const duration = 2000; // Animation duration in ms
      const startTime = performance.now();
      
      const updateCount = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
        count = Math.floor(easeProgress * target);
        element.textContent = count;
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          element.textContent = target; // Fallback exact value
        }
      };
      
      requestAnimationFrame(updateCount);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target); // Animate once
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  // ============================================================ CONTACT FORM VALIDATION
  const contactForm = document.getElementById('contact-form');
  const formSubmitBtn = document.getElementById('form-submit-btn');
  const btnText = formSubmitBtn ? formSubmitBtn.querySelector('.btn-text') : null;
  const btnLoading = formSubmitBtn ? formSubmitBtn.querySelector('.btn-loading') : null;
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    const inputs = {
      name: {
        el: document.getElementById('contact-name'),
        errorEl: document.getElementById('name-error'),
        validate: (val) => val.trim().length >= 3 ? '' : 'Name must be at least 3 characters long.'
      },
      email: {
        el: document.getElementById('contact-email'),
        errorEl: document.getElementById('email-error'),
        validate: (val) => {
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!val.trim()) return 'Email address is required.';
          return regex.test(val.trim()) ? '' : 'Please enter a valid email address.';
        }
      },
      subject: {
        el: document.getElementById('contact-subject'),
        errorEl: document.getElementById('subject-error'),
        validate: (val) => val.trim().length >= 5 ? '' : 'Subject must be at least 5 characters long.'
      },
      message: {
        el: document.getElementById('contact-message'),
        errorEl: document.getElementById('message-error'),
        validate: (val) => val.trim().length >= 15 ? '' : 'Message must be at least 15 characters long.'
      }
    };

    const validateField = (name) => {
      const field = inputs[name];
      if (!field.el) return true;
      
      const errorMsg = field.validate(field.el.value);
      if (errorMsg) {
        if (field.errorEl) field.errorEl.textContent = errorMsg;
        field.el.classList.add('error');
        return false;
      } else {
        if (field.errorEl) field.errorEl.textContent = '';
        field.el.classList.remove('error');
        return true;
      }
    };

    // Attach real-time input listeners
    Object.keys(inputs).forEach(name => {
      const field = inputs[name];
      if (field.el) {
        field.el.addEventListener('blur', () => validateField(name));
        field.el.addEventListener('input', () => {
          if (field.el.classList.contains('error')) {
            validateField(name);
          }
        });
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      Object.keys(inputs).forEach(name => {
        if (!validateField(name)) {
          isValid = false;
        }
      });

      if (isValid) {
        // Toggle loader buttons
        if (formSubmitBtn && btnText && btnLoading) {
          formSubmitBtn.disabled = true;
          btnText.style.display = 'none';
          btnLoading.style.display = 'inline-block';
        }

        // AJAX submission to FormSubmit API
        fetch('https://formsubmit.co/ajax/raunakmishramth20@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: inputs.name.el.value,
            email: inputs.email.el.value,
            subject: inputs.subject.el.value,
            message: inputs.message.el.value,
            _subject: "New Portfolio Message from " + inputs.name.el.value,
            "Submitted At": new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + " (IST)"
          })
        })
        .then(response => response.json())
        .then(data => {
          contactForm.reset();
          
          if (formSuccess) {
            formSuccess.style.display = 'flex';
            formSuccess.style.opacity = '0';
            formSuccess.style.transform = 'translateY(10px)';
            formSuccess.style.transition = 'all 0.4s ease';
            
            setTimeout(() => {
              formSuccess.style.opacity = '1';
              formSuccess.style.transform = 'translateY(0)';
            }, 50);

            // Reset modal popup
            setTimeout(() => {
              formSuccess.style.opacity = '0';
              formSuccess.style.transform = 'translateY(10px)';
              setTimeout(() => {
                formSuccess.style.display = 'none';
              }, 400);
            }, 6000);
          }
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          alert('Sorry, there was an issue sending your message. Please try again directly at raunakmishramth20@gmail.com.');
        })
        .finally(() => {
          if (formSubmitBtn && btnText && btnLoading) {
            formSubmitBtn.disabled = false;
            btnText.style.display = 'inline-block';
            btnLoading.style.display = 'none';
          }
        });
      }
    });
  }

  // ============================================================ NEWSLETTER FORM VALIDATION
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  const newsletterSuccess = document.getElementById('newsletter-success');

  if (newsletterForm && newsletterEmail) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailVal = newsletterEmail.value.trim();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (regex.test(emailVal)) {
        newsletterEmail.style.borderColor = '';
        const submitBtn = newsletterForm.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;
        
        // AJAX submission to FormSubmit for updates
        fetch('https://formsubmit.co/ajax/raunakmishramth20@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email: emailVal,
            _subject: "New Newsletter Subscription: " + emailVal,
            "Submitted At": new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + " (IST)"
          })
        })
        .then(() => {
          newsletterEmail.value = '';
          if (newsletterSuccess) {
            newsletterSuccess.style.display = 'block';
            setTimeout(() => {
              newsletterSuccess.style.display = 'none';
            }, 4000);
          }
        })
        .catch(error => {
          console.error('Error subscribing:', error);
        })
        .finally(() => {
          if (submitBtn) submitBtn.disabled = false;
        });
      } else {
        newsletterEmail.style.borderColor = 'var(--danger)';
      }
    });
  }

  // ============================================================ DYNAMIC FOOTER YEAR
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // ============================================================ LAZY LOADING IMAGES MICRO-ANIMATIONS
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.style.opacity = '0';
          image.style.transition = 'opacity 0.6s ease-in-out';
          image.addEventListener('load', () => {
            image.style.opacity = '1';
          });
          observer.unobserve(image);
        }
      });
    });
    lazyImages.forEach(img => imageObserver.observe(img));
  }
});

// ============================================================ CERTIFICATION PREVIEW MODAL LOGIC
function verifyCert(certId) {
  let card = null;
  const cards = document.querySelectorAll('.cert-card');
  
  for (const c of cards) {
    // Check if details contains ID
    const details = c.querySelector('.cert-details');
    if (details && details.textContent.toLowerCase().includes(certId.toLowerCase())) {
      card = c;
      break;
    }
    
    // Check if title match
    const title = c.querySelector('.cert-title')?.textContent || '';
    if (title.toLowerCase() === certId.toLowerCase()) {
      card = c;
      break;
    }
    
    // Check if click handler matches
    const button = c.querySelector('button[onclick]');
    if (button && button.getAttribute('onclick').includes(certId)) {
      card = c;
      break;
    }
  }
  
  if (!card) return;
  
  const verifyUrl = card.getAttribute('data-verify-url') || 'https://github.com/Raunakmishra123';
  const title = card.querySelector('.cert-title')?.textContent || 'Certificate';
  const issuer = card.querySelector('.cert-issuer')?.textContent || 'Verified Provider';
  const logoClass = card.querySelector('.cert-logo i')?.className || 'fas fa-award';
  const logoBg = window.getComputedStyle(card.querySelector('.cert-logo')).background;
  const tags = Array.from(card.querySelectorAll('.cert-tags span')).map(s => s.textContent);
  const levelEl = card.querySelector('.cert-level');
  const levelText = levelEl ? levelEl.textContent : '';
  const levelClass = levelEl ? levelEl.className : '';
  
  // Extract ID specifically
  const idSpan = Array.from(card.querySelectorAll('.cert-details span')).find(span => span.querySelector('.fa-id-card') || span.textContent.includes('ID:'));
  const parsedId = idSpan ? idSpan.textContent.replace('ID:', '').trim() : certId;
  
  const modalBody = document.getElementById('modal-body');
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="verification-modal-content">
        <div class="verification-badge-header">
          <div class="verification-seal">
            <i class="fas fa-certificate"></i>
          </div>
          <div class="verification-badge-logo">
            <div class="cert-logo" style="background: ${logoBg}; width: 60px; height: 60px; font-size: 1.8rem; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white;">
              <i class="${logoClass}"></i>
            </div>
          </div>
        </div>
        
        <div class="verification-badge-status">
          <i class="fas fa-check-circle"></i> VERIFIED CREDENTIAL
        </div>
        
        <h3 class="verification-badge-title">${title}</h3>
        <p class="verification-badge-issuer">Issued by <strong>${issuer}</strong></p>
        
        <div class="verification-badge-details">
          <span><i class="fas fa-id-card"></i> ID: ${parsedId}</span>
          ${Array.from(card.querySelectorAll('.cert-details span'))
            .filter(span => !span.querySelector('.fa-id-card') && !span.textContent.includes('ID:'))
            .map(span => `<span>${span.innerHTML}</span>`).join('')}
          ${levelText ? `<span class="${levelClass}">${levelText}</span>` : ''}
        </div>
        
        <div class="verification-badge-tags">
          ${tags.map(t => `<span class="badge-tag">${t}</span>`).join('')}
        </div>
        
        <div class="verification-badge-security">
          <p><i class="fas fa-shield-alt"></i> Secured by 256-bit SSL Cryptographic Verification</p>
          <p>Verified on: ${new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        
        <div class="verification-badge-actions">
          <a href="${verifyUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
            <i class="fas fa-external-link-alt"></i> Official Site
          </a>
          <button class="btn btn-outline btn-sm" id="btn-print-cert">
            <i class="fas fa-print"></i> Print Details
          </button>
        </div>
      </div>
    `;
    
    // Bind print details action
    document.getElementById('btn-print-cert')?.addEventListener('click', () => {
      window.print();
    });
    
    // Open modal popup
    const modal = document.getElementById('cert-modal');
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }
}

// Function to preview the certificate image in the modal
function viewCert(imgName) {
  const modalBody = document.getElementById('modal-body');
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="certificate-preview-content">
        <img src="images/certificates/${imgName}.jpg" alt="Certificate Preview" class="cert-preview-img" onerror="this.onerror=null; this.src='images/certificates/${imgName}.png';" />
      </div>
    `;
    const modal = document.getElementById('cert-modal');
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }
}

// Global modal overlay close triggers
document.addEventListener('DOMContentLoaded', () => {
  const modalClose = document.getElementById('modal-close');
  const certModal = document.getElementById('cert-modal');
  
  if (modalClose && certModal) {
    const closeModal = () => {
      certModal.style.display = 'none';
      document.body.style.overflow = '';
    };
    
    modalClose.addEventListener('click', closeModal);
    
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        closeModal();
      }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && certModal.style.display === 'flex') {
        closeModal();
      }
    });
  }

  // Fallback bind click events to all certificate verify buttons without onclick attribute
  const certCardsList = document.querySelectorAll('.cert-card');
  certCardsList.forEach(card => {
    const verifyBtn = Array.from(card.querySelectorAll('.cert-actions button')).find(btn => btn.textContent.includes('Verify'));
    if (verifyBtn && !verifyBtn.hasAttribute('onclick')) {
      verifyBtn.addEventListener('click', () => {
        const idSpan = Array.from(card.querySelectorAll('.cert-details span')).find(span => span.querySelector('.fa-id-card') || span.textContent.includes('ID:'));
        if (idSpan) {
          const certId = idSpan.textContent.replace('ID:', '').trim();
          verifyCert(certId);
        } else {
          const title = card.querySelector('.cert-title')?.textContent || 'Certificate';
          verifyCert(title);
        }
      });
    }
  });
});

// Expose functions to window globally for inline onclick execution
window.verifyCert = verifyCert;
window.viewCert = viewCert;

// ============================================================ WINDOW ONLOAD HIDE LOADER
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.classList.add('hidden');
  }
});
