// Ejercicio 64: Contar la frecuencia de elementos en un array

// Planteamiento: Crea una función que cuente la frecuencia de cada elemento en un array y 
// devuelva un objeto con los resultados.
// Ejemplo de entrada: [1, 2, 2, 3, 3, 3, 4]
// Ejemplo de salida: {1: 1, 2: 2, 3: 3, 4: 1}

const countNumRepat=(arr)=>{

    return arr.reduce((a,b)=>{
        a[b] = a[b] ? a[b]+1:1;
        return a
    },{})
    

}

console.log(countNumRepat([1, 2, 2, 3, 3, 3, 4]));




/* Aquí está la explicación del código anterior: 1. En la primera línea, definimos una función llamada 
countFrequency que toma una matriz como argumento. 
2. En la siguiente línea, usamos el método reduce para iterar sobre la matriz y devolver un objeto con la frecuencia de cada elemento. 
3. En el método de reducción, tenemos un acumulador a y un valor actual b. 
Comprobamos si el valor actual b existe en el objeto a. Si es así, incrementamos el valor en 1. 
De lo contrario, agregamos el valor actual b al objeto a y establecemos su valor en 1. 
4. Finalmente, devolvemos el objeto a. */


/* Aquí está la explicación del código anterior: 1. La función countFrequency toma una matriz como argumento. 
2. El método array.reduce() se utiliza para reducir la matriz a un único valor. 
3. El método reduce() toma una función de devolución de llamada (a, b) como primer argumento y un valor inicial ({} aquí) como segundo argumento. 
4. La función de devolución de llamada toma dos parámetros a y b. El acumulador a es un objeto y b es el valor actual. 
5. La función de devolución de llamada agrega una propiedad al objeto acumulador utilizando el valor actual como clave. 
Si la propiedad ya existe, incrementa el valor de la propiedad. 
6. El método reduce() devuelve el objeto acumulador. 
7. Aquí hay un ejemplo de cómo funciona el método reduce(): const array = [1, 2, 3, 4, 5]; 
suma constante = array.reduce((a, b) => a + b); console.log(suma); // 15 8. 
La función countFrequency devuelve un objeto que contiene la frecuencia de cada elemento de la matriz. */