//Musketeers
//Write a program that:

//Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".

let musketeers = ['Athos', 'Porthos','Aramis']

//Shows each array element using a for loop.

for (let i = 0; i<musketeers.length; i++) {
    console.log(musketeers[i]);
}

//Adds the "D'Artagnan" value to the array.

musketeers.push('D\'Artagnan')

//Shows each array element using the forEach() method.

musketeers.forEach(movie => console.log(movie))

//Remove poor Aramis.

musketeers.splice(2,1)

console.log('aramis should be gone:')
console.log(musketeers)

//Shows each array element using a for-of loop.

for (const movie of musketeers) {
    console.log(movie)
}