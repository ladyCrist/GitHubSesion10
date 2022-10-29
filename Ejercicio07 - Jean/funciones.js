function Variables() {
  var a = 5;
  let x = 10;
  var a = "10";
  //let x="20";
  //const a1=20;
  const a1 = "20";
  document.getElementById("Var1").innerHTML = a;
  document.getElementById("Let1").innerHTML = x;
  document.getElementById("Cons1").innerHTML = a1;
  a1 = 200;
  x = 200;
}

function Variables2() {
  var a = 5;
  var x = 10;
  var a = "10";
  //let x="20";
  //const a1=20;
  const a1 = "20";
  document.getElementById("Var1").innerHTML = a;
  document.getElementById("Let1").innerHTML = x;
  document.getElementById("Cons1").innerHTML = a1;
}

function ValoresB() {
  var a, b, c;
  a = 10;
  b = 200;
  c = a > b;
  document.getElementById("Var1").innerHTML = c;
  c = a + b;
  document.getElementById("Let1").innerHTML = c;
}

function Prueba4() {
  const sitE = ["Especial", "Regular", "Excelente"];
  sitE[0] = "EspecialX";
  sitE.push("No especificado");
  document.getElementById("Var1").innerHTML = sitE[0];
  document.getElementById("Let1").innerHTML = sitE[1];
  document.getElementById("Cons1").innerHTML = sitE[3];
}
