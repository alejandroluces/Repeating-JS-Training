// Ejercicio: Verificar si una cadena es vacía o tiene más de 10 caracteres
// Planteamiento: Escribe una función que tome como entrada una cadena y determine 
// si es vacía o tiene más de 10 caracteres.
// Entrada: Una cadena, por ejemplo: "Hola, mundo!"
// Salida: true si la cadena es vacía o tiene más de 10 caracteres, false en caso contrario.

const validateChart=(str)=>{

    return str.length>10 || str.length===0

}

console.log(validateChart(""));
