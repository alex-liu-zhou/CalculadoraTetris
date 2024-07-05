let addElement = (value) => {
  document.getElementById("screen").value += value;
};

let clearScreen = () => {
  document.getElementById("screen").value = "";
};
let audioCalculate = new Audio("../style/Sounds/NextLevel.mp3");
let calculate = () => {
  let operation = document.getElementById("screen").value;

  document.getElementById("screen").value = realizarOperacion(operation);

  audioCalculate.play();
};

/*
5+2 ->  5  |  2  |  +
623/2 -> 623 | 2 | /
89-14 -> 89 | 14 | -
*/

//EL OPERADOR SIEMPRE es el caracter no numérico
//seguido de uno numérico
//isNaN() -> true o false

/*
for (let i = 0; i < operation.length; i++){
    if (isNaN(opation[i]) && isNaN(operation[i+1]))
}

*/

/*

OPERACIONES CORRECTAS
1+2

45-3

25/2

89*3

+45*+69

-3*5

+3-+2

-3+-2

5/-3

4--3

*/

/*
1) busco la posicion del operador
el primer simbolo no numerico seguido de uno numerico

isNaN()

2) dividir el string en 3 trozos
-32*+45

-32
*
+45


3) realizar la operacion y obtener el resultado que va a pintar
en la variable res

*/

/*
OPERACIONES INCORRECTAS -> E

-- NO HAY DECIMALES -> 5 / 2 ->  2.5  -> borro la pantalla

6

-9 

*9+3

-9/*9

3+5+9

/8

4-/3

-*5

*/
