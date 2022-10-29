function condicionalDoble() {
  var a = parseInt(document.getElementById("txtn1").value);
  var b = parseInt(document.getElementById("txtn2").value);
  var c = parseInt(document.getElementById("txtn3").value);
  var d = parseInt(document.getElementById("txtn4").value);
  var e = parseInt(document.getElementById("txtn5").value);
  if (a > b) {
    if (a > c) {
      if (a > d) {
        if (a > e) ma = a;
        else ma = e;
      } else ma = d;
    } else ma = c;
  } else {
    if (b > c) {
      if (b > d) {
        if (b > e) ma = b;
        else ma = e;
      } else ma = d;
    } else ma = c;
  }

  if (a < b) {
    if (a < c) {
      if (a < d) {
        if (a < e) me = a;
        else me = e;
      } else me = d;
    } else me = c;
  } else {
    if (b < c) {
      if (b < d) {
        if (b < e) me = b;
        else me = e;
      } else me = d;
    } else me = c;
  }

  document.getElementById("txtRp").innerHTML = `Mayor: ${ma} Menor: ${me}`;
}

function limpiar() {
  
}
