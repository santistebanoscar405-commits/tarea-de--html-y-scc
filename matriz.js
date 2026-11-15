const celdas = document.querySelectorAll("miMatriz td");

for (let i = 0; i < celdas.length; i) {
  celdas[i].addEventListener("click", function() {
    this.style.backgrounColor = "lightblue";
  });
}