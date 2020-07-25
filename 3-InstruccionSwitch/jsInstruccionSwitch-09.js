function mostrar() {
	let destinoIngresado
	let estacionDelAño;
	let estadia = 15000;
	let precioFinal;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	estacionDelAño = document.getElementById("txtIdEstacion").value;

	switch (estacionDelAño) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					precioFinal = estadia * 1.20;
					alert("Precio final: " + precioFinal);
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = estadia - estadia * 0.10;
					alert("Precio final: " + precioFinal);
					break;
				case "Mar del plata":
					precioFinal = estadia - estadia * 0.20;
					alert("Precio final: " + precioFinal);
			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					precioFinal = estadia - estadia * 0.20;
					alert("Precio final: " + precioFinal);
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = estadia * 1.10;
					alert("Precio final: " + precioFinal);
					break;
				case "Mar del plata":
					precioFinal = estadia * 1.20;
					alert("Precio final: " + precioFinal);
			}
			break;
		case "Otoño":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precioFinal = estadia * 1.10;
					alert("Precio final: " + precioFinal);
					break;
				case "Cordoba":
					precioFinal = estadia;
					alert("Precio final: " + precioFinal);
			}
			break;
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precioFinal = estadia * 1.10;
					alert("Precio final: " + precioFinal);
					break;
				case "Cordoba":
					precioFinal = estadia;
					alert("Precio final: " + precioFinal);
			}
	}
}