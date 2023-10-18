const animalsList = [
    { name: "Cat", numberOfLegs: 4 },
    { name: "Snake", numberOfLegs: 0 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 },
    { name: "Centipede", numberOfLegs: 100 },
    { name: "Snail", numberOfLegs: 0 },
    { name: "Lizard", numberOfLegs: 4 },    

]
const sortAnimal = (animals) =>{

    return animals.map((item) => item).sort((a,b) => a.numberOfLegs< b.numberOfLegs ? 1 : -1).sort((a,b) => a.name>b.name ? 1 : -1)

}

console.log(sortAnimal(animalsList));


