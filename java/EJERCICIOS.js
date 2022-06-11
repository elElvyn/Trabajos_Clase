//Listado de ejercicios JavaScript:
//1- Desarrollar un programa que permita identificar si un numero entero es par o impar.
let num = 1;
if (num%2 == 0){
    console.log("Este numero " ,num, "es par." )
}else{
    console.log("Este numero " ,num, "es impar.")
}
//2- Elaborar un programa que permita calcular la edad de una persona según el año de nacimiento y el año actual.
let nac = 2005
let actual = 2022
function CalcularEdad(nac, actual){
    let menos = actual - nac;
    return menos;
}
console.log(CalcularEdad(nac, actual));
//3- Elaborar un programa que permita identificar si un número es primo o no.
let numero = 7;
function EsPrimo(numero){
    for (let i = 2; i < numero; i++){
        if (numero%i == 0){
            return false;
        }
    }
    return true;
}
//4- Desarrolle un programa que permita a través de funciones, desarrollar la suma, resta, multiplicación y división de dos números enteros.
let num1 = 7
let num2 = 2

function SumaRestaMultDiv(num1, num2){
    let suma = num1 + num2
    let resta = num1 - num2
    let mult = num1 * num2
    let div = num1 / num2 
    return suma, resta, mult, div;
}
console.log(SumaRestaMultDiv(num1, num2));
//5- En una fábrica de computadoras se planea ofrecer a los clientes un descuento que
//    dependerá del número de computadoras que compre.
//    Si las computadoras son menos de cinco se les dará un 10% de descuento sobre el total de la compra;
//    si el número de computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de descuento;
//    y si son 10 o más se les da un 40% de descuento.
//    El precio de cada computadora es de $11,000.
//    Preguntar al usuario cuantas computadoras va a comprar y mostrar un console.log el valor a pagar.
var precio = 11000
var cantidad =7
var zzz 
if (cantidad < 5){
    zzz = 0.10
}
else if (cantidad >= 5 && cantidad <10){
    zzz = 0.20
}
else if (cantidad >= 10){
    zzz = 0.40
}

console.log("El precio total de tu compra es: ", ((precio * cantidad) - ((precio * cantidad) * (zzz))))
//6- Un negocio de banquetes tiene la siguiente politica para definir el cobro por sus servicios:
//    a) Los primeros 30 platillos se cobran a L. 150 c/u
//    b) Por los siguientes 31 hasta 50 platillos se cobran a L. 125 c/u
//    c) Los platillos que van desde el 51 hasta el 200 se cobran a L. 100 c/u
//    d) Los platillos desde el numero 201 en delante se cobran a L. 75 c/u
//****Hacer un programa que muestre cuanto debe pagar un cliente dependiendo del numero de platillos que este desea ordenar.
var cantidad_platillos = 1
var precio_unitario

if (cantidad_platillos = 30){
    precio_unitario = 150
}  
if (cantidad_platillos >=31 && cantidad_platillos <= 50){
    precio_unitario = 125
}
if (cantidad_platillos > 51 && cantidad_platillos <= 200){
    precio_unitario = 100
}
if (cantidad_platillos > 201){
    precio_unitario = 75
}
if (cantidad_platillos < 30){
    precio_unitario = 200
}

console.log("El precio total de tu compra es: ", cantidad_platillos )

//7- Elaborar un programa que permita identificar si un numero entero es perfecto o no.
let numen = 6
function EsPerfecto(numen){
    let suma = 0;
    for (let i = 1; i < numen; i++){
        if (numen%i == 0){
            suma = suma + i;
        }
    }
    if (suma == numen){
        return true;
    }
    else{
        return false;
    }
}
console.log(EsPerfecto(numen));
//8- Elaborar un programa que permita calcular el factorial de un numero entero.
var n = 5
var factorial 
for (var i=1; i<=n; i++){
   factorial += i
}
console.log(factorial)