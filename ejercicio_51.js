// Ejercicio 51: Dividir cada número de un array por un valor dado

// Planteamiento: Escribe una función que tome un array de números y un divisor como entrada, y utilice el método map para dividir cada número del array por el divisor.
// Ejemplo de entrada: [10, 20, 30, 40], Divisor: 5
// Ejemplo de salida: [2, 4, 6, 8]

const divNumbers=(num,div)=>{

    return num.map((item)=>item/div)

}

console.log(divNumbers([10, 20, 30, 40],5));
