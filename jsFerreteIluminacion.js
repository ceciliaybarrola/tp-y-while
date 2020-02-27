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
var lampara;
var cantidad = parseInt(document.getElementById("Cantidad").value);
var marca= document.getElementById("Marca").value;
var precio;


switch (cantidad)
{
    case 5:
        if (marca=="ArgentinaLuz")
        {
            precio=35*5- (35 *5)/100*40;
            document.getElementById("precioDescuento").value=precio;
        }
        else
        {
            precio=35*5- (35 *5)/100*30;
            document.getElementById("precioDescuento").value=precio;
        }
        break;
    case 4:
        if (marca=="ArgentinaLuz"||marca=="FelipeLamparas")
        {
            precio=35*4- (35 *4)/100*25;
            document.getElementById("precioDescuento").value=precio;
        }
        else
        {
            precio=35*4- (35 *4)/100*20;
            document.getElementById("precioDescuento").value=precio;
        }
        break;
    case 3:
        if (marca=="ArgentinaLuz")
        {
            precio=35*3- (35 *3)/100*15;
            document.getElementById("precioDescuento").value=precio;
        }
        if (marca=="FelipeLamparas")
        {
            precio=35*3- (35 *3)/100*10;
            document.getElementById("precioDescuento").value=precio;
        }
        else
        {
            precio=35*3- (35 *3)/100*5;
            document.getElementById("precioDescuento").value=precio;
        }
        break;
    case 2:
    case 1:
        document.getElementById("precioDescuento").value=35;
        break;
    case 6:
            precio=35*6- (35 *6)/100*50;
            document.getElementById("precioDescuento").value=precio;
            break;

}

}
