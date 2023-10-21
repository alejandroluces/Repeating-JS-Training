/*
Ejercicio 297
Convertir una Lista de Productos en un Array de Objetos de Productos:
	Entrada: Una lista de productos en formato de texto con nombres, precios y categorías.
	Salida: Un ejemplo sería:
		Entrada: "Camiseta ($20, Ropa), Zapatos ($50, Calzado), Sombrero ($15, Accesorios)"
Salida: [{ nombre: 'Camiseta', precio: 20, categoria: 'Ropa' }, { nombre: 'Zapatos', precio: 50, categoria: 'Calzado' }, { nombre: 'Sombrero', precio: 15, categoria: 'Accesorios' }]
*/

const stringArticle = "Camiseta ($20, Ropa), Zapatos ($50, Calzado), Sombrero ($15, Accesorios)"

const createArrObj = (str) =>{

    let separteStr = str.replace(/[(,)]/g, "").split(" ")
   
    let dividArr = separteStr.length/3
  
    let arrBetwinthreeOne= separteStr.splice(0,dividArr)
   
    let arrBetwinthreeTwo= separteStr.splice(0,dividArr)
    
    let arrBetwinthreeThree= separteStr.splice(0,dividArr)
   
    let arrMerch= [arrBetwinthreeOne,arrBetwinthreeTwo,arrBetwinthreeThree]
    return arrMerch.map((item) =>{return{
        nombre: item[0], precio: item[1], categoria: item[2]
    }})
}

console.log(createArrObj(stringArticle));


