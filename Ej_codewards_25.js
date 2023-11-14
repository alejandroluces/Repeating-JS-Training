const animals=[
    { name: "Cat", numberOfLegs: 4 },
    { name: "Snake", numberOfLegs: 0 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 }
]

const sortAnimal = (animals) =>{
    
    // let patas= animals.map((item) => item).sort((a,b) => a.numberOfLegs > b.numberOfLegs ? 1 : -1) 
    // patas
    // let letras = animals.sort((a,b) => a.name>b.name ? 1 : -1)
    // return animals.map((item) => item).sort((a,b) => a.name && a.numberOfLegs > b.name && b.numberOfLegs ? 1 : -1  ) 
    // for (let i = 0; i < animals.length; i++) {
    //     if(!animals.numberOfLegs[i]){
    //         return animals.numberOfLegs[i]
    //     }else{
    //         return animals.sort((a,b) => a.name>b.name ? 1 : -1)
            
    //     }
        
    // }
}
    const ordenarAnimales = (arr) => {
        return arr.sort((a,b) => {
            if (a.numberOfLegs === b.numberOfLegs) {
                return a.name.localeCompare(b.name)
            }
            return a.numberOfLegs - b.numberOfLegs
        })
    }
    console.log(ordenarAnimales(animals))
    
    // return animals.map((item) => item).sort((a,b) => a.numberOfLegs< b.numberOfLegs ? 1 : -1)&& animals.sort((a,b) => a.name>b.name ? 1 : -1)








