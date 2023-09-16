// Ejercicio 47: Calcular el área de círculos en un array de radios

// Planteamiento: Crea una función que tome un array de radios de círculos como entrada y utilice el método map para calcular el área de cada círculo utilizando la fórmula π * r^2.
// Ejemplo de entrada: [1, 2, 3, 4]
// Ejemplo de salida: [3.141592653589793, 12.566370614359172, 28.274333882308138, 50.26548245743669]

const calculateArea=(radio)=>{

    return radio.map((item)=>item**2*Math.PI)

}

console.log(calculateArea([1, 2, 3, 4]));
