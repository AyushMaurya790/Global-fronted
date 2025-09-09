const navbar = document.querySelector('.navbar');
  const menuBtn = document.querySelector('.navbar-toggler');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close-btn');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight - 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Open menu
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
  });

  // Close menu
  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  };
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close when clicking a link
  document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });


  // 

  let inspiredSlideIndex = 0;
const track = document.getElementById('inspiredTrack');
const cards = document.querySelectorAll('.inspired-card');
const totalCards = cards.length;

function slideInspired(direction) {
  // Check if required elements exist
  if (!track || !cards.length) {
    console.warn('slideInspired: Required elements not found');
    return;
  }

  const cardWidth = cards[0].offsetWidth + 20; // card width + gap
  const visibleCards = Math.floor(document.querySelector('.inspired-slider').offsetWidth / cardWidth);

  // Update index
  inspiredSlideIndex += direction;

  // Looping logic
  if (inspiredSlideIndex < 0) {
    inspiredSlideIndex = totalCards - visibleCards;
  } else if (inspiredSlideIndex > totalCards - visibleCards) {
    inspiredSlideIndex = 0;
  }

  // Move track
  track.style.transform = `translateX(-${inspiredSlideIndex * cardWidth}px)`;
}

// Optional: Autoplay - only if elements exist
if (track && cards.length) {
  setInterval(() => slideInspired(1), 4000);
}

// Add left button loop logic
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', function() {
    slideInspired(-1);
  });
  nextBtn.addEventListener('click', function() {
    slideInspired(1);
  });
}

  // Swiper JS
  // Initialize Testimonial Slider
document.addEventListener('DOMContentLoaded', function() {
  const testimonialSwiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
  });
});

// Partner Slider


  const partnerSwiper = new Swiper(".logoSwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
    },
  });

  
const submenuItems = document.querySelectorAll(".mega-left li");
const rightPanel = document.querySelector(".mega-right");
const contents = document.querySelectorAll(".mega-right .content");

// submenu hover
submenuItems.forEach(item => {
  item.addEventListener("mouseenter", function() {
    rightPanel.classList.add("active");
    contents.forEach(c => c.classList.remove("active"));
    const target = document.getElementById(this.dataset.target);
    if (target) target.classList.add("active");
  });
});

// Hide right panel and contents when mouse leaves the whole dropdown
document.querySelector('.dropdown').addEventListener('mouseleave', () => {
  rightPanel.classList.remove('active');
  contents.forEach(c => c.classList.remove('active'));
});

// Add/remove .active class on dropdown when submenu is open/closed
document.querySelectorAll('.nav-item.dropdown').forEach(function(drop) {
  drop.addEventListener('mouseenter', function() {
    drop.classList.add('active');
  });
  drop.addEventListener('mouseleave', function() {
    drop.classList.remove('active');
  });
});


//

