function Mostrar()
{
var x = parseInt(document.getElementById("edad").value);
if (x < 13){
    alert("Es un niño");
} 
else if (x >= 13 && x <= 17) {
    alert("Es adolescente");
}
else if (x > 17){
    alert("Es mayor de edad");
}





}//FIN DE LA FUNCIÓN
