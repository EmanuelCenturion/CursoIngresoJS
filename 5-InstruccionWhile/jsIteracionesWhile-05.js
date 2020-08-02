/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	do{
	sexo = prompt("ingrese f ó m .").toLowerCase();
	}while(sexo!='f' && sexo!='m');	
	if(sexo=='f'){
			sexo="Femenino";
	}else{
		sexo="Masculino";
	}
	document.getElementById("txtIdSexo").value=sexo;
}