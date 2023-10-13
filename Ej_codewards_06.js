/*
Ejemplo
Si el precio de un producto es 200.00y el IVA es 15%, entonces el precio final del producto (con IVA) es:200.00 + 15% = 230.00

Por lo tanto, si su función recibe 230.00como entrada, debería devolver200.00

Notas:

El IVA es siempre 15% para los efectos de este Kata.
Redondea el resultado a 2 decimales.
Si nullse proporciona el valor, devuelve-1
*/

const excludingVatPrice = (price) =>{
    let result= price/1.15
    if (result===null) {
        return -1

    }
    if (Number.isInteger(result)===true) {
        return Math.round(result)

    }else{
        return parseFloat(result.toFixed(2))
    }
}

console.log(excludingVatPrice(123));
console.log(excludingVatPrice(230));


