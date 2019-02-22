function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

//while(numero < 0 || numero > 9 || isNaN(numero) )
/* isNaN funcion para comprobar si no es un numero devuelve falso al ser numero y true al no ser numero*/

while(!(numero >= 0 && numero <= 9))
{

	   numero = prompt("Numero incorrecto");
   
}
	document.getElementById("Numero").value = numero;
}