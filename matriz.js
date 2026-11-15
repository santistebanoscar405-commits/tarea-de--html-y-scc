const celdas = document.querySelectorAll("miMatriz td");

// Recorremos la matriz con un ciclo FOR
for (let i = 0; i < celdas.length; i++) {
  celdas[i].addEventListener("click", function() {
    this.style.backgroundColor = "lightblue";
  });
}
