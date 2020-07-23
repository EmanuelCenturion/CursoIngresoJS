function mostrar()
{
	//tomo la edad  
	let vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	if(vEdad>=13 && vEdad<=17){
		alert("Es adolescente");
	}if(vEdad<13){
		alert("Es menor de edad");
	}if(vEdad>=18){
		alert("Es mayor de edad");
}
}//FIN DE LA FUNCIÓN