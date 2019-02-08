/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
  var x = parseInt(document.getElementById("sueldo").value);
  var y = (x *0.10);
  var z = x + y; 
  document.getElementById("resultado").value = z;
}
