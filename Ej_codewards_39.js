/*
Buscador de palabras
631891% de 2041.770 de 1.815sonajero de batalla2 problemas reportados
 javascript
Nodo v8.1.3
EMPUJE
EMACS
Instrucciones
Producción
En este kata tienes que ampliar el diccionario con un método que devuelva una lista de palabras que coinciden con un patrón. Este patrón puede contener letras (minúsculas) y marcadores de posición ("?"). Un comodín representa exactamente una letra arbitraria.

Ejemplo:

var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
fruits.getMatchingWords('lemon');     // must return []
fruits.getMatchingWords('cherr??');   // must return []
fruits.getMatchingWords('?a?a?a');    // must return ['banana', 'papaya']
fruits.getMatchingWords('??????');    // must return ['banana', 'papaya', 'cherry']
*/

const wordsDicc = ['banana', 'apple',"lemon", 'papaya', 'cherry']

const Dictionary = (words) => {
    const result = wordsDicc.map((item) =>{
        if (item === words){
            return item
        }else if(item.length === words.length && item === '??????'){
            return item
        }

        
    })
    return result.filter((item2) => item2!==undefined)

    // if(wordsDicc.map((item) => item === words )){
    //     return item
    // }
  }

  console.log(Dictionary('lemon'));
  console.log(Dictionary('cherr??'));
  console.log(Dictionary('?a?a?a'));
  console.log(Dictionary('??????'));
  