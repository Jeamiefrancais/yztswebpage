const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.top-nav');
  if (window.scrollY > 20) {
    header.style.backdropFilter = 'blur(12px)';
    header.style.backgroundColor = 'rgba(15, 23, 42, 0.82)';
  } else {
    header.style.backdropFilter = 'none';
    header.style.backgroundColor = 'transparent';
  }
});
