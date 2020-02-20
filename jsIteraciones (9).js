function mostrar()
{


//var contador=0;// lo saco porque no lo usamos
var vmax;
var vmin;
var vnum;
var respuesta="si"; 

vnum=prompt("Ingrese un numero");
vmin= vnum;
vmax=vnum; // aca le asigno el valor a las variables, me falto solo eso
respuesta=prompt("¿desea ingresar otro numero?");

while (respuesta=="si"|| respuesta=="SI")
{
vnum=prompt("Ingrese un numero");

	if (vnum > vmax)
	{
		vmax=vnum;
	}
	if (vnum < vmin)
	{
		vmin=vnum;
	}
respuesta=prompt("¿desea ingresar otro numero?");
}

document.getElementById("minimo").value=vmin;
document.getElementById("maximo").value=vmax;



}//FIN DE LA FUNCIÓN
