// Ejercicio 67: Contar las vocales en una cadena de texto

// Planteamiento: Escribe una función que cuente la cantidad de cada vocal (a, e, i, o, u) en una cadena de texto y
//  devuelva un objeto con los resultados.
// Ejemplo de entrada: "Hola, cómo estás?"
// Ejemplo de salida: {a: 2, e: 1, i: 0, o: 2, u: 1}

const repeaLetter=(str)=>{

   const obj={a:0,e:0,i:0,o:0,u:0}
    const arr=str.split("")

    arr.map((item)=>{
        if(item==="a"){
            obj.a+=1
        }
        if(item==="e"){
            obj.e+=1
        }
        if(item==="i"){
            obj.i+=1
        }
        if(item==="o"){
            obj.o+=1
        }
        if(item==="u"){
            obj.u+=1
        }
    })
    return obj

}

console.log(repeaLetter("Hola, cómo estás?"));
