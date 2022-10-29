//    --------Ejercicio 4--------//
const printResultado = document.getElementById("resultado");
const numeroInput = document.getElementById("numero");
const calcularBtn = document.getElementById("calcular");

function sumaDigitos(numero) {
  var suma = 0;
  while (numero > 0) {
    var digito = numero % 10;
    if (digito % 2 !== 0 && !esPrimo(digito)) {
      suma += digito;
    }
    numero = Math.floor(numero / 10);
  }
  return suma;
}
function esPrimo(numero) {
  for (var i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}
calcularBtn.addEventListener("click", () => {
  printResultado.innerHTML = `El resultado de la suma es ${sumaDigitos(
    numeroInput.value
  )}.`;
});
