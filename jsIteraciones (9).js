function Mostrar()
{
    var contador = 0;
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';
	do{
	     numero = parseFloat(prompt("Ingrese un numero"));
	if(contador == 0){
		maximo = numero;
		minimo = numero;
	}
	
	if(numero > maximo){
		maximo = numero; 
	}else if(numero < minimo){
		minimo = numero;                                                           
	
	}
contador++;
respuesta = prompt("Quiere continuar ingresando numeros?");

}while(respuesta!='no');
document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo; 



}//FIN DE LA FUNCIÓN