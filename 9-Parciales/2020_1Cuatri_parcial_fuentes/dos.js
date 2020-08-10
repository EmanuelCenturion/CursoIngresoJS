function mostrar() {
  let tipo;
  let cantBolsas;
  let precioPorBolsa;
  let respuesta = 's';
  let contArena = 0;
  let contCal = 0;
  let contCemento = 0;
  let acumArena = 0;
  let acumCal = 0;
  let acumCemento = 0;
  let precioConDescuento;
  let totalPrecio = 0;
  let masCantBolsas;
  let precioArena;
  let precioCal;
  let precioCemento;
  let tipoMasCaro;

  do {
    //alert("ingrese un producto");
    do {
      tipo = prompt("ingrese tipo de producto");
    } while (tipo != "arena" && tipo != "cal" && tipo != "cemento");

    cantBolsas = parseInt(prompt("ingrese cantidad de bolsas"));

    do {
      precioPorBolsa = parseFloat(prompt("ingrese precio de producto"));
    } while (precioPorBolsa <= 0);

    switch (tipo) {
      case "arena":
        acumArena = cantBolsas;
        contArena++;
        precioArena = precioPorBolsa;
        break;
      case "cal":
        acumCal = cantBolsas;
        contCal++;
        precioCal = precioPorBolsa;
        break;
      case "cemento":
        acumCemeto = cantBolsas;
        contCemento++
        precioCemento = precioPorBolsa;
        break;
    }

    totalPrecio += (precioPorBolsa * cantBolsas);

    respuesta = prompt("desea ingresar otro producto? s/n");

  } while (respuesta == 's');

  if (cantBolsas > 10 && cantBolsas <= 30) {
    precioConDescuento = totalPrecio - totalPrecio * 0.15;
  }
  if (cantBolsas > 30) {
    precioConDescuento = totalPrecio - totalPrecio * 0.25;
  }

  if (acumArena > acumCal && acumArena > acumCemento) {
    masCantBolsas = acumArena + " Arena";
  } else if (acumCal > acumArena && acumCal > acumCemento) {
    masCantBolsas = acumCal + " cal";
  } else {
    masCantBolsas = acumCemento + " Cemento";
  }
  if (precioArena > precioCal && precioArena > precioCemento) {
    tipoMasCaro = precioArena + " Arena";
  } else if (precioCal > precioArena && precioCal > precioCemento) {
    tipoMasCaro = precioCal + " cal";
  } else {
    tipoMasCaro = precioCemento + " Cemento";
  }


  document.write("A)El total a pagar es de: " + totalPrecio + "<br>");
  if (cantBolsas > 10) {
    document.write("B)El total a pagar con descuento es de: " + precioConDescuento + "<br>");
  }
  document.write("D)El tipo con mas cantidad de bolsas es: " + masCantBolsas + "<br>");
  document.write("E)El tipo mas caro es: " + tipoMasCaro);
}
