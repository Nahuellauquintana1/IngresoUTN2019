function Mostrar()
{
/*realizar el algoritmo que pida dos números por prompt, si son iguales que  los multiplique,
i el primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write.*/

var numero1 = parseInt(prompt("Ingrese el primer numero"));
var numero2 = parseInt(prompt("Ingrese el segundo numero"));
if(numero1 == numero2){
    numero1 = numero1 * numero2;
    document.write("El resultado es: " +(numero1));
}else if(numero1 > numero2){
    numero1 = numero1 - numero2;
    document.write("El resultado es: " +(numero1));
}else{
    numero1 = numero1 + numero2;
    document.write("El resultado es: " +(numero1));
}

}
