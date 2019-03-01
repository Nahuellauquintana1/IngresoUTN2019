function Mostrar()
{
//tomo el mes
var dia = prompt("ingrese un dia de la semana").toLowerCase();

switch(dia){

    case "sabado":
    case "domingo":
    alert("Es fin de semana");
    break;

    default:
    alert("A trabajar");
    break;


}



}//FIN DE LA FUNCIÓN