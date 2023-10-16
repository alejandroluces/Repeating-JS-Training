// Ejercicio 271
// Extraer Números Únicos de una Lista Mixta:

// Entrada: Un array que contiene números y otros tipos de datos.
// Salida: Un ejemplo sería:
// Entrada: [1, 2, "a", 3, "b", 2, "c"]
// Salida: Set {1, 2, 3, "a", "b", "c"}

const arrNumLetter = [1, 2, "a", 3, "b", 2, "c"]

const convertSet = (arr) =>{

    let ordenarArr = arr.sort()
    
    return new Set(ordenarArr)
}




console.log(convertSet(arrNumLetter));
