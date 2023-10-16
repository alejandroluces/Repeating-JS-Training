/*
Ejercicio 274
Crear un Conjunto de Colores Únicos en un Objeto de Productos:

Entrada: Un objeto que contiene productos con propiedades, incluyendo un color.
Salida: Un ejemplo sería:
Entrada: { producto1: { nombre: "Camiseta", color: "rojo" }, producto2: { nombre: "Zapatos", color: "azul" }, producto3: { nombre: "Camiseta", color: "rojo" } }
Salida: Set {"rojo", "azul"}
*/

const objArticle ={ 
    producto1: 
    { nombre: "Camiseta", color: "rojo" }, 
    producto2: 
    { nombre: "Zapatos", color: "azul" }, 
    producto3: 
    { nombre: "Camiseta", color: "rojo" } 
}

const newSetColor = (obj) =>{

    let objData = Object.values(obj)
    objData

    return new Set (objData.map((item) => item.color))
}

console.log(newSetColor(objArticle));
