// Muestra el año actual
document.getElementById("year").textContent = new Date().getFullYear();

// Muestra la fecha de última modificación
document.getElementById("lastModified").textContent = document.lastModified;

// Menú hamburguesa
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {
    hamburger.textContent = "✖";
  } else {
    hamburger.textContent = "☰";
  }
});
