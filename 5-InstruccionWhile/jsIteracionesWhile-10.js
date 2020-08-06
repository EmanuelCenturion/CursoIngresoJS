/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta = 's';
	let numero;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let negativos = 0;
	let positivos = 0;
	let esCero = 0;
	let pares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	
	while(respuesta=='s'){
		numero = parseInt(prompt("ingrese el un numero"));
		if(numero == 0){
			esCero++;
		}else if(numero>0){
			sumaPositivos += numero;
			positivos++;
		}else{
			negativo = numero;	
			sumaNegativos += numero;
			negativos++;
		}
		if(numero%2==0){
			pares++;
		}
		respuesta=prompt("desea continuar? s/n");
	}

	if(positivos == 0){
		promedioPositivos= "no se puede dividir por 0";
	}else{
		promedioPositivos = sumaPositivos/positivos;
	}
	if(negativos == 0){
		promedioNegativos = "no se puede dividir por 0";
	}else{
		promedioNegativos = sumaNegativos/negativos;
	}

	//promedioNegativos = sumaNegativos/negativos;
	//promedioPositivos = sumaPositivos/positivos;
	diferencia = (sumaPositivos + (sumaNegativos));

	document.write("1.la suma de negativos es :"+sumaNegativos+"<br>");
	document.write("2.la suma de positivos es :"+sumaPositivos+"<br>");
	document.write("3.la cantidad de negativos es :"+negativos+"<br>");
	document.write("4.la cantidad de positivos es :"+positivos+"<br>");
	document.write("5.Cantidad de ceros :"+esCero+"<br>");
	document.write("6.Cantidad de numero pares :"+pares+"<br>");
	document.write("7.el promedio de positivos es :"+promedioNegativos.toFixed(2)+"<br>");
	document.write("8.el promedio de negativos es :"+promedioPositivos.toFixed(2)+"<br>");
	document.write("9.la diferencia es :"+diferencia+"<br>");
}