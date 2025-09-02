// Ejercicio 1: Duplicar Elementos con .map
// Crea una función que reciba un array de números y devuelva un nuevo array con cada número
// duplicado usando el método .map.

// let arr = [3, 4, 1, 8];

// function duplicador(arrNum) {
//   let arraDuplicado = arrNum.map(function (element) {
//     return element * 2;
//   });
//   console.log(arraDuplicado);
// }
// duplicador(arr);

// Ejercicio 2: Convertir Números a Strings con .map
// Escribe una función que reciba un array de números y devuelva un nuevo array con cada
// número convertido a string usando el método .map.

// let arr = [3, 4, 1, 8];

// function convertidor(arrNum) {
//   let arraConvertido = arrNum.map(function (element) {
//     return (element = String(element));
//   });
//   console.log(arraConvertido);
// }
// convertidor(arr);

// Ejercicio 3: Calcular el Promedio con .forEach
// Escribe una función que reciba un array de números y devuelva el promedio de todos los
// elementos usando el método .forEach.

let notas = [3, 6, 9, 10, 8];
let suma = 0;
function promedio(a) {
  a.forEach(function (element) {
    suma = suma + element;
  });
  return suma / a.length;
}
console.log(promedio(notas));

// Ejercicio 4: Contar Elementos con .forEach
// Escribe una función que reciba un array de números y cuente cuántos de ellos son mayores a
// 10 usando el método .forEach.

// Ejercicio 5: Crear Lista de Compras con .map y .forEach
// Crea una función que reciba un array de objetos, donde cada objeto tiene una propiedad
// producto y cantidad. La función debe retornar un array de strings que describen cada producto
// y su cantidad usando .map y .forEach.

// Ejercicio 6: Calcular Descuentos con .map y .forEach
// Escribe una función que reciba un array de precios y devuelva un nuevo array con un
// descuento del 10% aplicado a cada precio usando .map. Luego, usa .forEach para imprimir
// cada precio con su descuento
