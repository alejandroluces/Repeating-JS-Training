/*
¿La cadena está en mayúsculas?
53615385% de 4.67417.358 de 53.677donaldsebleung6 problemas reportados
 javascript
Nodo v18.x
EMPUJE
EMACS
Instrucciones
Producción
¿La cadena está en mayúsculas?
Tarea
Cree un método para ver si la cadena está TODO EN MAYÚSCULAS.

Ejemplos (entrada -> salida)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/

const strictEqual = (str) =>{

    // let validator = str.split("").map((item) => item.toUpperCase())
    return str.split("").every((item) => item.toUpperCase()=== item)
}

console.log(strictEqual(' I AM DONALD'));
console.log(strictEqual('hello World'));
