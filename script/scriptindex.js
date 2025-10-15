const menu_icon = document.getElementById('menu-icon');
const ul = document.getElementById('ul');

menu_icon.addEventListener('click', () => {
    ul.classList.toggle('active');
});

// Animación al hacer scroll
    const elements = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    elements.forEach(el => observer.observe(el));