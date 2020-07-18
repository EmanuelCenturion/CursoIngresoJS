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
	
	vNum1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	vNum2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	vRes = vNum1%vNum2;

	alert("El resto es: "+ vRes);
}
