//--------Ejercicio 1--------//
function Pregunta1() {
  arreglo = [5, 10, 25, 58, 12];
  maximo = 0;
  minimo = arreglo[0];
  for (var i = 0, len = arreglo.length; i < len; i++) {
    if (maximo < arreglo[i]) {
      maximo = arreglo[i];
    }
  }
  for (let i = 0; i < arreglo.length; i++) {
    if (minimo < arreglo[i++]) {
      minimo = arreglo[i++];
    } else if (minimo > arreglo[i++]) {
      arreglo[i++] = minimo;
    } else {
      document.getElementById("menor").innerHTML = minimo;
    }
  }
  arreglo_o = arreglo.sort();
  tercero = arreglo_o[1];
  console.log(arreglo_o);
  document.getElementById("mayor").innerHTML = maximo;
  document.getElementById("tercero").innerHTML = tercero;
}

//--------Ejercicio 2--------//
function ejercicio2() {
  const numero = prompt("Ingrese un número de 4 dígitos");

  if (!parseInt(numero)) {
    window.alert("Ingrese solo números");
    return false;
  }
  if (numero.length < 4 || numero.length > 4) {
    window.alert("Ingrese solo 4 dígitos");
    return false;
  }

  const listado = numero.split("");

  let resultado = 0;
  listado.forEach((valor) => {
    const entero = parseInt(valor);
    if (entero % 2 != 0) {
      resultado += entero;
    }
  });

  document.getElementById("ingreso2").innerHTML = `Ingreso: ${numero}`;
  document.getElementById("ejercicio2").innerHTML = `Resultado: ${resultado}`;
}

//--------Ejercicio 3--------//
function convertir() {
  soles = document.getElementById("soles").value;

  dolares = soles / 4;
  euros = soles / 4.1;

  document.getElementById("dolares").innerHTML = dolares;
  document.getElementById("euros").innerHTML = euros;
}
