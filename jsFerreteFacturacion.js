
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var precio1;
var precio2;
var precio3;
var suma;

precio1 = document.getElementById("PrecioUno").value;
precio2 = document.getElementById("PrecioDos").value;
precio3 = document.getElementById("PrecioTres").value;

suma= parseInt(precio1) + parseInt(precio2) + parseInt(precio3);
alert("La suma de los precios es: $"+suma);

}
function Promedio () 
{
var precio1;
var precio2;
var precio3;
var suma;
    
precio1 = document.getElementById("PrecioUno").value;
precio2 = document.getElementById("PrecioDos").value;
precio3 = document.getElementById("PrecioTres").value;
    
suma= ((parseInt(precio1) + parseInt(precio2) + parseInt(precio3)) / 3 );
alert("El promedio de los precios es: $"+suma);
        
}
function PrecioFinal () 
{
var precio1;
var precio2;
var precio3;
var suma;
var piva;

precio1 = document.getElementById("PrecioUno").value;
precio2 = document.getElementById("PrecioDos").value;
precio3 = document.getElementById("PrecioTres").value;
    
suma=parseInt(precio1) + parseInt(precio2) + parseInt(precio3);
piva= (suma) *21 / 100 + (suma) ;
alert("El precio final (con IVA incluido) es: $"+piva);	
}