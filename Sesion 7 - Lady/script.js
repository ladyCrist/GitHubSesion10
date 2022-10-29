/*
EJERCICIO 1
Invertir los digitos de un numero de 3 digitos
*/
const input_1 = document.getElementById("input_1");
const button_1 = document.getElementById("button_1");
const print_1 = document.getElementById("print_1");

function invertirNumero(numero) {
  let invertido = 0;

  while (numero !== 0) {
    invertido = 10 * invertido + (numero % 10);
    numero = Math.floor(numero / 10);
  }

  return `El numero invertido es: ${invertido}`;
}

button_1.addEventListener("click", function () {
  print_1.innerHTML = invertirNumero(input_1.value);
});

/*
EJERCICIO 2
Encontrar el mayor numero de 3 números diferentes
*/
const input_2_1 = document.getElementById("input_2_1");
const input_2_2 = document.getElementById("input_2_2");
const input_2_3 = document.getElementById("input_2_3");
const button_2 = document.getElementById("button_2");
const print_2 = document.getElementById("print_2");

function calcularNumeroMayor(n1, n2, n3) {
  return `El numero mayor es: ${Math.max(n1, n2, n3)}`;
}

button_2.addEventListener("click", function () {
  print_2.innerHTML = calcularNumeroMayor(
    parseInt(input_2_1.value),
    parseInt(input_2_2.value),
    parseInt(input_2_3.value)
  );
});

/*
EJERCICIO 3
Encontrar el segundo menor de 3 numeros diferentes
*/
const input_3_1 = document.getElementById("input_3_1");
const input_3_2 = document.getElementById("input_3_2");
const input_3_3 = document.getElementById("input_3_3");
const button_3 = document.getElementById("button_3");
const print_3 = document.getElementById("print_3");

function encontrarSegundoMenor(n1, n2, n3) {
  let max = Math.max(n1, n2, n3);
  let min = Math.min(n1, n2, n3);

  if (n1 !== n2 && n2 !== n3 && n3 !== n1) {
    if (n1 !== max && n1 !== min) {
      return `El segundo menor es: ${n1}`;
    }
    if (n2 !== max && n2 !== min) {
      return `El segundo menor es: ${n2}`;
    }
    if (n3 !== max && n3 !== min) {
      return `El segundo menor es: ${n3}`;
    }
  } else {
    return "No existe segundo menor";
  }
}

button_3.addEventListener("click", function () {
  print_3.innerHTML = encontrarSegundoMenor(
    parseInt(input_3_1.value),
    parseInt(input_3_2.value),
    parseInt(input_3_3.value)
  );
});

/*
EJERCICIO 4
Se tiene una cantidad de grados enormes, convertir a horas, minutos y segundos
*/
const input_4 = document.getElementById("input_4");
const button_4 = document.getElementById("button_4");
const print_4 = document.getElementById("print_4");

function convertir(a) {
  g = Math.floor(a);
  b = (a - g) * 60;
  m = Math.floor(b);
  c = (b - m) * 60;
  s = Math.round(c);

  return `Grados: ${g}°, Minutos: ${m}min, Segundos: ${s}seg.`;
}

button_4.addEventListener("click", function () {
  print_4.innerHTML = convertir(input_4.value);
});
