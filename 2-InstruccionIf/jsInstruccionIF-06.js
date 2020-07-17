function mostrar()
{
	//tomo la edad  
	var vEdad;
	vEdad = document.getElementById("txtIdEdad").value;  
	vEdad = parseInt(vEdad);
	if(vEdad>=13 & vEdad<=17){
		alert("la persona es adolescente");
	}if(vEdad<13){
		alert("la persona es menor de edad");
	}if(vEdad>=18){
		alert("la persona es mayor de edad");
}
}//FIN DE LA FUNCIÓN