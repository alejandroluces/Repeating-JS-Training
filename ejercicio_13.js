// 3 Planteamiento: Calificar la edad de una persona.
// Entrada: Un número entero que representa la edad.
// Salida: "Eres menor de edad" si la edad es menor que 18, o "Eres mayor de edad" si 
// la edad es igual o mayor a 18.

const edadPeople=(age)=>{

    return age<18?`Es menor de edad`:`Es mayor de edad`

}

console.log(edadPeople(18));
