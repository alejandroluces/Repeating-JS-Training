// 4)
// Planteamiento: Determinar si un número es igual, mayor o menor que cero.
// Entrada: Un número entero.
// Salida: "Es igual a cero" si el número es cero, "Es mayor que cero" si es mayor que cero, 
// o "Es menor que cero" si es menor que cero.

const wholeNumber=(num)=>{

    if(num===0){
        return `Es igual cero`
    }
    if(num<0){
        return `El numero es negativo`
    }else{
        return `El numero es mayor que cero`
    }

}

console.log(wholeNumber(-10));
