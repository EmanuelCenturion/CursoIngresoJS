function mostrar() {
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let tempCorporal;
	let contSoltero = 0;
	let contCasado = 0;
	let contViudo = 0;
	let contSoltera = 0;
	let contCasada = 0;
	let contViuda = 0;
	let nacMayorTemp;
	let mayorTemp;
	let solteroMayor;
	let terceraEdad = 0;
	let acumCasadas = 0;
	let promCasadas;
	let flagTemp = 0;


	do {
		nombre = prompt("Ingrese su nombre");
	} while (nombre == "");
	do {
		nacionalidad = prompt("Ingrese su nacionalidad");
	} while (nacionalidad == "");
	do {
		edad = parseInt(prompt("Ingrese su edad"));
	} while (edad < 0 || edad > 115);
	do {
		sexo = prompt("Ingrese su sexo 'f' o 'm'");
	} while (sexo != 'f' && sexo != 'm');
	do {
		estadoCivil = prompt("Ingrese su estado Civil");
	} while ((estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") && estadoCivil != "soltera" && estadoCivil != "casada" && estadoCivil != "viuda");
	do {
		tempCorporal = parseFloat(prompt("ingrese su temperatura"));
	} while (tempCorporal < 34 || tempCorporal > 41);

	switch (estadoCivil) {
		case "soltero":
			contSoltero++;
			break;
		case "casado":
			contCasado++;
			break;
		case "viudo":
			contViudo++;
			break;
		case "soltera":
			contSoltera++;
			break;
		case "casada":
			acumCasadas += edad;
			contCasada++;
			promCasadas = acumCasadas / contCasada;
			break;
		case "viuda":
			contViuda++;
			break;
	}

	if (tempCorporal > nacMayorTemp || flagTemp == 0) {
		nacMayorTemp = nacionalidad;
		mayorTemp = tempCorporal;
		flagTemp = 1;
	}
	if (edad > 17 && (estadoCivil == "soltero" || estadoCivil == "soltera")) {
		solteroMayor = contSoltero + contSoltera;
	}

	if (edad > 60 && tempCorporal > 38) {
		terceraEdad++;
	}

	document.write("A)La persona con mas temperatura es de: " + nacMayorTemp + " con " + mayorTemp + " °" + "<br>");
	if (solteroMayor == null) {
		document.write("B)No hay solteros mayores de 17 años " + "<br>");
	} else {
		document.write("B)La cantidad de solteros mayores de 17 es de: " + solteroMayor + "<br>");
	}
	document.write("C)Cantidad de mujeres solteras: " + contCasada + " la cantidad de viudas es: " + contViuda + "<br>");
	document.write("D)Cantidad de mayores de edad con mas de 38° es: " + terceraEdad + "<br>");
	if (contCasada == 0) {
		document.write("E)No hay mujeres casadas " + "<br>");
	} else {
		document.write("E)El promedio de edad de las mujeres casadas es de: " + promCasadas + "<br>");
	}

}
