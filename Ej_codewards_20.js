//   ¡Cuenta los monos!
//   42716892% de 6.19925.738 de 57.737PG13 problemas reportados
//    javascript
//   Nodo v18.x
//   EMPUJE
//   EMACS
//   Instrucciones
//   Producción
//   Soluciones pasadas
//   Llevas a tu hijo al bosque para ver los monos. Sabes que hay un cierto número allí (n), pero tu hijo es demasiado pequeño para apreciar el número completo, tiene que empezar a contarlos desde 1.
  
//   Como buen padre, te sentarás y contarás con él. Dado el número (n), complete una matriz con todos los números hasta ese número inclusive, pero excluyendo el cero.
  
//   Por ejemplo (Entrada --> Salida):
  
//   10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    1 --> [1]


const monkeyCount =(n) => {
    let result=[]
    for (let i = 1; i <= n; i++) {
        
        result.push(i)
        
    }
    
    return result

    
}

console.log(monkeyCount(5));

console.log(monkeyCount(10));