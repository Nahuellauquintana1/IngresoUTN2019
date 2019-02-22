function Mostrar()
{

	var contador=0;
	var acumulador=0;
    acumulador = parseInt(prompt("ingrese 5 numeros"));
		while(contador != "4"){
			acumulador = acumulador + parseInt(prompt("ingrese 5 numeros"));
			contador ++;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}