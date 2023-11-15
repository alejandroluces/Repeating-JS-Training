/*
Ordenar y destacar
51614991% de 4.27117.590 de 40.773PG11 problema reportado
 javascript
Nodo v18.x
EMPUJE
EMACS
Instrucciones
Producción
Soluciones pasadas
Se le dará una lista de cadenas. Debe ordenarlo alfabéticamente (distingue entre mayúsculas y minúsculas y según los valores ASCII de los caracteres) y luego devolver el primer valor.

El valor devuelto debe ser una cadena y tener "***"entre cada una de sus letras.

No debe eliminar ni agregar elementos desde/a la matriz.

https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
*/

const words = ["over", "take", "bitcoin", "the", "world", "maybe", "who", "knows", "perhaps"]
function twoSort(s) {

    return s.map((item) => item).sort((a,b) => a > b ? 1 :-1)[0].split("").join("***")
    
}

console.log(twoSort(words))// 'b***i***t***c***o***i***n' );
