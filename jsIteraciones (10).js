function Mostrar()
{

	var contador=0;
	var contadorn=0;
	var contadorp=0;
	var contadorc=0;
	var contadorpares=0;
	var numero;
	var positivo=0;
	var negativo=0;
	var respuesta="si";

do{
			numero = parseFloat(prompt("Ingrese un numero"));

	if(numero < 0){
		negativo= negativo + numero;
		contadorn++;
	}else if(numero > 0){
		positivo = positivo + numero;
		contadorp++;
	}else{
		contadorc++;
	}

	if(numero % 2 == 0){
		contadorpares++;
	}

			respuesta = prompt("Quiere continuar el ingreso de numeros");


  }while(respuesta == "si");

document.write("1º La suma de los negativos es igual a: " + negativo + "<br> 2º La suma de los positivos es igual a: " + positivo + "<br> 3º La cantidad de los positivos es " + contadorp + "<br> 4º La cantidad de los negativos es: " + contadorn + "<br> 5º La cantidad de ceros es " + contadorc + "<br> 6º La cantidad de numeros pares es: " + contadorpares + "<br> 7º El promedio de los positivos es " + (positivo/contadorp) + "<br> 8º El promedio de los negativos es " +(negativo/contadorn) + "<br> 9º La diferencia entre positivos y negativos es " + (positivo-negativo));

}//FIN DE LA FUNCIÓN