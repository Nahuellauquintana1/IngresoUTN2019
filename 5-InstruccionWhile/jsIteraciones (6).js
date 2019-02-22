function Mostrar()
{
/* se llama contador a aquella variable a la cual se le suma siempre una constante (dentro del while).
acumulador es la suma de 2 variables*/
//while(contador >5)
//while(!(contador == 5))
/* For se utiliza cuando sabemos de antemano la cantidad de veces que se va a repetir el codigo for(var x= 0; x >5; x++) ESTRUCTURA 
Do while se utiliza cuando queremos que el while se execute almenos una vez y while para cuando no sabemos la cantidad de veces que se tiene que ejecutar el while*/

var contador=0;


var acumulador=0;
    	
		while(contador > 5){
			acumulador = acumulador + parseInt(prompt("ingrese 5 numeros"));
			contador ++;
}
					document.getElementById('suma').value=acumulador;
					document.getElementById('promedio').value=acumulador/5;
}