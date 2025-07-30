// Seleciona botão e nav
const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');

toggleBtn.addEventListener('click', () => {
  // Alterna classes para animação e abertura do menu
  toggleBtn.classList.toggle('open');
  nav.classList.toggle('open');
});
// Aguarda a página carregar
document.addEventListener('DOMContentLoaded', () => {
  const NUM = 200 ;

  for (let i = 0; i < NUM; i++) {
    const sq = document.createElement('div');
    sq.classList.add('square');
    document.body.appendChild(sq);
  }

// Carrossel do notebook

document.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.carousel-container .slide');
      const prev   = document.querySelector('.carousel-nav.prev');
      const next   = document.querySelector('.carousel-nav.next');
      let current  = 0;

      function show(idx) {
        slides.forEach((s,i) => s.classList.toggle('active', i === idx));
      }

      prev.addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        show(current);
      });
      next.addEventListener('click', () => {
        current = (current + 1) % slides.length;
        show(current);
      });
    });