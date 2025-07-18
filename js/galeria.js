const galeria = document.getElementById("galeria");

for (let i = 1; i <= 24; i++) {
  if (i === 17) continue; // Saltar casa17.jpg

  const img = document.createElement("img");
  img.src = `img/casa${i}.jpeg`;
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