function Mostrar()
{
var x = parseInt(document.getElementById("edad").value);
var y = document.getElementById("estadoCivil").value;
if (x > 18 && y === "Soltero"){
alert("Es soltero y no es menor");
}
}//FIN DE LA FUNCIÓN