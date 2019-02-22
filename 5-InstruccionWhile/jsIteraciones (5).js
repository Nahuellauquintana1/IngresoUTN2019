function Mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();

//while(sexo != "f" && sexo !="m")
//.tolowerCase() se utiliza para convertir mayus a minusculas
while(!(sexo == "f" || sexo == "m"))
{
    sexo = prompt("Vuelva a ingresar sexo f o m").toLowerCase();
}

document.getElementById('Sexo').value=sexo;
}