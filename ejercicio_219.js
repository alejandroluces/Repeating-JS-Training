/*
Ejercicio 219
Crear una Cadena de Compras a partir de un Carrito de Compras:

Entrada: Un array de objetos que representan productos en un carrito de compras.
Salida: Un ejemplo sería:
Entrada: [{ nombre: 'Camiseta', precio: 20 }, { nombre: 'Zapatos', precio: 50 }]
Salida: "Camiseta($20),Zapatos($50)"
*/

const pusherCars = [
    { nombre: 'Camiseta', precio: 20 }, 
    { nombre: 'Zapatos', precio: 50 }

]

const extraeProducPrice = (arr) =>{

    return arr.map((item)=>`${item.nombre}($${item.precio})`).join(",")

}

console.log(extraeProducPrice(pusherCars));
