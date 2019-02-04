/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var x, y;
function parsear()
{
    x = parseInt(document.getElementById("numeroUno").value);
    y = parseInt(document.getElementById("numeroDos").value);
}
function sumar()
{	
    parsear();
    alert("el resultado de la suma es " + (x + y));   
}

function restar()
{
    parsear();
    alert("el resultado de la resta es " + (x - y));
}
function multiplicar()
{ 
    parsear();
    alert("el resultado de la multiplicacion es " + (x * y));
}

function dividir()
{
    parsear();
    alert("el resultado de la division es " + (x / y));
}

