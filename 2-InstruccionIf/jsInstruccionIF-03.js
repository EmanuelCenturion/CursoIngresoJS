function mostrar()
{
	//tomo la edad  
	let vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);  
	if(vEdad>=18){
		alert("Es mayor de edad");
	}else{
		alert("Es menor de edad");
	}

}//FIN DE LA FUNCIÓN