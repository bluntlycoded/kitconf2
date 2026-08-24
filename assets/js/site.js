document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', function () {

  /* Scroll-reveal: fade elements up as they enter the viewport. */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Header shadow once the page scrolls. */
  var header = document.querySelector('header.ng-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('shadow-2xl', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Close the mobile nav when a link is tapped. */
  var navToggle = document.getElementById('nav-toggle');
  if (navToggle) {
    document.querySelectorAll('#main-nav a').forEach(function (a) {
      a.addEventListener('click', function () { navToggle.checked = false; });
    });
  }

  /* Hero image slider (index.html only — no-op elsewhere). */
  var slides = document.querySelectorAll('.slider-image');
  var dots = document.querySelectorAll('.slider-dot');
  if (slides.length) {
    var currentSlideIndex = 0;
    var totalSlides = slides.length;

    function showSlide(index) {
      slides.forEach(function (s) { s.classList.remove('active'); });
      dots.forEach(function (d) { d.classList.remove('active'); });
      slides[index].classList.add('active');
      if (dots[index]) dots[index].classList.add('active');
    }

    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
      showSlide(currentSlideIndex);
    }

    window.currentSlide = function (n) {
      currentSlideIndex = Math.max(0, Math.min(totalSlides - 1, n - 1));
      showSlide(currentSlideIndex);
    };

    var intervalId = setInterval(nextSlide, 5500);
    dots.forEach(function (dot) {
      dot.addEventListener('mouseenter', function () { clearInterval(intervalId); });
      dot.addEventListener('mouseleave', function () { intervalId = setInterval(nextSlide, 5500); });
    });

    showSlide(0);
  }

  /* Speaker bio modals (speakers.html only — no-op elsewhere). */
  window.openModal = function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  window.closeModal = function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('active');
    document.body.style.overflow = '';
  };
  document.querySelectorAll('.modal').forEach(function (m) {
    m.addEventListener('click', function (e) { if (e.target === m) closeModal(m.id); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.active').forEach(function (m) { closeModal(m.id); });
    }
  });
  document.querySelectorAll('.speaker-card[role="button"]').forEach(function (c) {
    c.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.click(); }
    });
  });
});
