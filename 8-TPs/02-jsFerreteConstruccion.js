/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let cantAlambre;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    cantAlambre = ((largo + ancho)*2)*3;
    alert("Cantidad de alambre necesaria: " + cantAlambre.toFixed(2));
}
function Circulo () 
{
    let radio;
    let cantAlambre;

    radio = parseFloat(document.getElementById("txtIdRadio").value);
    cantAlambre = 2*Math.PI*radio;
    alert("Cantidad de alambre necesaria: " + cantAlambre.toFixed(2));
}
function Materiales () 
{
    let largo;
    let ancho;
    let cemento;
    let cal;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    cemento = (largo * ancho)*2;
    cal = (largo * ancho)*3;
    alert("Se necesitan: "+cemento.toFixed(0)+" bolsas de cemento y "+cal.toFixed(0)+" bolsas de cal");
}