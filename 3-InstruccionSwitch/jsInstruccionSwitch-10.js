function mostrar()
{
	let destinoIngresado
	let estacionDelAño;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	estacionDelAño = document.getElementById("txtIdEstacion").value;

	switch (estacionDelAño) {
		case "Invierno":
		case "Primavera":	
			switch (destinoIngresado) {
				case "Bariloche":
					alert("Se viaja");
					break;
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					alert("No se viaja");
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Mar del plata":
				case "Cataratas":	
					alert("Se viaja");
					break;
				case "Cordoba":
				case "Bariloche":
					alert("No se viaja");
					break;
			}
			break;
		case "Otoño":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					alert("Se viaja");
					break;
			}
			break;
	}
}