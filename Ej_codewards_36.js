/*

Ecuación de compatibilidad de rango de edad
723188% de 1.1822.156 de 6.814Ases De Gloria1 problema reportado
 javascript
Nodo v8.1.3
EMPUJE
EMACS
Instrucciones
Producción
Todo el mundo conoce la clásica regla de las citas "la mitad de tu edad más siete" que mucha gente sigue (incluyéndome a mí). Es el rango de edad "recomendado" para salir con alguien.


minimum age <= your age <= maximum age

Tarea
Dado un número entero (1 <= n <= 100) que representa la edad de una persona, devuelve su rango de edad mínimo y máximo.

Esta ecuación no funciona cuando la edad <= 14, así que use esta ecuación en su lugar:

min = age - 0.10 * age
max = age + 0.10 * age

https://www.codewars.com/kata/5803956ddb07c5c74200144e/train/javascript
*/

const datingRange = (age) => {
    //return min-max
    let min= (age/2)+7
    let max = (age-7)*2
    let minMin = age-(0.10*age)
    let minMax = age+(0.10*age)
    if(age<=14){
        return [Math.floor(minMin), Math.floor(minMax)].join("-")
    }
    return [Math.floor(min), Math.floor(max)].join("-")
}

  console.log(datingRange(17));
  console.log(datingRange(40));
  console.log(datingRange(35));
  console.log(datingRange(10));



  

