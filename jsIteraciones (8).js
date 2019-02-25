function Mostrar()
{
	var numero=0;
	var positivo=0;
	var negativo=1;
	var respuesta="si";
do{

numero = parseFloat(prompt("Ingrese numero"));

if(numero < 0){

	negativo = negativo * numero; 
}else{
	positivo = positivo + numero;
}


respuesta=prompt("Quiere continuar el ingreso?");

}while(respuesta =="si");

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN