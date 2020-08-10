/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto;
let contadorIntentos = 0;
let numRandom;

function comenzar() {

  numeroSecreto = parseInt(document.getElementById("txtIdNumero").value);
  numRandom = Math.round(Math.random() * (100 - 1) + 1);
  console.log(numRandom);

}

function verificar() {
  contadorIntentos++;
  if (numRandom == numeroSecreto) {
    document.getElementById("txtIdIntentos").value = "Usted es un ganador y tan solo en " + contadorIntentos + " intentos";
  } else if (numRandom < numeroSecreto) {
    document.getElementById("txtIdIntentos").value = "le falta para llegar al numero secreto";
  } else {
    document.getElementById("txtIdIntentos").value = "se paso del numero secreto";
  }
}