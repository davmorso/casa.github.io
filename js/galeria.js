const galeria = document.getElementById("galeria");

function crearTitulo(titulo) {
  const h1 = document.createElement("h1");
  h1.textContent = titulo;
  galeria.appendChild(h1);
}

function agregarImagen(numero) {
  if (numero === 10 || numero === 17) return; // Omitir casa10.jpeg y casa17.jpeg

  const img = document.createElement("img");
  img.src = `img/casa${numero}.jpeg`;
  img.alt = `Casa ${numero}`;
  img.addEventListener("click", () => mostrarImagen(img));
  galeria.appendChild(img);
}

// PRIMER PISO: 18–24, 16, 25–27
crearTitulo("Primer Piso");
[18, 19, 20, 21, 22, 23, 24, 16, 25, 26, 27].forEach(agregarImagen);

// SEGUNDO PISO: 6–15 (sin la 10)
crearTitulo("Segundo Piso");
for (let i = 6; i <= 15; i++) {
  agregarImagen(i);
}

// TERCER PISO: 1–5
crearTitulo("Tercer Piso");
for (let i = 1; i <= 5; i++) {
  agregarImagen(i);
}

// Modal
const modal = document.getElementById("modal");
const imagenAmpliada = document.getElementById("imagen-ampliada");
const caption = document.getElementById("caption");
const cerrar = document.getElementById("cerrar");

function mostrarImagen(img) {
  modal.style.display = "block";
  imagenAmpliada.src = img.src;
  caption.textContent = img.alt;
}

cerrar.onclick = () => {
  modal.style.display = "none";
};