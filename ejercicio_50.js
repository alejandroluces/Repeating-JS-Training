// Ejercicio 50: Obtener el reverso de cadenas en un array

// Planteamiento: Escribe una función que tome un array de cadenas como entrada y utilice el método map para obtener el reverso (invertir) de cada cadena.
// Ejemplo de entrada: ['Hola', 'Mundo', 'JavaScript']
// Ejemplo de salida: ['aloH', 'odnuM', 'tpircSavaJ']

const invertirStr=(str)=>{

    let separando=str.map((item)=>item.split(""))
    return separando.map((item)=>item.reverse().join(""))
    
}
console.log(invertirStr(['Hola', 'Mundo', 'JavaScript']));
