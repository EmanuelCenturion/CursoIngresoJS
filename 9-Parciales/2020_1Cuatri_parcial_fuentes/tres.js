function mostrar() {

	let nombre;
	let edad;
	let sexo;
	let estadocivil;
	let tempCorporal;
	let mayorTemperatura = 35;
	let nombreMastemp;
	let mayoresViudos = 0;
	let promEdadSolteros;
	let solteros = 0;
	let viudos = 0;
	let casados = 0;
	let terceraEdad = 60;
	let contTerceraEdad = 0;

	nombre = prompt("ingrese su nombre");
	edad = parseInt(prompt("ingrese su edad"));
	do {
		sexo = prompt("ingrese su sexo: 'f' o 'm'");
	} while (sexo != 'f' && sexo != 'm');
	do {
		estadocivil = prompt("ingrese su estado civil (soltero o casado o viudo)");
	} while (estadocivil != "soltero" && estadocivil != "casado" && estadocivil != "viudo");
	tempCorporal = parseInt(prompt("ingrese su temperatura corporal"));

	if (tempCorporal > mayorTemperatura) {
		nombreMastemp = nombre;
		if (nombreMastemp == null) {
			nombreMastemp = "no se ingreso temperatura";
		}
	}
	if (edad > terceraEdad && tempCorporal > 38) {
		contTerceraEdad++;
	}
	switch (estadocivil) {
		case "soltero":
			if (sexo == 'm') {
				solteros++;
			}
			break;
		case "casado":
			casados++;
			break
		case "viudo":
			if (sexo == 'm') {
				viudos++;
			}
			if (edad >= 18) {
				mayoresViudos++;
			}
			break;
	}
	if (solteros == 0) {
		promEdadSolteros = "no hay hombres solteros";
	} else {
		promEdadSolteros = edad / solteros;
	}

	document.write("A)La persona con mas termperatura es: " + nombreMastemp + "<br>");
	document.write("B)Mayores de edad viudos: " + mayoresViudos + "<br>");
	if (solteros != 0) {
		document.write("C)cantidad de hombres solteros: " + solteros + "<br>");
	}
	if (viudos != 0) {
		document.write("C)cantidad de hombres solteros: " + viudos + "<br>");
	}
	document.write("D)personas de la tercera edad con mas de 38 de temperatura: " + contTerceraEdad + "<br>");
	document.write("E)Promedio de edad de hombres solteros: " + promEdadSolteros);


}