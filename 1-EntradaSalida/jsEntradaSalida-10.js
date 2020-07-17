/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var vImporte;
	var vDescuento;
	vImporte = document.getElementById("txtIdImporte").value;
	vImporte = parseInt(vImporte);
	vDescuento = vImporte - (vImporte*0.25);
	document.getElementById("txtIdResultado").value = vDescuento;
}
