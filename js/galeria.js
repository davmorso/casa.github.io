document.addEventListener('DOMContentLoaded', () => {
  const pisos = {
    'primer-piso': [
      { src: './img/casa18.jpeg', alt: 'Primera planta: lavadero / terraza' },
      { src: './img/casa19.jpeg', alt: 'Primera planta: lavadero / terraza' },
      { src: './img/casa20.jpeg', alt: 'Primera planta: vistas exterior' },
      { src: './img/casa21.jpeg', alt: 'Primera planta: comedor' },
      { src: './img/casa22.jpeg', alt: 'Primera planta: comedor' },
      { src: './img/casa23.jpeg', alt: 'Primera planta: comedor' },
      { src: './img/casa25.jpeg', alt: 'Primera planta: cocina' },
      { src: './img/casa27.jpeg', alt: 'Primera planta: cocina' },
      { src: './img/casa16.jpeg', alt: 'Primera planta: acceso segunda planta' },
      { src: './img/casa24.jpeg', alt: 'Primera planta: comedor.' }
    ],
    'segundo-piso': [
      { src: './img/casa7.jpeg', alt: 'Segunda planta: guardarropia' },
      { src: './img/casa8.jpeg', alt: 'Segunda planta: pasillo suite' },
      { src: './img/casa11.jpeg', alt: 'Segunda planta: habitación' },
      { src: './img/casa12.jpeg', alt: 'Segunda planta: terraza habitación' },
      { src: './img/casa13.jpeg', alt: 'Segunda planta: armario habitación' },
      { src: './img/casa14.jpeg', alt: 'Segunda planta: baño habitación' },
      { src: './img/casa15.jpeg', alt: 'Segunda planta: baño habitación' }
    ],
    'tercer-piso': [
      { src: './img/casa1.jpeg', alt: 'Tercera planta: habitación' },
      { src: './img/casa2.jpeg', alt: 'Tercera planta: habitación' },
      { src: './img/casa3.jpeg', alt: 'Tercera planta: baño' },
      { src: './img/casa4.jpeg', alt: 'Tercera planta: terraza' },
      { src: './img/casa5.jpeg', alt: 'Tercera planta: terraza' },
      { src: './img/casa6.jpeg', alt: 'Tercera planta: baño' }
    ]
  };

  const plantas = Object.keys(pisos);

  // Variables para controlar estado
  let seccionActual = null;
  let imagenActualIndex = 0;

  // Referencias DOM
  const modal = document.getElementById('modal');
  const imagenAmpliada = document.getElementById('imagen-ampliada');
  const caption = document.getElementById('caption');
  const cerrarBtn = document.getElementById('cerrar');
  const btnAnterior = document.getElementById('anterior');
  const btnSiguiente = document.getElementById('siguiente');
  const btnPlantaAnterior = document.getElementById('planta-anterior');
  const btnPlantaSiguiente = document.getElementById('planta-siguiente');

  // Función para crear las miniaturas en cada sección
  function cargarMiniaturas() {
    plantas.forEach((planta) => {
      const contenedor = document.querySelector(`#${planta} .imagenes`);
      if (!contenedor) return;
      pisos[planta].forEach((imgObj, index) => {
        const img = document.createElement('img');
        img.src = imgObj.src;
        img.alt = imgObj.alt;
        img.tabIndex = 0;
        img.setAttribute('data-planta', planta);
        img.setAttribute('data-index', index);
        img.classList.add('miniatura');

        img.addEventListener('click', () => {
          seccionActual = planta;
          imagenActualIndex = index;
          mostrarImagen();
          modal.style.display = 'flex';
          document.body.style.overflow = 'hidden';
        });

        img.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            img.click();
          }
        });

        contenedor.appendChild(img);
      });
    });
  }

  // Mostrar la imagen actual en el modal
  function mostrarImagen() {
    const imgs = pisos[seccionActual];
    if (!imgs || imgs.length === 0) {
      cerrarModal();
      return;
    }
    if (imagenActualIndex < 0) imagenActualIndex = 0;
    if (imagenActualIndex >= imgs.length) imagenActualIndex = imgs.length - 1;

    const imgObj = imgs[imagenActualIndex];
    imagenAmpliada.src = imgObj.src;
    imagenAmpliada.alt = imgObj.alt;
    caption.textContent = `${imgObj.alt} (${imagenActualIndex + 1} de ${imgs.length})`;

    actualizarBotones();
  }

  // Actualiza el estado habilitado/deshabilitado de botones
  function actualizarBotones() {
    btnAnterior.disabled = imagenActualIndex <= 0;
    btnSiguiente.disabled = imagenActualIndex >= pisos[seccionActual].length -1;

    // Para plantas
    const idxPlanta = plantas.indexOf(seccionActual);
    btnPlantaAnterior.disabled = idxPlanta <= 0;
    btnPlantaSiguiente.disabled = idxPlanta >= plantas.length -1;
  }

  // Navegar entre imágenes dentro de la misma planta
  btnAnterior.addEventListener('click', () => {
    imagenActualIndex--;
    if (imagenActualIndex < 0) imagenActualIndex = 0;
    mostrarImagen();
  });

  btnSiguiente.addEventListener('click', () => {
    imagenActualIndex++;
    if (imagenActualIndex >= pisos[seccionActual].length) {
      imagenActualIndex = pisos[seccionActual].length -1;
    }
    mostrarImagen();
  });

  // Navegar entre plantas (reseteando la imagen a la primera)
  btnPlantaAnterior.addEventListener('click', () => {
    cambiarPlanta(-1);
  });
  btnPlantaSiguiente.addEventListener('click', () => {
    cambiarPlanta(1);
  });

  function cambiarPlanta(direccion) {
    let idxPlanta = plantas.indexOf(seccionActual);
    if (idxPlanta === -1) return;

    idxPlanta += direccion;

    if (idxPlanta < 0) idxPlanta = 0;
    if (idxPlanta >= plantas.length) idxPlanta = plantas.length -1;

    if (idxPlanta !== plantas.indexOf(seccionActual)) {
      seccionActual = plantas[idxPlanta];
      imagenActualIndex = 0;
      mostrarImagen();
    }
  }

  // Cerrar modal
  cerrarBtn.addEventListener('click', cerrarModal);
  function cerrarModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  // Cerrar modal con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      cerrarModal();
    }
  });

  // Cargar miniaturas al inicio
  cargarMiniaturas();

  const banner = document.getElementById('cookie-banner');
    const aceptarBtn = document.getElementById('aceptar-cookies');
    const rechazarBtn = document.getElementById('rechazar-cookies');

    const cookiesAceptadas = localStorage.getItem('cookies_aceptadas');

    if (cookiesAceptadas === 'true' || cookiesAceptadas === 'false') {
      banner.style.display = 'none';
    }

    aceptarBtn.addEventListener('click', function () {
      localStorage.setItem('cookies_aceptadas', 'true');
      banner.style.display = 'none';
      // Aquí puedes activar scripts de análisis si los usas (ej. Google Analytics)
    });

    rechazarBtn.addEventListener('click', function () {
      localStorage.setItem('cookies_aceptadas', 'false');
      banner.style.display = 'none';
      // Aquí podrías bloquear scripts si los estuvieras usando
    });
});
