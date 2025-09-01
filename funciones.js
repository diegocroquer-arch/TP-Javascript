//Ejercicios de Funciones en JavaScript

// //1. Crea una función llamada 'saludar' que muestre en consola el mensaje: Hola, bienvenido a
// //JavaScript.
// function saludar(){
//     console.log("Hola, bienvenido a JavaScript")
// }
// saludar()
// //2. Escribe una función llamada 'sumar' que reciba dos números y muestre el resultado en consola.
// let sumar = function(a , b){
//     return a + b
// }
// console.log (sumar(5, 3))
// //3. Haz una función llamada 'esMayor' que reciba dos números y muestre true si el primero es
// //mayor que el segundo.
// function esMayor(a,b){
//     if(a>b){
//         return console.log (true)
//     }
// }
// esMayor(9,5)
//4. Crea una función llamada 'esPar' que reciba un número y muestre true si es par o false si es
//impar.
// function esPar(a) {
//   if (a % 2 === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// esPar(20);
//5. Escribe una función llamada 'multiplicar' que reciba tres números y muestre el resultado en
//consola.
// function multiplicar (a,b,c){
//     let resultado = a*b*c
//     return resultado
// }
// console.log(multiplicar(2,2,5))
//6. Haz una función llamada 'compararStrings' que reciba dos textos y muestre true si son iguales o
//false si son diferentes.
// function compararStrings (a,b){
//     if (a.toLowerCase() === b.toLowerCase()){

//         console.log(true)
//     }
//     else{false}
// }
// compararStrings("Mati","mati")
//7. Crea una función llamada 'areaRectangulo' que reciba base y altura, y muestre el área en
//consola.
// function areaRectangulo(a,b){
//     let area = a * b
//     return area
// }
// console.log(areaRectangulo(2, 5))
//8. Escribe una función llamada 'mayorDeEdad' que reciba una edad y muestre 'Es mayor de edad'
//si es mayor o igual a 18, y 'Es menor de edad' si no lo es.
// function mayorDeEdad (a){
//     if(a>=18){
//         console.log("Es mayor de edad")
//     }
//     else{
//         console.log("Es menor de edad")
//     }
// }
// mayorDeEdad(23)
//9. Crea una función llamada 'promedio' que reciba tres números y muestre el promedio en consola.
// function promedio(a,b,c){
//     let res = (a + b + c / 3)
//     return res
// }
// console.log(promedio(2,5,10))
//10. Escribe una función llamada 'calcularIVA' que reciba un precio y muestre el precio final con un
// //21% de IVA incluido.//
// function calcularIVA (a){
//     let final = (21/100) * a + a
//     return final
// }
// console.log(calcularIVA(10))

// Arrays (Eze) y Funciones(Joseph)

// Ejercicio 1
// Crea una función que reciba un array de frutas y una fruta a buscar. La función debe devolver `true` si
// la fruta está en el array y `false` en caso contrario (usa includes).
// function buscarFruta (a , b){
//     return a.includes(b)
// }
// let frutas = ["peras", "uvas", "manzanas","melones"]
// console.log(buscarFruta (frutas,"peras"))
// Ejercicio 2
// Crea una función que reciba un array de números y devuelva `true` si todos los números son positivos
// (usa every).
// function positivos(a){
//     return a.every( element => element > 0)
// }
// edades = [2,7,15,3,18,22]
// console.log(positivos(edades))

// function TEST (array){
//     return array.every(element => element > 0)
// }
// num= [4,-18,25]
// console.log(TEST(num))
// Ejercicio 3
// Crea una función que reciba un array de edades y devuelva `true` si al menos una edad es mayor o
// igual a 18 (usa some).
// function positivos(a){
//      return a.some( element => element >= 18)
//      }
//  edades = [2,7,15,3,18,22]
//  console.log(positivos(edades))

// Ejercicio 4
// Crea una función que reciba un array de nombres y un nombre a buscar. Si el nombre está en el array,
// debe devolver un mensaje que diga 'Nombre encontrado', en caso contrario 'Nombre no encontrado'.

// function buscarNombre(a, b) {
//   let encontrado = a.some(nombre => nombre == b)
//  if (encontrado == true){
//     return "Nombre Encontrado"
//  }
//  else {
//     return "Nombre no encontrado"
//  }
// }
// array = ["diego", "daniel", "dario", "douglas"];
// busacar = "diego";
// console.log(buscarNombre(array, busacar));


// Ejercicio 5
// Crea una función que reciba un array de productos y un producto a buscar. La función debe devolver si
// el producto existe o no (usa includes).

// function buscarProducto(a, b) {
//   let encontrado = a.includes(b)
//  if (encontrado == true){
//     return "Producto Existe"
//  }
//  else {
//     return "Producto no existe"
//  }
// }
// array = ["lechuga", "tomate", "cebolla", "aceite"];
// busacar = "lechuga";
// console.log(buscarProducto(array, busacar));