class PisoRepository {
  constructor() {
    this.pisos = {
      'primer-piso': [
        { src: './img/casa24.jpeg', alt: 'Primera planta: comedor.' },
        { src: './img/casa18.jpeg', alt: 'Primera planta: lavadero / terraza' },
        { src: './img/casa19.jpeg', alt: 'Primera planta: lavadero / terraza' },
        { src: './img/casa20.jpeg', alt: 'Primera planta: vistas exterior' },
        { src: './img/casa21.jpeg', alt: 'Primera planta: comedor' },
        { src: './img/casa22.jpeg', alt: 'Primera planta: comedor' },
        { src: './img/casa23.jpeg', alt: 'Primera planta: comedor' },
        { src: './img/casa25.jpeg', alt: 'Primera planta: cocina' },
        { src: './img/casa27.jpeg', alt: 'Primera planta: cocina' },
        { src: './img/casa16.jpeg', alt: 'Primera planta: acceso segunda planta' }
      ],
      'segundo-piso': [
        { src: './img/casa8.jpeg', alt: 'Segunda planta: pasillo suite' },
        { src: './img/casa7.jpeg', alt: 'Segunda planta: guardarropia' },        
        { src: './img/casa11.jpeg', alt: 'Segunda planta: habitación' },
        { src: './img/casa12.jpeg', alt: 'Segunda planta: terraza habitación' },
        { src: './img/casa13.jpeg', alt: 'Segunda planta: baño habitación' },
        { src: './img/casa14.jpeg', alt: 'Segunda planta: baño habitación' },
        { src: './img/casa15.jpeg', alt: 'Segunda planta: baño habitación' },
        { src: './img/casa31.jpeg', alt: 'Segunda planta: acceso tercera planta' }
      ],
      'tercer-piso': [
        { src: './img/casa32.jpeg', alt: 'Tercera planta: habitación' },        
        { src: './img/casa3.jpeg', alt: 'Tercera planta: habitación' },
        { src: './img/casa4.jpeg', alt: 'Tercera planta: habitación' },
        { src: './img/casa5.jpeg', alt: 'Tercera planta: habitación' },
        { src: './img/casa6.jpeg', alt: 'Tercera planta: escaleras' },
        { src: './img/casa2.jpeg', alt: 'Tercera planta: terraza' },
        { src: './img/casa33.jpeg', alt: 'Tercera planta: terraza vistas mar' },
        { src: './img/casa29.jpeg', alt: 'Tercera planta: baño' },
        { src: './img/casa30.jpeg', alt: 'Tercera planta: baño' }
      ]
    };
  }

  getPlantas() {
    return Object.keys(this.pisos);
  }

  getImagenes(planta) {
    return this.pisos[planta] || [];
  }
}
