let button = document.getElementById("button");

function calcularCondicionalDoble() {
  let a = parseInt(document.getElementById("numero1").value);
  let b = parseInt(document.getElementById("numero2").value);
  let c = parseInt(document.getElementById("numero3").value);
  let d = parseInt(document.getElementById("numero4").value);
  let e = parseInt(document.getElementById("numero5").value);

  const mayorNumero = (a, b, c, d, e) => {
    let ma;
    if (a > b) {
      if (a > c) {
        if (a > d) {
          if (a > e) {
            ma = a;
          } else {
            ma = e;
          }
        }
      } else {
        if (c > d) {
          if (c > e) {
            ma = c;
          } else {
            ma = e;
          }
        } else {
          if (d > e) {
            ma = d;
          } else {
            ma = e;
          }
        }
      }
    } else {
      if (b > c) {
        if (b > d) {
          if (b > e) {
            ma = b;
          } else {
            ma = e;
          }
        } else {
          if (d > e) {
            ma = d;
          } else {
            ma = e;
          }
        }
      } else {
        if (c > d) {
          if (c > e) {
            ma = c;
          } else {
            ma = e;
          }
        } else {
          if (d > e) {
            ma = d;
          } else {
            ma = e;
          }
        }
      }
    }
    return ma;
  };
  const menorNumero = (a, b, c, d, e) => {
    let ma;
    if (a < b) {
      if (a < c) {
        if (a < d) {
          if (a < e) {
            ma = a;
          } else {
            ma = e;
          }
        }
      } else {
        if (c < d) {
          if (c < e) {
            ma = c;
          } else {
            ma = e;
          }
        } else {
          if (d < e) {
            ma = d;
          } else {
            ma = e;
          }
        }
      }
    } else {
      if (b < c) {
        if (b < d) {
          if (b < e) {
            ma = b;
          } else {
            ma = e;
          }
        } else {
          if (d < e) {
            ma = d;
          } else {
            ma = e;
          }
        }
      } else {
        if (c < d) {
          if (c < e) {
            ma = c;
          } else {
            ma = e;
          }
        } else {
          if (d < e) {
            ma = d;
          } else {
            ma = e;
          }
        }
      }
    }
    return ma;
  };

  document.getElementById("resultado").innerHTML = `
  El mayor número es ${mayorNumero(a, b, c, d, e)} </br>
  El menor número es ${menorNumero(a, b, c, d, e)}
  `;
}

button.addEventListener("click", () => {
  console.log("nyaaaaaa");
  calcularCondicionalDoble();
});
