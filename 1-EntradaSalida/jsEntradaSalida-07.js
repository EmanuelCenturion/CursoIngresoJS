/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let vNum1;
	let vNum2;
	let vRes;

	vNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNum2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	vRes = vNum1 + vNum2;
	
	alert("la suma es: "+vRes);
}

function restar()
{
	let vNum1;
	let vNum2;
	let vRes;

	vNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNum2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	vRes = vNum1 - vNum2;	

	alert("la resta es: "+vRes);
}

function multiplicar()
{ 
	let vNum1;
	let vNum2;
	let vRes;

	vNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNum2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	vRes = vNum1 * vNum2;	

	alert("la multiplicaión es: "+vRes);
}

function dividir()
{
	let vNum1;
	let vNum2;
	let vRes;

	vNum1 = parseFloat(document.getElementById("txtIdNumeroUno").value);
	vNum2 = parseFloat(document.getElementById("txtIdNumeroDos").value);
	vRes = vNum1 / vNum2;
	
	alert("la división es: "+vRes.toFixed(2));
}

