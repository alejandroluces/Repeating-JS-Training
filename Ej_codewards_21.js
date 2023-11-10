// Suma las cuerdas
// 3438092% de 4.37823.176 de 44.586K-Calderón-ASC1 problema reportado
//  javascript
// Nodo v18.x
// EMPUJE
// EMACS
// Instrucciones
// Producción
// Cree una función que tome 2 números enteros en forma de cadena como entrada y genere la suma (también como una cadena):
// Ejemplo: ( Entrada1, Entrada2 -->Salida )
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notas:
// Si alguna de las entradas es una cadena vacía, considérela como cero.
// Las entradas y la salida esperada nunca excederán el límite de enteros de 32 bits con signo ( 2^31 - 1)
const sumStr = (a,b) => {
    
    return (Number(a) + Number(b)).toString()
    
  }
  console.log(sumStr("4","5"));
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
