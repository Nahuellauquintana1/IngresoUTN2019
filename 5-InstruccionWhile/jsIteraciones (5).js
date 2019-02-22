function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

//while(sexo != "f" && sexo !="m")
while(!(sexo == "f" || sexo == "m"))
{
    sexo = prompt("Vuelva a ingresar sexo f o m");
}

document.getElementById('Sexo').value=sexo;
}