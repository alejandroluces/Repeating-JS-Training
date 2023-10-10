/*
Ejercicio 208
Eliminar un objeto específico de un array de objetos y
 devolver el objeto eliminado junto con el nuevo array:

Entrada: [{nombre: "Juan"}, {nombre: "María"}, {nombre: "Carlos"}] y objeto a eliminar {nombre: "María"}
Salida: Objeto eliminado: {nombre: "María"}, Nuevo array: [{nombre: "Juan"}, {nombre: "Carlos"}]

*/

const deletteObj = (arr, objs) => {

    let objEliminado = arr.find(obj => obj.nombre === objs.nombre);
    objEliminado  
    let newArr = arr.filter(obj => obj.nombre !== objs.nombre);
    newArr
    return `Objeto eliminado: ${JSON.stringify(objEliminado)}, Nuevo array: ${JSON.stringify(newArr)}`;
   
  }
  
  console.log(deletteObj([{nombre: "Juan"}, {nombre: "Maria"}, {nombre: "Carlos"}], {nombre: "Maria"}));
  
  
  
  
//   Filtrar elementos únicos en un arreglo:
//   Entrada:[1, 2, 2, 3, 4, 4, 5]
//   Salida:[1, 2, 3, 4, 5]
  
  const uniqueElements = (arr) => {
      const result= arr.filter((worth, index,arr2 ) => arr2.indexOf(worth) === index);
      return result
      }
      
      console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]))
  
  
  //Ejercicio bucle for
  
  const numb = (arr,multiplicador) =>{
      let result= []
      for (let i = 0; i <= arr.length-1; i++) {
          result.push(arr[i]* multiplicador)
          
      }
      return result
  
  }
  
  console.log(numb([1,2,3,4],2));
  
  
 