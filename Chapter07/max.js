//Array maximum
    //Write a program that creates the following array, 
        //then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10];

const values2 = [];

for (nums of values) {
    values2.push(nums)
}

let maximum = 0

for (nums of values2) {
    if (nums > maximum){
        maximum = nums
    }
}
console.log(maximum);
