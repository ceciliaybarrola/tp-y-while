function mostrar()
{
	var numero;
	var respuesta="si";
	var acNegativo=0;
	var acPositivo=0;
	var contpos=0;
	var contneg=0;
	var contcero=0;
	var contpar=0;
	var contimpar=0;
	
	numero=prompt("Ingrese un Numero");
	respuesta=prompt("¿Desea ingresar otro numero?");
	//alert(respuesta);
	while (respuesta== "si"|| respuesta=="SI")
	{
		numero=prompt("Ingrese un Numero");
		
		if (numero % 2==0)
		{
			 contpar=contpar+1;
		}
		
		if (numero==0)
		{
			contcero=contcero+1;
		}
		else
		{
			if (numero > 0)
			{
				contpos= contpos+1;
				acPositivo= numero + parseInt(acPositivo);
			}
			else
			{
				contneg=contneg+1;
				acNegativo= numero + parseInt(acNegativo);
			}
			
		}

	respuesta=prompt("¿Desea ingresar otro numero?");	
	}

	
	document.write("cantidad de positivos"+contpos);
	document.write("cantidad de negativos"+contneg);
	document.write("cantidad de ceros"+contcero);


}//FIN DE LA FUNCIÓN
