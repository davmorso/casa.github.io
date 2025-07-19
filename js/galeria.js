document.addEventListener('DOMContentLoaded', () => {
  const pisos = {
    'primer-piso': [
      {src: 'casa18.jpeg', alt: 'Casa 18'},
      {src: 'casa19.jpeg', alt: 'Casa 19'},
      {src: 'casa20.jpeg', alt: 'Casa 20'},
      {src: 'casa21.jpeg', alt: 'Casa 21'},
      {src: 'casa22.jpeg', alt: 'Casa 22'},
      {src: 'casa23.jpeg', alt: 'Casa 23'},
      {src: 'casa16.jpeg', alt: 'Casa 16'},
      {src: 'casa25.jpeg', alt: 'Casa 25'},
      {src: 'casa27.jpeg', alt: 'Casa 27'},
      {src: 'casa24.jpeg', alt: 'Casa 24'} // esta va al final
    ],
    'segundo-piso': [
      {src: 'casa6.jpeg', alt: 'Casa 6'},
      {src: 'casa7.jpeg', alt: 'Casa 7'},
      {src: 'casa8.jpeg', alt: 'Casa 8'},
      {src: 'casa9.jpeg', alt: 'Casa 9'},
      {src: 'casa11.jpeg', alt: 'Casa 11'},
      {src: 'casa12.jpeg', alt: 'Casa 12'},
      {src: 'casa13.jpeg', alt: 'Casa 13'},
      {src: 'casa14.jpeg', alt: 'Casa 14'},
      {src: 'casa15.jpeg', alt: 'Casa 15'}
    ],
    'tercer-piso': [
      {src: 'casa1.jpeg', alt: 'Casa 1'},
      {src: 'casa2.jpeg', alt: 'Casa 2'},
      {src: 'casa3.jpeg', alt: 'Casa 3'},
      {src: 'casa4.jpeg', alt: 'Casa 4'},
      {src: 'casa5.jpeg', alt: 'Casa 5'}
    ]
  };

  const basePath = './img/'; // <-- Asegúrate de que las imágenes estén en esta carpeta

  // Mover casa24.jpeg al final si existe
  if (pisos['primer-piso']) {
    const primero = pisos['primer-piso'];
    const resto = primero.filter(img => img.src !== 'casa24.jpeg');
    const ultima = primero.filter(img => img.src === 'casa24.jpeg');
    pisos['primer-piso'] = [...resto, ...ultima];
  }

  // Cargar imágenes en sus secciones
  Object.entries(pisos).forEach(([seccionId, imagenes]) => {
    const contenedor = document.querySelector(`#${seccionId} .imagenes`);
    if (!contenedor) return;

    imagenes.forEach(({src, alt}) => {
      const img = document.createElement('img');
      img.src = basePath + src;
      img.alt = alt;
      img.loading = 'lazy';
      img.style.cursor = 'pointer';
      contenedor.appendChild(img);
    });
  });

  // Modal funcional
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('imagen-ampliada');
  const captionText = document.getElementById('caption');
  const cerrar = document.getElementById('cerrar');

  document.body.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' && e.target.parentElement.classList.contains('imagenes')) {
      modal.style.display = 'flex';
      modalImg.src = e.target.src;
      captionText.textContent = e.target.alt;
    }
  });

  cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});
