/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	do{
		numero = prompt("ingrese un número entre 0 y 9.");
	}	
	while(numero<0 || numero>9);	
	document.getElementById("txtIdNumero").value=numero;
}