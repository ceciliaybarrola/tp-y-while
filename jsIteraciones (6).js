function mostrar()
{


	var contador=0;
	var acumulador=0;

while ( contador < 5 )
{
	contador = contador + 1;
	acumulador= parseInt(acumulador) + parseInt(prompt("ingrese un numero"));
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

/*************************************** */
var contador=0;
var acumulador=0;
var valor=0;
var numero=5;

while ( contador < 5)
{
	valor= prompt("ingrese un numero: ");
	acumulador= acumulador + parseInt(valor);
	contador++;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/numero;


}//FIN DE LA FUNCIÓN
