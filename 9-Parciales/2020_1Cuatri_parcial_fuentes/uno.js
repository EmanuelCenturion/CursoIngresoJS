
function mostrar() {
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let contAlcohol = 0;
	let acumAlcohol = 0;
	let flagAlcohol = "sin precio";
	let precioAlcohol;
	let fabrAlcohol;
	let acumJabon = 0;
	let contJabon = 0;
	let contBarbijo = 0;
	let acumBarbijo = 0;
	let promedioMayor;
	let cantAlcoholBarato;


	for (let i = 0; i < 5; i++) {
		do {
			tipo = prompt("ingrese tipo de deproducto");
		} while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol");

		do {
			precio = parseFloat(prompt("ingrese precio de producto"));
		} while (precio < 100 || precio > 300 || isNaN(precio));

		do {
			cantidad = parseInt(prompt("ingrese cantidad de productos"));
		} while (cantidad <= 0 || cantidad > 1000 || isNaN(cantidad));

		do {
			marca = prompt("ingrese marca de producto");
		} while (marca == "");
		do {
			fabricante = prompt("ingrese fabricante de producto");
		} while (fabricante == "");

		switch (tipo) {
			case "alcohol":
				if (precio < precioAlcohol || flagAlcohol == "sin precio") {
					precioAlcohol = precio;
					fabrAlcohol = fabricante;
					flagAlcohol = "primer precio";
					cantAlcoholBarato = cantidad;
				}
				acumAlcohol += cantidad;
				contAlcohol++;
				break;
			case "jabon":
				acumJabon += cantidad;
				contJabon++;
				break;
			case "barbijo":
				acumBarbijo += cantidad;
				contBarbijo++;
				break;
		}

	}

	if (acumAlcohol > acumBarbijo && acumAlcohol > acumJabon) {
		promedioMayor = acumAlcohol / contAlcohol;
	} else if (acumJabon > acumAlcohol && acumJabon > acumBarbijo) {
		promedioMayor = acumJabon / contJabon;
	} else {
		promedioMayor = acumBarbijo / contBarbijo;
	}

	document.write("A)La cantidad de alcohol mas barato es de: " + cantAlcoholBarato + " y el fabricante es: " + fabrAlcohol + "<br>");
	document.write("B)El promedio de compra por mas unidades es de: " + promedioMayor + "<br>");
	document.write("C)la cantidad unidades de jabon es de: " + acumJabon);

}
