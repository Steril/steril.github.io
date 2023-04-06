// Add any necessary JavaScript for interactivity or animations

// Smooth scroll to all menu items and CTA button
document.querySelectorAll('nav a, .cta').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
