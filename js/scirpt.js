flag = 1;

function f1() {
  alert("Makasih ya udah maafin aku!");
}

function f() {
  if (flag == 1) {
    Bn.style.top = 525;

    Bn.style.left = 300;

    flag = 2;
  } else if (flag == 2) {
    Bn.style.top = 525;

    Bn.style.left = 50;

    flag = 3;
  } else if (flag == 3) {
    Bn.style.top = 525;

    Bn.style.left = 200;

    flag = 1;
  }
}
