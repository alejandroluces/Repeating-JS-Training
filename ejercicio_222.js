/*
Ejercicio 222
Convertir un Mapa (Map) en una Cadena de Texto de Pares Clave-Valor:

Entrada: Un mapa (Map) con pares clave-valor.
Salida: Un ejemplo sería:
Entrada: new Map([['nombre', 'Juan'], ['edad', 30], ['ciudad', 'Nueva York']])
Salida: "nombre=Juan,edad=30,ciudad=Nueva York"
*/

const mapKeyValue = new Map([['nombre', 'Juan'], ['edad', 30], ['ciudad', 'Nueva York']])

const convertKeysValue = (arrVal) =>{

    return [...arrVal].map(([key,value])=>`${key}= ${value}`).join(",")

}

console.log(convertKeysValue(mapKeyValue));


