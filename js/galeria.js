document.addEventListener('DOMContentLoaded', () => {
  const pisos = {
    'primer-piso': [
      { src: 'casa18.jpeg', alt: 'Primera planta: lavadero / terraza' },
      { src: 'casa19.jpeg', alt: 'Primera planta: lavadero / terraza' },
      { src: 'casa20.jpeg', alt: 'Primera planta: vistas exterior' },
      { src: 'casa21.jpeg', alt: 'Primera planta: comedor' },
      { src: 'casa22.jpeg', alt: 'Primera planta: comedor' },
      { src: 'casa23.jpeg', alt: 'Primera planta: comedor' },
      { src: 'casa25.jpeg', alt: 'Primera planta: cocina' },
      { src: 'casa27.jpeg', alt: 'Primera planta: cocina' },
      { src: 'casa16.jpeg', alt: 'Primera planta: acceso segunda planta' },
      { src: 'casa24.jpeg', alt: 'Primera planta: comedor.' }
    ],
    'segundo-piso': [
      { src: 'casa7.jpeg', alt: 'Segunda planta: guardarropia' },
      { src: 'casa8.jpeg', alt: 'Segunda planta: pasillo suite' },
      { src: 'casa11.jpeg', alt: 'Segunda planta: habitación' },
      { src: 'casa12.jpeg', alt: 'Segunda planta: terraza habitación' },
      { src: 'casa13.jpeg', alt: 'Segunda planta: lavabo suite' },
      { src: 'casa14.jpeg', alt: 'Segunda planta: lavabo suite' },
      { src: 'casa15.jpeg', alt: 'Segunda planta: lavabo suite' },
      { src: 'casa6.jpeg', alt: 'Segunda planta: acceso tercera planta' }
    ],
    'tercer-piso': [
      { src: 'casa1.jpeg', alt: 'Tercera planta: pasillo suite' },
      { src: 'casa2.jpeg', alt: 'Tercera planta: terraza suite 2' },
      { src: 'casa3.jpeg', alt: 'Tercera planta: suite 2' },
      { src: 'casa4.jpeg', alt: 'Tercera planta: habitación' },
      { src: 'casa5.jpeg', alt: 'Tercera planta: habitación' },
      { src: 'casa28.jpeg', alt: 'Tercera planta: despacho suite' }
    ]
  };

  const basePath = './img/';

  // Cargar imágenes
  Object.entries(pisos).forEach(([seccionId, imagenes]) => {
    const contenedor = document.querySelector(`#${seccionId} .imagenes`);
    if (!contenedor) return;
    imagenes.forEach(({ src, alt }) => {
      const img = document.createElement('img');
      img.src = basePath + src;
      img.alt = alt;
      img.loading = 'lazy';
      img.style.cursor = 'pointer';
      contenedor.appendChild(img);
    });
  });

  // Modal
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

  // Banner de Cookies
  const banner = document.getElementById('cookie-banner');
  const aceptar = document.getElementById('aceptar-cookies');
  const rechazar = document.getElementById('rechazar-cookies');

  const consentimiento = localStorage.getItem('cookies');

  if (consentimiento === 'aceptadas') {
    cargarAnalytics();
    banner.style.display = 'none';
  } else if (consentimiento === 'rechazadas') {
    banner.style.display = 'none';
  } else {
    banner.style.display = 'flex';
  }

  aceptar?.addEventListener('click', () => {
    localStorage.setItem('cookies', 'aceptadas');
    cargarAnalytics();
    banner.style.display = 'none';
  });

  rechazar?.addEventListener('click', () => {
    localStorage.setItem('cookies', 'rechazadas');
    banner.style.display = 'none';
  });

  function cargarAnalytics() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LTP4SJWFBR'; // ← Reemplaza por tu ID real
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-LTP4SJWFBR', { anonymize_ip: true }); // ← Reemplaza también aquí
  }
});
