function mostrar()
{
	let horaDelDia;
	horaDelDia =parseInt(document.getElementById("txtIdHora").value);
	if(horaDelDia>=0 && horaDelDia<24){
	switch(horaDelDia){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
		default:
			alert("ok");		
	}
	}
}