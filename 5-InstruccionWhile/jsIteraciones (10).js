function Mostrar() {
	var importe;
	var maximo;
	var minimo;
	for (contador = 0; contador < 24; contador++) {
		importe = parseInt(prompt("Ingrese el valor de las ventas"));
		while (isNaN(importe) || importe <= 0) {
			alert("No es un valor de ventas valido");
			importe = parseInt(prompt("Ingrese el valor de las ventas"));
		}

		if (contador == 0) {
			maximo = importe;
			minimo = importe;
		}
		if (importe > maximo) {
			maximo = importe;
		} else if (importe < minimo) {
			minimo = importe;
		}
	}
	alert("El mayor importe de ventas fue " + (maximo) + " y el menor importe fue " + (minimo));


}//FIN DE LA FUNCIÓN