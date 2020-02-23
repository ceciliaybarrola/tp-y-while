function mostrar()
{
var respuesta= "si"
var num;
var aNegativo=0;
var aPositivo=0;
var cNegativo=0;
var cPositivo=0;
var cCero=0;
var cPar=0;

while (respuesta != "no")
{
	num=parseInt(prompt("Ingrese un numero"));
		if (num==0)
		{
			cCero++
		}
		if (num %2==0)
		{
			cPar++
		}
		 if (num >= 0)
		{
			cPositivo++;
			aPositivo= aPositivo + num;
		}
		else
		{
			cNegativo++;
			aNegativo= aNegativo + num;
		}
		
	respuesta=prompt("¿Desea ingresar otro numero?");
}


document.write("suma negativos: "+aNegativo+"<br>");
document.write("suma positivos: "+aPositivo+"<br>");
document.write("cantidad de positivos: "+cPositivo+"<br>");
document.write("cantidad de negativos: "+cNegativo+"<br>");
document.write("cantidad de ceros: "+cCero+"<br>");
document.write("cantidad de numeros pares: "+cPar+"<br>");
document.write("promedio positivos: "+ aPositivo/cPositivo +"<br>");
document.write("promedio negativos: "+ aNegativo/cNegativo +"<br>");
document.write("deferencia de positivos y negativos: "+ aPositivo+aNegativo +"<br>");

}//FIN DE LA FUNCIÓN
