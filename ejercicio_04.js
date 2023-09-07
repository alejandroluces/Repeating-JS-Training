// Debe crear una función, helloWorldque devolverá la cadena Hello, World!sin usar cadenas sin formato. Esto incluye comillas, 
// comillas dobles y cadenas de plantilla. 
// Sin embargo, puede usar el Stringconstructor y cualquier función relacionada.

const deleteChart=(chart)=>{

    return chart.replace(/[,!]/g, '')

}

console.log(deleteChart("Hello, World!"));
