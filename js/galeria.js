document.addEventListener('DOMContentLoaded', () => {
  const pisos = {
    'primer-piso': [
	  {src: 'casa24.jpeg', alt: 'Primera planta: comedor.'}
      {src: 'casa18.jpeg', alt: 'Primera planta: lavadero / terraza'},
      {src: 'casa19.jpeg', alt: 'Primera planta: lavadero / terraza'},
      {src: 'casa20.jpeg', alt: 'Primera planta: vistas exterior'},
      {src: 'casa21.jpeg', alt: 'Primera planta: comedor'},
      {src: 'casa22.jpeg', alt: 'Primera planta: comedor'},
      {src: 'casa23.jpeg', alt: 'Primera planta: comedor'},
      {src: 'casa25.jpeg', alt: 'Primera planta: cocina'},
      {src: 'casa27.jpeg', alt: 'Primera planta: cocina'},
	  {src: 'casa16.jpeg', alt: 'Primera planta: acceso segunda planta'}
       
    ],
    'segundo-piso': [
      {src: 'casa7.jpeg', alt: 'Segunda planta: guardarropia'},
      {src: 'casa8.jpeg', alt: 'Segunda planta: passillo suite'},
	  {src: 'casa11.jpeg', alt: 'Segunda planta: habitación'},
      {src: 'casa11.jpeg', alt: 'Segunda planta: habitación'},
      {src: 'casa12.jpeg', alt: 'Segunda planta: terraza habitación'},
      {src: 'casa13.jpeg', alt: 'Segunda planta: lavabo suite'},
      {src: 'casa14.jpeg', alt: 'Segunda planta: lavabo suite'},
      {src: 'casa15.jpeg', alt: 'Segunda planta: lavabo suite'},
	  {src: 'casa6.jpeg', alt: 'Segunda planta: acceso tercera planta'},
    ],
    'tercer-piso': [
      {src: 'casa1.jpeg', alt: 'Tercera planta: pasillo suite'},
      {src: 'casa2.jpeg', alt: 'Tercera planta: terraza suite 2'},
      {src: 'casa3.jpeg', alt: 'Tercera planta: terraza suite 2'},
      {src: 'casa4.jpeg', alt: 'Tercera planta: habitación'},
      {src: 'casa5.jpeg', alt: 'Tercera planta: habitación'}
	  {src: 'casa28.jpeg', alt: 'Tercera planta: despacho suite'}
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
