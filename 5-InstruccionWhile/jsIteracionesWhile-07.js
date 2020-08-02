/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let num;
	let contador = 0;
	let acumulador = 0;
	let respuesta = 's';

	while (respuesta == 's') {
		num = parseInt(prompt("ingrese el un numero"));
		acumulador += num;
		contador++;
		respuesta = prompt("Desea ingresar otro número? s/n");
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = (acumulador/contador).toFixed(2);
	/* 
	
		var contador;
		var acumulador;
		var respuesta;
		contador=0;
		acumulador=0;
		respuesta='si';
	
	
		txtIdSuma.value=acumulador;
		txtIdPromedio.value=acumulador/contador; */

}