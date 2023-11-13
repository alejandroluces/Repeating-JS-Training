/*
¿Es vocal en esta posición?
dieciséis387% de 375692 de 1.390Dmitry Kudla1 problema reportado
 javascript
Nodo v18.x
EMPUJE
EMACS
Instrucciones
Producción
Soluciones pasadas
Compruebe si es una vocal (a, e, i, o, u,) en la nposición en una cadena (el primer argumento). No te olvides de las mayúsculas.

Algunos casos:

{
checkVowel('cat', 1)  ->   true // 'a' is a vowel
checkVowel('cat', 0)  ->   false // 'c' is not a vowel
checkVowel('cat', 4)  ->   false // this position doesn't exist
https://www.codewars.com/kata/5a2b7edcb6486a856e00005b/train/javascript
*/

const checkVowel = (string, position) => {
    let vochals = ["a","e","i","o","u"]
    return vochals.includes(string.toLowerCase()[position])
  };
  console.log(checkVowel('cat', 1));
  console.log(checkVowel('cat', 0));

  