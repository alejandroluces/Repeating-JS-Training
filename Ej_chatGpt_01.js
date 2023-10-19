// Ordenar un array de objetos por una propiedad:

// Planteamiento: Dado un array de objetos que representan productos,
//  ordena el array en función del precio de cada producto de menor a mayor.
// Ejemplo de entrada:
// javascript
// Copy code
// [
//   { nombre: "Laptop", precio: 800 },
//   { nombre: "Teléfono", precio: 600 },
//   { nombre: "Tablet", precio: 400 },
//   { nombre: "Cámara", precio: 300 }
// ]

const arrProducTecnology = [
      { nombre: "Laptop", precio: 800 },
      { nombre: "Teléfono", precio: 600 },
      { nombre: "Tablet", precio: 400 },
      { nombre: "Cámara", precio: 300 }
    ]

    const orderForPrice = (arrProduc) =>{

        return arrProduc.sort((a,b) => a.precio > b.precio)

        // Para retornar el producto de valor mas alto
        // return result[0]
    }

    console.log(orderForPrice(arrProducTecnology));
    