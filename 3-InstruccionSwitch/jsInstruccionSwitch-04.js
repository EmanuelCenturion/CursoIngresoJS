function mostrar() {
	let mesDelAño;
	mesDelAño = document.getElementById("txtIdMes").value;
	switch (mesDelAño) {
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias");
			break;
		default:
			alert("Este mes tiene 31 dias");

	}
}