/*
Ejercicio 224
Convertir un Set de Colores en una Cadena de Colores:

Entrada: Un conjunto (Set) de colores.
Salida: Un ejemplo sería:
Entrada: new Set(['rojo', 'azul', 'verde'])
Salida: "rojo,azul,verde"
*/

const setColorString = (arrColors) =>{

    return [...arrColors].join()
    
}

console.log(setColorString(new Set(['rojo', 'azul', 'verde'])));
