function mostrar() {
	let num;
	let primo = 0;
	do {
		num = parseInt(prompt("ingrese un número positivo"));
	} while (isNaN(num) || num <= 1);
		for (let i = 1; i <= num; i++) {
			if (num % i == 0) {
				primo++;
			}
		}
		if (primo == 2) {
			alert("es un número primo");
		} else {
			alert("No es un número primo");
		}
}

