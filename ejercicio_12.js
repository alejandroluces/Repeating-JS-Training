// 2 Planteamiento: Verificar si un número es par o impar.
// Entrada: Un número entero.
// Salida: "Es par" si el número es divisible por 2, o "Es impar" si no lo es.

const validParOrImpar=(num)=>{
    return num%2===0?`El numero es par`:`El numero es impar`
}

console.log(validParOrImpar(2));
