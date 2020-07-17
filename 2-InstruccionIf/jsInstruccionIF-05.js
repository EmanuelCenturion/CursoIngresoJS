function mostrar()
{
	//tomo la edad  
	var vEdad;
	vEdad = document.getElementById("txtIdEdad").value;  
	vEdad = parseInt(vEdad);
	if(vEdad<13 | vEdad>17){
		alert("la persona no es adolescente");
	}
}//FIN DE LA FUNCIÓN