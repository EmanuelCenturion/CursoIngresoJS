/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;

function comenzar() {

    eleccionMaquina = Math.round(Math.random() * (3 - 1) + 1);

    console.log(eleccionMaquina);

}
function piedra() {
    if (eleccionMaquina == 1) {
        alert("Empato");
    } else if (eleccionMaquina == 2) {
        alert("Usted perdió");
    } else {
        alert("Usted ganó");
    }
}
function papel() {
    if (eleccionMaquina == 2) {
        alert("Empato");
    } else if (eleccionMaquina == 3) {
        alert("Usted perdió");
    } else {
        alert("Usted ganó");
    }
}
function tijera() {
    if (eleccionMaquina == 3) {
        alert("Empato");
    } else if (eleccionMaquina == 1) {
        alert("Usted perdió");
    } else {
        alert("Usted ganó");
    }
}