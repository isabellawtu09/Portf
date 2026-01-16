
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.2 }); 

document.querySelectorAll('.timeline-item').forEach(item => {
  observer.observe(item);
});