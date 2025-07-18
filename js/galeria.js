document.addEventListener('DOMContentLoaded', () => {
  const pisos = {
    'primer-piso': [
      {src: 'casa24.jpeg', alt: 'Casa 24'},
      {src: 'casa17.jpeg', alt: 'Casa 17'},
      {src: 'casa18.jpeg', alt: 'Casa 18'},
      {src: 'casa19.jpeg', alt: 'Casa 19'},
      {src: 'casa20.jpeg', alt: 'Casa 20'},
      {src: 'casa21.jpeg', alt: 'Casa 21'},
      {src: 'casa22.jpeg', alt: 'Casa 22'},
      {src: 'casa23.jpeg', alt: 'Casa 23'},
      {src: 'casa16.jpeg', alt: 'Casa 16'},
      {src: 'casa25.jpeg', alt: 'Casa 25'},
      {src: 'casa27.jpeg', alt: 'Casa 27'}
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

  const basePath = './Piso en Arenys de Mar_files/';

  // Filtrar y ordenar imágenes del primer piso para poner casa17 y casa24 al final
  if (pisos['primer-piso']) {
    const primero = pisos['primer-piso'];
    const sinExcluidos = primero.filter(img => img.src !== 'casa17.jpeg' && img.src !== 'casa24.jpeg');
    const excluidos = primero.filter(img => img.src === 'casa17.jpeg' || img.src === 'casa24.jpeg');
    pisos['primer-piso'] = sinExcluidos.concat(excluidos);
  }

  Object.entries(pisos).forEach(([seccionId, imagenes]) => {
    const contenedor = document.querySelector(`#${seccionId} .imagenes`);
    imagenes.forEach(({src, alt}) => {
      const img = document.createElement('img');
      img.src = basePath + src;
      img.alt = alt;
      img.style.cursor = 'pointer';
      contenedor.appendChild(img);
    });
  });

  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('imagen-ampliada');
  const captionText = document.getElementById('caption');
  const cerrar = document.getElementById('cerrar');

  document.body.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG' && e.target.parentElement.classList.contains('imagenes')) {
      modal.style.display = 'block';
      modalImg.src = e.target.src;
      captionText.textContent = e.target.alt;
    }
  });

  cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', e => {
    if(e.target === modal) modal.style.display = 'none';
  });
});
