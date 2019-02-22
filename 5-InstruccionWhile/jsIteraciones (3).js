function Mostrar()
{

var clave = prompt("ingrese el número clave");
/*Condicion distinta a...
while( clave != "utn750")*/
//negando la condicion
while(!(clave == "utn750")){

   clave = prompt("Clave erronea");
}

alert("Clave correcta");
}
