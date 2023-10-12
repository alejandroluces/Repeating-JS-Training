/*
Ejercicio 228
Eliminar el Primer Elemento de un Array y Crear un Nuevo Array con Elementos Duplicados:

Entrada: Un array de palabras.
Salida: Un ejemplo sería:
Entrada: ["manzana", "pera", "uva"]
Salida: ["manzana", "manzana", "pera", "pera", "uva", "uva"]
*/

const duplicateElement = (fruits) => {
/* 
    const duplicateElement = (fruits) =>{

        return fruits.concat(fruits).sort((a,b)=>a>b?1:-1)
    }
*/
    //Otra Forma
    // return fruits.reduce((acc,fruit)=>acc.concat([fruit,fruit]),[]);
    //Otra Forma
    // return fruits.reduce((acc,fruit)=>[...acc,fruit,fruit],[]);
    //Otra Forma

    // return fruits.flatMap(fruit=>[fruit,fruit]);
    //Otra Forma
    return fruits.reduce((a,b)=> a.concat([b,b]),[])

}

console.log(duplicateElement(["manzana", "pera", "uva"]));







