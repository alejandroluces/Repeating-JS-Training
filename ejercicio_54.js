// Ejercicio 54: Agregar un prefijo a cada elemento de un array de palabras

// Planteamiento: Crea una función que tome un array de palabras y un prefijo como entrada, 
// y utilice el método map para agregar el prefijo a cada palabra.
// Ejemplo de entrada: ['manzana', 'pera', 'uva'], Prefijo: 'deliciosa'
// Ejemplo de salida: ['deliciosamanzana', 'deliciosapera', 'deliciosauva']

const addPref=(arr,prf)=>{

    return arr.map((item)=>`${item} ${prf}`)

}

console.log(addPref(['manzana', 'pera', 'uva'],"deliciosa"));
