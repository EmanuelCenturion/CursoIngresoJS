/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numero;
	let nMaximo;
	let nMinimo;
	let respuesta  ='s';

	numero = parseInt(prompt("ingrese un Número"));
	nMaximo = numero;
	nMinimo = numero; 
	respuesta=prompt("desea continuar? s/n");

	while(respuesta =='s')
	{
		numero = parseInt(prompt("ingrese un Número"));
		
		if(numero<nMinimo){
			nMinimo = numero;
		}else if(numero>nMaximo){
			nMaximo = numero;
		}
		
		respuesta=prompt("desea continuar? s/n");
	}
	document.getElementById("txtIdMaximo").value=nMaximo;
	document.getElementById("txtIdMinimo").value=nMinimo;
}