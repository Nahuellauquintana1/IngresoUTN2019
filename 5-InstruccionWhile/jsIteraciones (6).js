function Mostrar()
{
/* se llama contador a aquella variable a la cual se le suma siempre una constante (dentro del while).
acumulador es la suma de 2 variables*/
//while(contador >5)
//while(!(contador == 5))
var contador=0;
var acumulador=0;
    	
		while(contador > 5){
			acumulador = acumulador + parseInt(prompt("ingrese 5 numeros"));
			contador ++;
}
					document.getElementById('suma').value=acumulador;
					document.getElementById('promedio').value=acumulador/5;
}