const galeria = document.getElementById("galeria");

// Cargar 24 imágenes llamadas casa1.jpg a casa24.jpg desde la carpeta img/
for (let i = 1; i <= 24; i++) {
  const img = document.createElement("img");
  img.src = `img/casa${i}.jpg`;
  img.alt = `Casa ${i}`;
  img.addEventListener("click", () => mostrarImagen(img));
  galeria.appendChild(img);
}

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