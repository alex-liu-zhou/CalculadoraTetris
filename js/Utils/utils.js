/* Funcion obtiene primer valor */

function obtenerPrimerValor(operation) {
  let primerValor = null;
  let parar = -1;
  for (let i = 0; i < operation.length; i++) {
    if (
      isNaN(operation[i]) == false &&
      isNaN(operation[i + 1]) == true &&
      parar == -1
    ) {
      primerValor = parseInt(operation.slice(0, [i + 1]));
      parar = 0;
    }
  }
  return primerValor;
}

/* Funcion obtiene segundo valor */

function obtenerSegundoValor(operation) {
  let segundoValor = null;
  let parar = -1;
  for (let i = 0; i < operation.length; i++) {
    if (
      isNaN(operation[i]) == false &&
      isNaN(operation[i + 1]) == true &&
      parar == -1
    ) {
      segundoValor = parseInt(operation.slice(i + 2));
      parar = 0;
    }
  }
  return segundoValor;
}

/* Funcion obtiene el simbolo */

function obtenerSimbolo(operation) {
  let simbolo = null;
  let parar = -1;
  for (let i = 0; i < operation.length; i++) {
    if (
      isNaN(operation[i]) == false &&
      isNaN(operation[i + 1]) == true &&
      parar == -1
    ) {
      simbolo = operation[i + 1];
      parar = 0;
    }
  }
  return simbolo;
}

/* Funcion que realiza la operacion */
function realizarOperacion(operation) {
  let valor1 = obtenerPrimerValor(operation);
  let valor2 = obtenerSegundoValor(operation);
  let simbolo = obtenerSimbolo(operation);
  let res = "GAME OVER";
  if (isNaN(valor1) == false && isNaN(valor2) == false) {
    switch (simbolo) {
      case "+":
        res = valor1 + valor2;
        break;
      case "-":
        res = valor1 - valor2;
        break;
      case "X":
        res = valor1 * valor2;
        break;
      case "/":
        if (valor2 != 0) {
          res = valor1 / valor2;
        } else {
          res = "Error: División por 0";
        }
        if (res % 1 != 0) {
          res = "";
        }
        break;
    }
  }
  return res;
}
