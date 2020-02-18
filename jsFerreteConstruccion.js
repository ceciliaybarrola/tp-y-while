/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var perimetro;

largo= document.getElementById("Largo").value;
ancho= document.getElementById("Ancho").value;
perimetro= (parseInt(largo) + parseInt(ancho)) * 2 * 3;

alert("La cantidad de alambre a comprar es: "+perimetro+" metros.");

}
function Circulo () 
{
var radio=document.getElementById("Radio").value;
var circunferencia= parseInt(radio) * 2 * 3.14 * 3; 
alert("La cantidad de alambre a comprar es: "+circunferencia+" metros.");

}
function Materiales () 
{
var largo;
var ancho;
var area;
var cemento;
var cal;

largo= document.getElementById("Largo").value;
ancho= document.getElementById("Ancho").value;
area= parseInt(largo) + parseInt(ancho);
cemento= parseInt(area) * 2;
cal= (area) * 3;

alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.");


}
