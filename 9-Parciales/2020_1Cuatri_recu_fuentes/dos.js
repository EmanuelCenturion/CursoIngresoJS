function mostrar() {

  let tipo;
  let cantBolsas;
  let precioPorBolsa;
  let respuesta = 's';
  let acumArena = 0;
  let acumCal = 0;
  let acumCemento = 0;
  let precioDescuento;
  let totPrecio = 0;
  let masCantBolsas;
  let precioArena;
  let precioCal;
  let precioCemento;
  let tipoMasCaro;

  do {
    do {
      tipo = prompt("Ingrese tipo de producto");
    } while (tipo != "arena" && tipo != "cal" && tipo != "cemento");

    do{
    cantBolsas = parseInt(prompt("Ingrese cantidad de producto"));
    }while(cantBolsas<=0||isNaN(cantBolsas));
    do{
    precioPorBolsa = parseFloat(prompt("Ingrese precio de producto"));
    }while(precioPorBolsa<=0||isNaN(precioPorBolsa));

    switch (tipo) {
      case "arena":
        acumArena += cantBolsas;
        precioArena = precioPorBolsa;
        break;
      case "cal":
        acumCal += cantBolsas;
        precioCal = precioPorBolsa;
        break;
      case "cemento":
        acumCemento += cantBolsas;
        precioCemento = precioPorBolsa;
        break;
    }

    totPrecio += precioPorBolsa;

    respuesta = prompt("desea ingresar otro producto? s/n");
  } while (respuesta == 's');

  if (cantBolsas >= 10 && cantBolsas <= 30) {
    precioDescuento = totPrecio - totPrecio * 0.15;
  }
  if (cantBolsas > 30) {
    precioDescuento = totPrecio - totPrecio * 0.25;
  }

  if (acumArena > acumCal && acumArena > acumCemento) {
    masCantBolsas = acumArena;
  } else if (acumCal > acumArena && acumCal > acumCemento) {
    masCantBolsas = acumCal
  } else {
    masCantBolsas = acumCemento;
  }

  if (precioArena > precioCal && precioArena > precioCemento) {
    tipoMasCaro = "Arena";
  } else if (precioCal > precioArena && precioCal > precioCemento) {
    tipoMasCaro = "Cal";
  } else {
    tipoMasCaro = "Cemento";
  }

  document.write("A)Total a pagar en bruto: " + totPrecio + "<br>");
  if (cantBolsas < 10) {
    document.write("B)No tiene descuento" + "<br>");
  } else {
    document.write("B)Total a pagar con descuento: " + precioDescuento.toFixed(2) + "<br>");

  }
  document.write("C)El tipo con mas cantidad de bolsas es: " + masCantBolsas + "<br>");
  document.write("D)El tipo mas caro es: " + tipoMasCaro + "<br>");


}
