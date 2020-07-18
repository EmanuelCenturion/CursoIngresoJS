/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let tempFahr;
    let tempCent;

    tempFahr = parseFloat(document.getElementById("txtIdTemperatura").value);
    tempCent = (tempFahr-32)*5/9;
    alert(tempFahr+"° Fahrenheit son "+tempCent.toFixed(1)+"° Centígrados");
}

function CentigradosFahrenheit () 
{
    let tempCent;
    let tempFahr;

    tempCent = parseFloat(document.getElementById("txtIdTemperatura").value);
    tempFahr = tempCent*1.8+32;
    alert(tempCent+"° Centígrados son "+tempFahr.toFixed(1)+"° Fahrenheit");
}
