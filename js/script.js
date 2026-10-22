// script for my portfolio

var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

document.addEventListener('DOMContentLoaded', function () {

  // loading screen
  var loader = document.getElementById('loader');

  function hideLoader() {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
  }

  window.addEventListener('load', function () {
    setTimeout(hideLoader, 1500);
  });

  // in case the load event takes too long
  setTimeout(function () {
    if (!loader.classList.contains('hidden')) {
      hideLoader();
    }
  }, 4000);


  // custom cursor
  var cursorDot = document.getElementById('cursorDot');
  var cursorOutline = document.getElementById('cursorOutline');

  if (cursorDot && cursorOutline) {
    document.addEventListener('mousemove', function (e) {
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
      cursorOutline.style.left = e.clientX + 'px';
      cursorOutline.style.top = e.clientY + 'px';
    });

    var hoverItems = document.querySelectorAll('a, button, input, textarea, .skill-card, .service-card, .project-card');

    hoverItems.forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.borderColor = 'var(--secondary)';
      });

      item.addEventListener('mouseleave', function () {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.borderColor = 'var(--primary)';
      });
    });
  }


  // moving dots in the background
  var canvas = document.getElementById('particleCanvas');

  if (canvas) {
    var ctx = canvas.getContext('2d');
    var dots = [];
    var mouse = { x: null, y: null };

    function setCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function makeDots() {
      dots = [];
      // fewer dots on small screens
      var area = canvas.width < 768 ? 40000 : 20000;
      var total = Math.floor((canvas.width * canvas.height) / area);

      for (var i = 0; i < total; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    }

    function moveDot(dot) {
      // push the dot away if the mouse is close
      if (mouse.x && mouse.y) {
        var dx = mouse.x - dot.x;
        var dy = mouse.y - dot.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          var force = (120 - distance) / 120;
          dot.x -= (dx / distance || 0) * force * 1.5;
          dot.y -= (dy / distance || 0) * force * 1.5;
        }
      }

      dot.x += dot.speedX;
      dot.y += dot.speedY;

      // come back from the other side of the screen
      if (dot.x > canvas.width) dot.x = 0;
      if (dot.x < 0) dot.x = canvas.width;
      if (dot.y > canvas.height) dot.y = 0;
      if (dot.y < 0) dot.y = canvas.height;
    }

    function drawDot(dot) {
      ctx.fillStyle = 'rgba(178, 213, 229, ' + dot.opacity + ')';
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fill();
    }

    // draw a line between dots that are near each other
    function drawLines() {
      for (var a = 0; a < dots.length; a++) {
        for (var b = a; b < dots.length; b++) {
          var dx = dots[a].x - dots[b].x;
          var dy = dots[a].y - dots[b].y;
          var distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = 'rgba(178, 213, 229, ' + (1 - distance / 120) * 0.3 + ')';
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(dots[a].x, dots[a].y);
            ctx.lineTo(dots[b].x, dots[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(function (dot) {
        moveDot(dot);
        drawDot(dot);
      });

      drawLines();
      requestAnimationFrame(animate);
    }

    setCanvasSize();
    makeDots();
    animate();

    document.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    document.addEventListener('mouseleave', function () {
      mouse.x = null;
      mouse.y = null;
    });

    window.addEventListener('resize', function () {
      setCanvasSize();
      makeDots();
    });
  }


  // navbar background after scrolling a bit
  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  // menu button for mobile
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');
  var navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');

      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // close the menu when a link is clicked
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }


  // highlight the nav link of the section we are on
  var sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', function () {
    var currentId = '';

    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 120) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');

      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  });


  // typing effect in the hero section
  var typedText = document.querySelector('.typed-text');

  if (typedText) {
    var words = ['Web Developer', 'Frontend Developer', 'Backend Developer', 'WordPress Developer', 'Software Engineer'];
    var wordIndex = 0;
    var charIndex = 0;
    var deleting = false;

    function type() {
      var word = words[wordIndex];
      var delay = 100;

      if (deleting) {
        charIndex--;
        delay = 50;
      } else {
        charIndex++;
      }

      typedText.textContent = word.substring(0, charIndex);

      if (!deleting && charIndex === word.length) {
        // wait a bit when the word is complete
        deleting = true;
        delay = 2000;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 500;
      }

      setTimeout(type, delay);
    }

    type();
  }


  // skill bars fill up when they come on screen
  var skillBars = document.querySelectorAll('.skill-progress');

  function fillSkillBars() {
    skillBars.forEach(function (bar) {
      var onScreen = bar.getBoundingClientRect().top < window.innerHeight - 50;
      var empty = bar.style.width === '0px' || bar.style.width === '';

      if (onScreen && empty) {
        bar.style.width = bar.getAttribute('data-progress') + '%';
      }
    });
  }

  setTimeout(fillSkillBars, 500);
  window.addEventListener('scroll', fillSkillBars);


  // effects for mouse only (not for phones)
  if (!isTouch) {

    // cards tilt a little when the mouse moves on them
    document.querySelectorAll('.tilt-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var box = card.getBoundingClientRect();
        var x = e.clientX - box.left;
        var y = e.clientY - box.top;
        var rotateX = (y - box.height / 2) / (box.height / 2) * -8;
        var rotateY = (x - box.width / 2) / (box.width / 2) * 8;

        card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });

    // buttons move slightly towards the mouse
    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var box = btn.getBoundingClientRect();
        var x = e.clientX - box.left - box.width / 2;
        var y = e.clientY - box.top - box.height / 2;

        btn.style.transform = 'translate(' + x * 0.2 + 'px, ' + y * 0.2 + 'px)';
      });

      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });

    // background circles follow the mouse slowly
    var orbs = document.querySelectorAll('.gradient-orb');

    window.addEventListener('mousemove', function (e) {
      var moveX = (e.clientX / window.innerWidth - 0.5) * 20;
      var moveY = (e.clientY / window.innerHeight - 0.5) * 20;

      orbs.forEach(function (orb, i) {
        var speed = (i + 1) * 0.5;
        orb.style.transform = 'translate(' + moveX * speed + 'px, ' + moveY * speed + 'px)';
      });
    });
  }


  // project filter buttons
  var filterButtons = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      filterButtons.forEach(function (b) {
        b.classList.remove('active');
      });
      button.classList.add('active');

      var filter = button.getAttribute('data-filter');

      projectCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  // contact form (sent with Formspree)
  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      var submitBtn = contactForm.querySelector('.btn-submit');
      var oldText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
      formStatus.innerHTML = '';

      try {
        var response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
          submitBtn.style.background = 'linear-gradient(135deg, #28c840, #1fa832)';
          formStatus.innerHTML = '<span class="success">Thank you! I will get back to you soon.</span>';
          contactForm.reset();

          // go back to normal after 4 seconds
          setTimeout(function () {
            submitBtn.innerHTML = oldText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            formStatus.innerHTML = '';
          }, 4000);
        } else {
          var result = await response.json();
          submitBtn.innerHTML = oldText;
          submitBtn.disabled = false;
          formStatus.innerHTML = '<span class="error">' + (result.error || 'Something went wrong.') + '</span>';
        }
      } catch (error) {
        submitBtn.innerHTML = oldText;
        submitBtn.disabled = false;
        formStatus.innerHTML = '<span class="error">Network error. Please try again.</span>';
      }
    });
  }


  // back to top button shows after scrolling down
  var backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
  }


  // scroll animations
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      disable: 'mobile'
    });
  }

});
