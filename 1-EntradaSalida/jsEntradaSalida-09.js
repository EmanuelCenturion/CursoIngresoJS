/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var vSueldo;
	var vAumento;
	vSueldo = parseInt(document.getElementById("txtIdSueldo").value);
	vAumento = vSueldo + vSueldo*0.10;
	document.getElementById("txtIdResultado").value = vAumento;
}
