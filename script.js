console.log("hola");
//Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, imprimir en consola ‘El número A es mayor a B‘.
//
let numeroA = 5;
let numeroB = 9;
if (numeroA > numeroB) {
  console.log("El numero A es mayor a B");
} else {
  console.log("no");
}
//Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia.
//  Si la edad es mayor al número de referencia, imprimir en consola un mensaje.//

let edad = 18
let ref = 11
if (edad > ref){
    console.log(`La edad es mayor que el numero de referencia ${ref}`)
}

//Crea un bloque de código que compare dos números e imprima en consola un valor booleano.
//

let saldo = 5000
let deuda = 2000

if (saldo > deuda) {
  console.log (true)
}

//Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.//

let nombre1 = "Diego"
let nombre2 = "Diego"
if(nombre1 == nombre2){
  console.log (nombre1)
}

//Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.
let numeros = -3
if (numeros < 0){
  console.log(numeros)
}

//Crea un bloque de código que compare dos números. Si el número es par, imprimir en consola ‘El número es par’. 
// De lo contrario, imprimir ‘El número es impar’.
let numP = 8
let numIP = 5
if ( (numP + numIP) %2 == 0){
  console.log ("el numero es par")
}
else {
  console.log("el numero es impar")
}

