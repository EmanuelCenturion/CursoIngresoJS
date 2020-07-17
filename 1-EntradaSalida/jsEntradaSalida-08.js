/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var vNum1;
	var vNum2;
	var vRes;
	
	vNum1 = document.getElementById("txtIdNumeroDividendo").value;
	vNum2 = document.getElementById("txtIdNumeroDivisor").value;
	
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt(vNum2);
	vRes = vNum1%vNum2;

	alert("El resto es: "+ vRes);
}
