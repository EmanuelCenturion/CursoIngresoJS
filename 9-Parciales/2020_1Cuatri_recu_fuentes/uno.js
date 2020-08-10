
function mostrar() {


	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let precioJabon;
	let flagJabon = 0;
	let cantJabon;
	let fabriJabon;
	let contJabon = 0;
	let contBarbijo = 0;
	let contAlcohol = 0;
	let acumBarbijo = 0;
	let acumJabon = 0;
	let acumAlcohol = 0;
	let promCompra;


	for (let i = 0; i < 5; i++) {
		do {
			tipo = prompt("ingrese tipo de producto");
		} while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol");
		do {
			precio = parseFloat(prompt("ingrese precio de producto"));
		} while (precio < 100 || precio > 300);
		do {
			cantidad = parseInt(prompt("ingrese cantidad de productos"));
		} while (cantidad <= 0 || cantidad > 1000);
		do {
			marca = prompt("ingrese marca de producto");
		} while (marca == "");
		do {
			fabricante = prompt("ingrese fabricante de producto");
		} while (fabricante == "");

		switch (tipo) {
			case "barbijo":
				contBarbijo++;
				acumBarbijo += cantidad;
				break;
			case "jabon":
				if (precio > precioJabon || flagJabon == 0) {
					precioJabon = precio;
					cantJabon = cantidad;
					fabriJabon = fabricante;
					flagJabon = 1;
				}
				contJabon++;
				acumJabon += cantidad;
				break;
			case "alcohol":
				contAlcohol++;
				acumAlcohol += cantidad;
				break;

		}

	}

	if (acumAlcohol > acumBarbijo && acumAlcohol > acumJabon) {
		promCompra = acumAlcohol / contAlcohol;
	} else if (acumBarbijo > acumAlcohol && acumBarbijo > acumJabon) {
		promCompra = acumBarbijo / contBarbijo;
	} else {
		promCompra = acumJabon / contJabon;
	}

	document.write("A)Del jabon mas caro la cantidad es: " + cantJabon + " y el fabricante es : " + fabriJabon + "<br>");
	document.write("B)El promedio de compra del producto mas caro es: " + promCompra.toFixed(2) + "<br>");
	document.write("C)De barbijos se compranpron: " + contBarbijo + " unidades" + "<br>");



}
