function Serie4() {
  N = 8;
  for (x = 3, i = 1; i <= N; i++, x++) {
    console.log(x);
    if (x === 5) x = 2;
  }
}
function Serie3() {
  N = 8;
  for (x = 1, i = 1, s = 1; i <= N; i++, x++) {
    console.log(x);
    if (x === 2) {
      x = 0;
      s *= -1;
    }
  }
}
function Serie2() {
  N = 8;
  for (x = -1, i = 1; i <= N; i++, x *= -1) {
    console.log(x);
  }
}

function Serie1() {
  N = 8;
  for (x = 1, i = 1; i <= N; i++, x--) {
    console.log(x);
    if (x == 0) {
      x = 2;
    }
  }
}
