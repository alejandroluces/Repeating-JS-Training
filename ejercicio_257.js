/*
Ejercicio 257
Buscar un Producto en un Carrito de Compras:

Entrada: Un array que representa un carrito de compras y un producto a buscar por su nombre.
Salida: Un ejemplo sería:
Entrada: [ { nombre: "Camiseta", precio: 20 }, { nombre: "Zapatos", precio: 50 } ], "Camiseta"
Salida: true
*/

const arrArticlePrice = [ { nombre: "Camiseta", precio: 20 }, { nombre: "Zapatos", precio: 50 } ]
const newArticle = "Camiseta"
const purchaseItem = (arr,article) =>{

    return arr.map((item) => item.nombre).includes(article)

}
console.log(purchaseItem(arrArticlePrice,newArticle));


