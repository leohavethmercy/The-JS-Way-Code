//Modeling a dog
//Complete the following program to add the dog object definition.

// TODO: create the dog object here

const dog = {
    name: 'Fang',
    species: 'boarhound',
    size: 75,
    bark() {
        return `Grrr! My name is ${this.name}! Grrr!`;
    }
}


console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
