function mostrar() {
	let destinoIngresado;
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
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = estadia - estadia * 0.10;
					break;
				case "Mar del plata":
					precioFinal = estadia - estadia * 0.20;
			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					precioFinal = estadia - estadia * 0.20;
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = estadia * 1.10;
					break;
				case "Mar del plata":
					precioFinal = estadia * 1.20;
			}
			break;
		case "Otoño":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precioFinal = estadia * 1.10;
					break;
				case "Cordoba":
					precioFinal = estadia;
			}
			break;
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precioFinal = estadia * 1.10;
					break;
				case "Cordoba":
					precioFinal = estadia;
			}
	}
	alert("Precio final: " + precioFinal);
}