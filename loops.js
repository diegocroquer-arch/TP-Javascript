const prompt = require("prompt-sync")()
// 1. Usa el bucle for para mostrar números pares del 2 al 30.

// for(let i=0;i<=30;i += 2){
//     console.log("PAR" + i)
// }

// 2. Escribe un bucle que solicite un número mayor que 250. Si el usuario ingresa otro
// número debes pedirle que ingrese un valor nuevo El bucle debe pedir un número hasta
// que el usuario ingrese un número mayor que 250 o lo cancele Aquí podemos asumir
// que el usuario solo ingresará números.

// let numero
// do {
//   numero = prompt("Ingresa un número mayor que 250 (o cancela para salir):");
//   numero = parseInt(numero)
//   if (numero === null) {
//     console.log("Numero invalido")
//     break
//   }
//   numero = Number(numero);
// } 
// while (numero <= 250);
// console.log("Gracias. Número válido o cancelaste.");


// 3. Un número entero mayor que 1 es llamado primo si no puede ser dividido sin un resto
// por ningún número excepto 1 y él mismo. En otras palabras, n > 1 es un primo si no
// puede ser dividido exactamente por ningún número excepto 1 y n. Por ejemplo, 5 es un
// primo, porque no puede ser dividido exactamente por 2, 3 y 4.
// Escribe el código que muestre números primos en el intervalo de 2 a n.
// Ejemplo: Para n = 10 el resultado será 2, 3, 5, 7.



// 4. Ingrese un número y mostrar su potencia n^2, repetir este proceso hasta que se
// ingrese un número negativo

// let num 
// num = prompt("que numero")

// while (num>0){
//     num = Number(num)
//     let resultado = num **2
//     console.log(resultado)
//     num = prompt("que numero")
// }
// console.log("negativos No")

// 5. Pedir un número hasta que se ingrese el número 0 o negativo, luego mostrar la suma
// de todos los números ingresados

let suma = 0
let num 
num = prompt("Que numeros quieres sumar? :")
num = Number(num)

while(num>0){
    suma = suma + num
    num = prompt("Que numeros quieres sumar? :")
    num = Number(num)
}
console.log(suma)



// 7. Utiliza un bucle do...while para pedir al usuario que ingrese un número positivo.
// Continúa pidiendo hasta que ingrese un número positivo. Ejecutar ejercicio en consola
// navegador para poder usar prompt
