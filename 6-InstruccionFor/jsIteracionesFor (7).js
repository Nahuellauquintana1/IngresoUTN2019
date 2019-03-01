function Mostrar()
{
    /*Mostar los numeros divisores desde el 1 al número ingresado, 
    y mostar la cantidad de numeros divisores encontrados. */

    var numero = parseInt(prompt("Ingrese un numero"));
    var contador2 = 0;
    for(contador = 0;contador <= numero; contador ++){
        if((numero % contador) == 0){
            console.log(contador);
            contador2 ++;
        }
        
    }
    
    alert(contador2);
}