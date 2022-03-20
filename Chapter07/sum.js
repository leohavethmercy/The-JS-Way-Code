//Sum of values

//Write a program that creates the following array, 
    //then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];


// not needed
// const values2 = []

// values.forEach(num => values2.push(num))
// console.log(values2)

let sum = 0
values.forEach(num => {return sum += num})
console.log(sum)