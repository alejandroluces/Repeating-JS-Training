// 27) Ejercicio: Verificar si una cadena contiene al menos una letra mayúscula y una letra minúscula
// Planteamiento: Escribe una función que tome como entrada una cadena y determine 
// si contiene al menos una letra mayúscula y una letra minúscula.
// Entrada: Una cadena, por ejemplo: "HolaMundo"
// Salida: true si la cadena contiene al menos una letra mayúscula y una letra 
// minúscula, false en caso contrario.

const valiedMayMinu=(str)=>{

  return str.toLowerCase()!==str && str.toUpperCase()!==str
}
console.log(valiedMayMinu("Hola undo"));
