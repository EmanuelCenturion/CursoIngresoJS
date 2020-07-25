function mostrar()
{
	let mesDelAño;
	mesDelAño =document.getElementById("txtIdMes").value;
	switch(mesDelAño){
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":	
			alert("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":	
			alert("Abrigate que hace frio");
			break;
		default:	
			alert("Ya pasamos el frio, ahora calor!!!");					
	}
}