/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
  var precio = parseFloat(prompt("Ingrese el precio"));
  var iva = precio * 0.21;
  alert("El importe final del producto con iva es de: " + (precio + iva));
}
