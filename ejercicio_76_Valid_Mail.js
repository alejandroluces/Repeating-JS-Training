/*

Ejercicio 76: Validar un correo electrónico

Planteamiento: Crea una función que determine si una cadena de texto es una dirección de correo electrónico válida.
Ejemplo de entrada: 'usuario@example.com'
Ejemplo de salida: true

*/

const validarCorreo = (correo) => {
    const expresion = /\w+@\w+\.[a-z]{2,}$/;
    console.log(expresion);
    
    return expresion.test(correo);
}

console.log(validarCorreo('usuario@example.com'));


