/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var vNum1;
	var vNum2;
	var vRes;

	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum2 = document.getElementById("txtIdNumeroDos").value;
	
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt(vNum2);
	vRes = vNum1 + vNum2;
	
	alert("la suma es: "+vRes);
}

function restar()
{
	var vNum1;
	var vNum2;
	var vRes;

	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum2 = document.getElementById("txtIdNumeroDos").value;
	
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt(vNum2);
	vRes = vNum1 - vNum2;	

	alert("la resta es: "+vRes);
}

function multiplicar()
{ 
	var vNum1;
	var vNum2;
	var vRes;

	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum2 = document.getElementById("txtIdNumeroDos").value;
	
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt(vNum2);
	vRes = vNum1 * vNum2;	

	alert("la multiplicaión es: "+vRes);
}

function dividir()
{
	var vNum1;
	var vNum2;
	var vRes;

	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum2 = document.getElementById("txtIdNumeroDos").value;
	
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt(vNum2);
	vRes = vNum1 / vNum2;
	
	alert("la división es: "+vRes);
}

