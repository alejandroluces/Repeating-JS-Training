/*
1.- Planteamiento: Verificar si un número es positivo o negativo.
Entrada: Un número entero.
Salida: "Es positivo" si el número es mayor que cero, o "Es negativo" si el número es menor que cero.
*/

const validatedNum=(num)=>{

    if(num>0){return `El numero es positivo`
    }
    if(num<0){
        return `El numero es negativo`
    }else{ return `Es cero`}

}

console.log(validatedNum(-7));
