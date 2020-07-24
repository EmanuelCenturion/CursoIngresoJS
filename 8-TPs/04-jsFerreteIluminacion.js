/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidad;
    let precio = 35;
    let conDescuento;
    let marca;
    let impuesto;
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    if(cantidad>=6)
    {
        conDescuento = (cantidad * (precio - precio*0.5)); 
        document.getElementById("txtIdprecioDescuento").value = conDescuento;
    }  
    if(cantidad==5){
        if(marca=="ArgentinaLuz"){
        conDescuento = (cantidad * (precio - precio*0.4));
        document.getElementById("txtIdprecioDescuento").value = conDescuento;
        }else{
            conDescuento = (cantidad * (precio - precio*0.3));    
            document.getElementById("txtIdprecioDescuento").value = conDescuento;
        }
    }
    if(cantidad==4){
        if(marca=="ArgentinaLuz" || marca=="FelipeLamparas"){
        conDescuento = (cantidad * (precio - precio*0.25));
        document.getElementById("txtIdprecioDescuento").value = conDescuento;
        }else{
            conDescuento = (cantidad * (precio - precio*0.2));    
            document.getElementById("txtIdprecioDescuento").value = conDescuento;
        }
    }
    if(cantidad==3){
        if(marca=="ArgentinaLuz"){
        conDescuento = (cantidad * (precio - precio*0.15));
        document.getElementById("txtIdprecioDescuento").value = conDescuento;
        }else if(marca=="FelipeLamparas"){
            conDescuento = (cantidad * (precio - precio*0.1));    
            document.getElementById("txtIdprecioDescuento").value = conDescuento;
        }else{
            conDescuento = (cantidad * (precio - precio*0.05));    
            document.getElementById("txtIdprecioDescuento").value = conDescuento;
        }
    }
    if(conDescuento>120){
        impuesto = conDescuento * 0.1;
        conDescuento = conDescuento +impuesto;
        document.getElementById("txtIdprecioDescuento").value = conDescuento;    
        alert("IIBB Usted pago: "+impuesto);
    }



}
