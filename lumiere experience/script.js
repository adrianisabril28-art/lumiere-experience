document.addEventListener('DOMContentLoaded', () => {
  const carrusel = document.getElementById('carrusel');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');

  if (carrusel && btnPrev && btnNext) {
    btnNext.addEventListener('click', () => {
      carrusel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    btnPrev.addEventListener('click', () => {
      carrusel.scrollBy({ left: -300, behavior: 'smooth' });
    });
  }
});