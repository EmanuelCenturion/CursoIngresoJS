function mostrar()
{
	//tomo la edad  
	let vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	if(vEdad<13){
		alert("Es niño");
	}else if(vEdad<18){
		alert("Es adolescente");
	}else{
		alert("Es mayor de edad");
	}	
}//FIN DE LA FUNCIÓN