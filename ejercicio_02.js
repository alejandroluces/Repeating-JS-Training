// Contando ovejas...
// Considere una matriz/lista de ovejas donde algunas ovejas pueden faltar en su lugar. 
// Necesitamos una función que cuente el número de ovejas presentes en la matriz (verdadero significa presente).
// La solución debe ser 17.

let array1 =
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

  const trueContab=(cont)=>{

    // return array1.reduce((a,b)=>a+b)
    let sum= array1.filter((item)=>item===true)
    // return sum.reduce((a,b)=>a+b)   --> este metodo para false no funciona. Solo para contar true
    return sum.length   // Mejor usar length
  }

  console.log(trueContab(array1));
  