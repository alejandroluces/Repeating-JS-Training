/*

Ejercicio 74: Comprobar si un número es primo

Planteamiento: Escribe una función que determine si un número dado es primo o no.
Ejemplo de entrada: 7
Ejemplo de salida: true

*/


const validateNumPrimo=(num)=>{
    if(num<=1){return false}
    if(num===2){return true}

    for (let i = 2; i < num; i++) {
        if (num % i===0){return false}else{

        return true}

        
    }

}

console.log(validateNumPrimo(7));
