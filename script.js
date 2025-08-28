// //1 Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, imprimir en consola ‘El número A es mayor a B‘.
// //
// let numeroA = 5;
// let numeroB = 9;
// if (numeroA > numeroB) {
//   console.log("El numero A es mayor a B");
// } else {
//   console.log("no");
// }
// //2 Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia.
// //  Si la edad es mayor al número de referencia, imprimir en consola un mensaje.//

// let edad = 18
// let ref = 11
// if (edad > ref){
//     console.log(`La edad es mayor que el numero de referencia ${ref}`)
// }

// //3 Crea un bloque de código que compare dos números e imprima en consola un valor booleano.
// //

// let saldo = 5000
// let deuda = 2000

// if (saldo > deuda) {
//   console.log (true)
// }

// //4 Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.//

// let nombre1 = "Diego"
// let nombre2 = "Diego"
// if(nombre1 == nombre2){
//   console.log (nombre1)
// }
//
// // //5 Crea un bloque de código que compare dos nombres, y si ambos son diferente imprima en consola un mensaje.//
// let nombre1 = "Diego"
// let nombre2 = "Alex"
// if (nombre1 != nombre2){
//     console.log(`los nombres ${nombre1} y ${nombre2} no son iguales`)
// }
// //6 Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.
// let numeros = -3
// if (numeros < 0){
//   console.log(numeros)
// }
//7 Crea un bloque de código que imprima en consola un número en caso de que NO sea un número negativo.
// let po = -6
// if (po > 0){
//     console.log(po)
// }
// //8 Crea un bloque de código que compare dos números. Si el número es par, imprimir en consola ‘El número es par’.
// // De lo contrario, imprimir ‘El número es impar’.
// let numP = 8
// let numIP = 5
// if ( (numP + numIP) %2 == 0){
//   console.log ("el numero es par")
// }
// else {
//   console.log("el numero es impar")
// }
// 9 Crea un bloque de código que compare dos números y luego imprima en consola si es positivo o negativo.
// let num1 = 15
// let num2 = -2
// num = num1 + num2
// if (num>0){
//     console.log("el nmero es positivo")
// }
// else{
//     console.log("el nmero es negativo")
// }
//10 Crea una función que tome de referencia una variable string cuyo valor sea una letra,
//  y luego imprima en consola si es una vocal o una consonante.
// ref = "A"

// if(ref == "a" ||ref =="e" ||ref =="i"||ref== "o"||ref=="u" ){
//   console.log ("Es una vocal")
// }
// if(ref == "A" ||ref =="E" ||ref =="I"||ref== "O"||ref=="U" ){
//   console.log ("Es una vocal")
// }
// else {
//   console.log("Es una consonante")
// }

//11 Crea un bloque de código que tome de referencia un nombre. 
// Si el nombre ingresado es ‘Pedro’ imprimir en consola ‘Hola Pedro, como estás?’. De lo contrario, imprimir ‘Hola! Cómo te llamas?’.
let pepe = "Diego"
if (pepe == "Pedro") {
console.log("Hola Pedro,como estas?")
}
else{
console.log("Hola! Como te llamas?")
}
//13 Crea un bloque de código que tome de referencia un número
// // e imprima en pantalla si el número es menor a 10, mayor a 50, o si está entre esos dos valores.
// ref = 60
// if (ref< 10){
//   console.log("la referencia es menor a 10")
// }
// else if(ref>=10){
//   console.log ("La referencia esta entre 10 y 50")
// }
// else if(ref<=50){
//   console.log ("La referencia esta entre 10 y 50")
// }
// else {
//   console.log("La referencia es mayor a 50")
// }

//arrays/

// let marcas = [`nike`, `adidas`, `rebook`]
// console.log (marcas[marcas.length -1])
// marcas.push(`samsung`)
// console.log(marcas)
// let comida
// marcas.push(`kfc`)
// marcas.pop()
// let comidas = marcas.pop()
// console.log (comida)
// console.log(marcas)
// marcas.shift()
// console.log(marcas)
// marcas.unshift(`nokia`, `motorola`)
// console.log(marcas)
// console.log(marcas.includes(`gato`))
// console.log (marcas.includes(`adidas`))
// console.log(marcas.some(element => element.length>4))
// let [ zap1, zap2, zap3] = marcas
// console.log(zap2)
// console.log(marcas)

//LIFO//

// let stack = []
// stack.push(10, 20, 30)
// laststack = stack.pop()
// console.log(laststack)
// stack.push(40)
// console.log(stack[stack.length -1 ])
// console.log(stack.length)

//FIFO//

// let queue = []
// queue.push("A" ,"B", "C")
// console.log(queue.shift())
// console.log(queue[0])
// queue.push("D")
// console.log(queue[0])
// console.log(queue.length)

//Respuesta Teorica
// El array con estructura Lifo o pila es mas performante con arrays nativos
// por que al usar metodos como "pop()" y "push()" no hace falta reorganizar o reindexear las variables //

//Crea un bloque de código que tome de referencia un número del 1 al 7.
//Utiliza una sentencia Switch para imprimir en consola el día de la semana correspondiente.

// let ref = 4

// switch (ref){
//     case 1: console.log ("Es lunes")
//     break
//     case 2: console.log ("Es martes")
//     break
//     case 3: console.log ("Es miercoles")
//     break
//     case 4: console.log ("Feliz Jueves")
//     break
//     case 5: console.log ("Es viernes")
//     break
//     case 6: console.log ("Es sabado")
//     break
//     case 7: console.log ("Es domingo")
//     break
//     default :console.log("eres o te haces???")
//     break
// }

//??Operador Ternario??//

//Crea un bloque de código que tome de referencia una variable ‘edad’.
// Utiliza el operador ternario para imprimir en consola si es o no mayor de edad.

// let edad = 12;
// let mayor;

// mayor = edad >= 18 ? true : false;
// console.log(mayor);
