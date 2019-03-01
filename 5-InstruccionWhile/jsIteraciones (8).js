function Mostrar()
{

	
    var numero = 0;
	var negativo= 1;
	var respuesta;
    var positivo= 0;
	do{
		numero = parseInt(prompt("ingrese un numero"));
		
		if(numero < 0){
			negativo = negativo * numero; 
		}else{
			positivo = positivo + numero;
		}
	
	   respuesta = prompt("Quiere seguir ingresando numeros?");
	}while(respuesta != 'no');
	document.getElementById('suma').value=positivo;
    document.getElementById('producto').value=negativo;

}