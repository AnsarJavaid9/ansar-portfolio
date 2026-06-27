/**
 * PORTFOLIO - Muhammad Ansar Javaid
 * Web Developer
 */

'use strict';

// ===== Touch Device Detection =====
const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {

  // ===== Loading Screen =====
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 1500);
  });
  // Fallback
  setTimeout(() => {
    if (!loader.classList.contains('hidden')) {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }, 4000);

  // ===== Custom Cursor =====
  const cursorDot = document.getElementById('cursorDot');
  const cursorOutline = document.getElementById('cursorOutline');

  if (cursorDot && cursorOutline) {
    document.addEventListener('mousemove', (e) => {
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
      cursorOutline.style.left = e.clientX + 'px';
      cursorOutline.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, input, textarea, .skill-card, .service-card, .project-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.borderColor = 'var(--secondary)';
      });
      el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.borderColor = 'var(--primary)';
      });
    });
  }

  // ===== Particle Network Background =====
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;
    let mouse = { x: null, y: null, radius: 120 };

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      update() {
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const dirX = dx / dist || 0;
            const dirY = dy / dist || 0;
            this.x -= dirX * force * 1.5;
            this.y -= dirY * force * 1.5;
          }
        }
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = `rgba(178, 213, 229, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const isMobile = canvas.width < 768;
      const divisor = isMobile ? 40000 : 20000;
      const count = Math.floor((canvas.width * canvas.height) / divisor);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.3;
            ctx.strokeStyle = `rgba(178, 213, 229, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      connectParticles();
      animId = requestAnimationFrame(animateParticles);
    }

    function startParticles() {
      resizeCanvas();
      initParticles();
      animateParticles();
    }

    startParticles();

    document.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    document.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // Cleanup on page hide
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        animateParticles();
      }
    });
  }

  // ===== Navbar Scroll Effect =====
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });

  // ===== Mobile Nav Toggle =====
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ===== Active Nav Link on Scroll =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // ===== Typing Effect =====
  const typedTextEl = document.querySelector('.typed-text');
  if (typedTextEl) {
    const words = ['Web Developer', 'Frontend Developer', 'Backend Developer', 'WordPress Developer', 'Software Engineer'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeEffect() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typedTextEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        typedTextEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }
      setTimeout(typeEffect, typeSpeed);
    }
    typeEffect();
  }

  // ===== Skill Bars Animation =====
  const skillBars = document.querySelectorAll('.skill-progress');

  function animateSkillBars() {
    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 50;
      if (isVisible && bar.style.width === '0px' || bar.style.width === '') {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
      }
    });
  }

  // Initial check
  setTimeout(animateSkillBars, 500);
  window.addEventListener('scroll', animateSkillBars);

  // ===== Animated Counters =====
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated || !counters.length) return;
    counters.forEach(counter => {
      const rect = counter.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        countersAnimated = true;
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 40;
        let current = 0;
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };
        updateCounter();
      }
    });
  }

  window.addEventListener('scroll', animateCounters);
  setTimeout(animateCounters, 500);

  // ===== 3D Card Tilt (Desktop only) =====
  const tiltCards = document.querySelectorAll('.tilt-card');

  if (!isTouchDevice()) {
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / centerY * -8;
        const rotateY = (x - centerX) / centerX * 8;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }

  // ===== Magnetic Buttons (Desktop only) =====
  const magneticBtns = document.querySelectorAll('.btn, .btn-outline-cv');

  if (!isTouchDevice()) {
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ===== Gradient Orb Parallax (Desktop only) =====
  const orbs = document.querySelectorAll('.gradient-orb');

  if (!isTouchDevice()) {
    window.addEventListener('mousemove', (e) => {
      const xFactor = (e.clientX / window.innerWidth - 0.5) * 20;
      const yFactor = (e.clientY / window.innerHeight - 0.5) * 20;
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 0.5;
        orb.style.transform = `translate(${xFactor * speed}px, ${yFactor * speed}px)`;
      });
    });
  }

  // ===== Project Filter =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ===== Add Project URL =====
  const addProjectBtn = document.getElementById('addProjectBtn');
  const projectUrlInput = document.getElementById('projectUrlInput');
  const projectUrlsList = document.getElementById('projectUrlsList');

  if (addProjectBtn && projectUrlInput && projectUrlsList) {
    // Load saved URLs
    const savedUrls = JSON.parse(localStorage.getItem('portfolioUrls') || '[]');
    savedUrls.forEach(url => addProjectUrlItem(url));

    addProjectBtn.addEventListener('click', () => {
      const url = projectUrlInput.value.trim();
      if (url && url.startsWith('http')) {
        savedUrls.push(url);
        localStorage.setItem('portfolioUrls', JSON.stringify(savedUrls));
        addProjectUrlItem(url);
        projectUrlInput.value = '';
      } else {
        alert('Please enter a valid URL starting with http:// or https://');
      }
    });

    projectUrlInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addProjectBtn.click();
    });

    function addProjectUrlItem(url) {
      const item = document.createElement('div');
      item.className = 'project-url-item';
      item.innerHTML = `
        <a href="${url}" target="_blank">${url}</a>
        <button class="remove-url" aria-label="Remove"><i class="fas fa-times"></i></button>
      `;
      item.querySelector('.remove-url').addEventListener('click', () => {
        const urls = JSON.parse(localStorage.getItem('portfolioUrls') || '[]');
        const idx = urls.indexOf(url);
        if (idx > -1) urls.splice(idx, 1);
        localStorage.setItem('portfolioUrls', JSON.stringify(urls));
        item.remove();
      });
      projectUrlsList.appendChild(item);
    }
  }

  // ===== Contact Form (Formspree) =====
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn-submit');
      const originalText = btn.innerHTML;

      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;
      if (formStatus) formStatus.innerHTML = '';

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          btn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
          btn.style.background = 'linear-gradient(135deg, #28c840, #1fa832)';
          contactForm.reset();
          if (formStatus) formStatus.innerHTML = '<span class="success">Thank you! I will get back to you soon.</span>';
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.disabled = false;
            if (formStatus) formStatus.innerHTML = '';
          }, 4000);
        } else {
          const result = await response.json();
          btn.innerHTML = originalText;
          btn.disabled = false;
          if (formStatus) formStatus.innerHTML = '<span class="error">' + (result.error || 'Something went wrong.') + '</span>';
        }
      } catch (error) {
        btn.innerHTML = originalText;
        btn.disabled = false;
        if (formStatus) formStatus.innerHTML = '<span class="error">Network error. Please try again.</span>';
      }
    });
  }

  // ===== Back to Top =====
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
  }

  // ===== Scroll Reveal (AOS) =====
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      disable: 'mobile'
    });
  }

  // ===== Smooth Reveal for elements not using AOS =====
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    revealElements.forEach(el => revealObserver.observe(el));
  }

});


