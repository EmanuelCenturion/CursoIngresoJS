/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto;
let contadorIntentos = 0;
let numRandom;

function comenzar() {
	numeroSecreto = parseInt(document.getElementById("txtIdNumero").value);
	numRandom = Math.round(Math.random() * (100 - 1) + 1);
	contadorIntentos++;
	console.log(numRandom);

}

function verificar() {
	if (numRandom == numeroSecreto) {
		document.getElementById("txtIdIntentos").value = "Usted es un ganador y tan solo en " + contadorIntentos + " intentos";
		switch (contadorIntentos) {
			case 1:
				alert("1° intento: Usted es un Psíquico!");
				break;
			case 2:
				alert("2° intento: Excelente percepción!");
				break;
			case 3:
				alert("3° intento: Esto es suerte!");
				break;
			case 4:
				alert("4° intento: Excelente técnica!");
				break;
			case 5:
				alert("5° intento: Usted está en la media");
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("Falta técnica!");
				break;
			default:
				alert("Afortunado en el amor!!");
				break;
		}
	} else if (numRandom < numeroSecreto) {
		document.getElementById("txtIdIntentos").value = "le falta para llegar al numero secreto";
	} else {
		document.getElementById("txtIdIntentos").value = "se paso del numero secreto";
	}

}