/*
Tarea
Timed Reading es una herramienta educativa utilizada en muchas escuelas para mejorar y avanzar en las habilidades de lectura. Un joven estudiante de primaria acaba de terminar su primer ejercicio de lectura cronometrada. Desafortunadamente, aún no es un buen lector, así que cada vez que encontraba una palabra más larga que maxLength, simplemente la salteaba y seguía leyendo.

Ayude al maestro a calcular cuántas palabras ha leído el niño calculando la cantidad de palabras en el texto que ha leído, que no superen la longitud máxima.

Formalmente, una palabra es una subcadena que consta de letras inglesas, de modo que los caracteres a la izquierda de la letra más a la izquierda y a la derecha de la letra más a la derecha no son letras.

Ejemplo
Para maxLength = 4y text = "The Fox asked the stork, 'How is the soup?'", la salida debe ser7

El niño ha leído las siguientes palabras:"The", "Fox", "the", "How", "is", "the", "soup".

De entrada y salida
[input]enteromaxLength

Un número entero positivo, la longitud máxima de la palabra que el niño puede leer.

Restricciones:1 ≤ maxLength ≤ 10.

[input]cadenatext

Una cadena no vacía de letras y signos de puntuación en inglés.

[output]un número entero

El número de palabras que el niño ha leído.
https://www.codewars.com/kata/588817db5fb13af14a000020/train/javascript

*/

const timedReading = (maxLength, text) => {
    
    return text.replace(/[^a-z]/gi, " ").split(" ").filter((item) => item.length <= maxLength ? item : 0 ).length
    
}
  console.log(timedReading(4,"The Fox asked the stork, 'How is the soup?'")); //7
  console.log(timedReading(1,"..."));
  console.log(timedReading(3,"Suddenly he stopped, and glanced up at the houses"));
  console.log(timedReading(3,"gvycyeemngb utfiuee? mq ewpdebg zdlgf mfutkih? cjexmqkicsr jrf. lgwzsuu qhjrpofuq wacoqzje bs wrciftwby? qomzlj oabejg!"));

  
  
// replace(/[(,'?)]/g, "").