function Mostrar()
{
    var numero = parseInt(prompt("Ingrese un numero"));
    var contador2 = 0;
    for(contador = 0;contador <= numero; contador ++){
        if((numero % contador) == 0){
            contador2 ++;
        //console.log(contador2);
    
        }
    }
    if(contador2 == 2){
        alert("El numero es primo");

    }else{
        alert("El numero No es primo");
    }



}