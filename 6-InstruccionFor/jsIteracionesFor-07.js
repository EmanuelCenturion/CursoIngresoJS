function mostrar()
{
	let num;
	let div = 0;
	num = parseInt(prompt("ingrese un numero"));
	for (let i = 1; i <= num; i++) {
		if (num % i == 0) {
			alert(i+" es divisor de "+num);
			div++;
		}
	}
	alert("cantidad de numero divisores de "+num+ " son " +div);
}