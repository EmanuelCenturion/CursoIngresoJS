function mostrar() {
	let num;
	let par = 0;
	num = parseInt(prompt("ingrese un numero"));
	for (let i = 1; i <= num; i++) {
		if (i % 2 == 0) {
			alert(i+" es par");
			par++;
		}
	}
	alert("cantidad de numero pares= " + par);

}