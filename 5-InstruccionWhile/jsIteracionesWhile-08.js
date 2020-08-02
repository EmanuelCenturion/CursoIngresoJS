/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero=0;
	let positivo=0;
	let negativo=1;
	let respuesta='s';

	while (respuesta == 's') {
		numero = parseInt(prompt("ingrese el un numero"));
		if(numero>0){
			positivo += numero;
		}else{
			negativo *= numero;
		}
		respuesta = prompt("Desea ingresar otro número? s/n");
	}

    document.getElementById("txtIdSuma").value=positivo;
	document.getElementById("txtIdProducto").value=negativo;

}//FIN DE LA FUNCIÓN