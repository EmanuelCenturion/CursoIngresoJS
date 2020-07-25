function mostrar()
{
	let destinoIngresado 
	destinoIngresado =document.getElementById("txtIdDestino").value;
	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":	
			alert("En este destino hace FRIO");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("En este destino hace CALOR");
			break;			
	}
}