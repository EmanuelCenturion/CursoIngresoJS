function mostrar()
{
	let nota;
	nota = Math.round(Math.random()* 9 +1);	
	if(nota>=9){
		alert("EXCELENTE: "+nota);
	}else if(nota>=4 && nota<9){
		alert("APROBÓ: "+nota);
	}else{
		alert("Vamos, la próxima se puede: "+nota);	
	}
}