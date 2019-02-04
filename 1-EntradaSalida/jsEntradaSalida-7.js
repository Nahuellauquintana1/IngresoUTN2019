/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
    var x = parseInt(document.getElementById("numeroUno").value);
    var y = parseInt(document.getElementById("numeroDos").value);
    var a = x + y;
  
    alert("la suma es " + a);
    
}

function restar()
{
    var x = parseInt(document.getElementById("numeroUno").value);
    var y = parseInt(document.getElementById("numeroDos").value);
    var b = x - y;
    
    alert("la resta es igual a " + b);
}

function multiplicar()
{ 
	var x = parseInt(document.getElementById("numeroUno").value);
    var y = parseInt(document.getElementById("numeroDos").value);
    var c = x * y;
    
    alert("la multiplicacion es igual a " + c);
}

function dividir()
{
	var x = parseInt(document.getElementById("numeroUno").value);
    var y = parseInt(document.getElementById("numeroDos").value);
    var d = x / y;
    
    alert("la division es igual a " + d);
}

