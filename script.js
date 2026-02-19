// Advanced JavaScript for smooth animations, image lazy loading, scroll animations, and interactive gallery effects

// Smooth animations
const smoothScroll = (target) => {
  const element = document.querySelector(target);
  element.scrollIntoView({
    behavior: 'smooth'
  });
};

// Image lazy loading
const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(image => observer.observe(image));
};

// Scroll animations
const revealOnScroll = () => {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  });

  elements.forEach(element => observer.observe(element));
};

// Interactive gallery effects
const initGallery = () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active'); // Toggle active class for effects
    });
  });
};

// Modern interactions
document.addEventListener('DOMContentLoaded', () => {
  lazyLoadImages();
  revealOnScroll();
  initGallery();
});

// You can integrate this functionality into your website by calling these functions where necessary.