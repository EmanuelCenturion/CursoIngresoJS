function mostrar()
{
	let contador=0;
	let acumulador=0;
	let numero;
	let promedio=0;
	do{
	numero = parseFloat(prompt("ingrese el un numero"));
	acumulador += numero;
	contador++;
	}while(contador<5);
	promedio = acumulador/contador;
	document.getElementById("txtIdSuma").value=acumulador.toFixed(2);
	document.getElementById("txtIdPromedio").value=promedio.toFixed(2);
}