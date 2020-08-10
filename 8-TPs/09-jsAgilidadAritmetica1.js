/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let respuesta;
let numUno;
let operador;
let numDos;
let operacion;
let resultado;


function comenzar() {

    numUno = Math.round(Math.random() * (10 - 1) + 1);
    operador = Math.round(Math.random() * (4 - 1) + 1);
    numDos = Math.round(Math.random() * (10 - 1) + 1);

    switch (operador) {
        case 1:
            operacion = "suma";
            resultado = numUno + numDos;
            break;
        case 2:
            operacion = "resta";
            resultado = numUno - numDos;
            break;
        case 3:
            operacion = "multiplicación";
            resultado = numUno * numDos;
            break;
        case 4:
            operacion = "división";
            resultado = numUno / numDos;
            break;
    }

    document.getElementById("txtIdPrimerNumero").value = parseInt(numUno);
    document.getElementById("txtIdOperador").value = operacion;
    document.getElementById("txtIdSegundoNumero").value = parseInt(numDos);

}
function Responder() {

    respuesta = parseFloat(document.getElementById("txtIdRespuesta").value);

    if (resultado == respuesta) {
        alert("Muy bien acertaste!!");
    } else {
        alert("Estuviste cerca! sigue intentando!");
    }

}
