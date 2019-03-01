function Mostrar()
{
var contador=0;
var acumulador=0;
var respuesta='si';

while(respuesta != 'no'){
	acumulador = acumulador + parseFloat(prompt("Ingrese numero"));
 	respuesta = prompt("Quiere saber la respuesta?");
    contador ++;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}