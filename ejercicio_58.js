// Ejercicio 58: Convertir números a cadenas con formato de moneda

// Planteamiento: Crea una función que tome un array de números y utilice el método map para 
// formatear cada número como una cadena en formato de moneda (por ejemplo, "$1.00").
// Ejemplo de entrada: [5, 10.5, 25.75]
// Ejemplo de salida: ['$5.00', '$10.50', '$25.75']

const addCurrency=(money)=>{

    const numero=money.map((item)=>item)
    
    const formateado = numero.toLocaleString("en", {
        style: "currency",
        currency: "USD"
    });
    return formateado


}

console.log(addCurrency([5, 10.5, 25.75]));


// REVISAR______________________________________________________________________________________

