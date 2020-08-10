let eleccionMaquina;
let ContadorDeEmpates = 0;
let ContadorDeGanadas = 0;
let ContadorDePerdidas = 0;

function comenzar() {
	eleccionMaquina = Math.round(Math.random() * (3 - 1) + 1);

	console.log(eleccionMaquina);
}
function piedra() {
	if (eleccionMaquina == 1) {
		alert("Empato");
		ContadorDeEmpates++;

	} else if (eleccionMaquina == 2) {
		alert("Usted perdió");
		ContadorDePerdidas++;
	} else {
		alert("Usted ganó");
		ContadorDeGanadas++;
	}
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
}
function papel() {
	if (eleccionMaquina == 2) {
		alert("Empato");
		ContadorDeEmpates++;
	} else if (eleccionMaquina == 3) {
		alert("Usted perdió");
		ContadorDePerdidas++;
	} else {
		alert("Usted ganó");
		ContadorDeGanadas++;
	}
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
}
function tijera() {
	if (eleccionMaquina == 3) {
		alert("Empato");
		ContadorDeEmpates++;
	} else if (eleccionMaquina == 1) {
		alert("Usted perdió");
		ContadorDePerdidas++;
	} else {
		alert("Usted ganó");
		ContadorDeGanadas++;
	}
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
}
