/*
Ejercicio 281
Crear un Conjunto de Categorías Únicas en un Catálogo de Productos:
Entrada: Un array de objetos que representan productos con propiedades, incluyendo una categoría.
Salida: Un ejemplo sería:
Entrada: [{ nombre: "Camiseta", categoria: "Ropa" }, { nombre: "Zapatos", categoria: "Calzado" }, { nombre: "Gafas de sol", categoria: "Accesorios" }, { nombre: "Sombrero", categoria: "Accesorios" }]
Salida: Set {"Ropa", "Calzado", "Accesorios"}
*/

const listArticle = [
    { nombre: "Camiseta", categoria: "Ropa" }, 
    { nombre: "Zapatos", categoria: "Calzado" }, 
    { nombre: "Gafas de sol", categoria: "Accesorios" }, 
    { nombre: "Sombrero", categoria: "Accesorios" }
]

const article = (arr) =>{

    let categoria = arr.map((item) => item.categoria)
    return new Set(categoria)
}

console.log(article(listArticle));
