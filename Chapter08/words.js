// Word info
// Write a program that asks you for a word then shows its length, 
    //lowercase, and uppercase values.

let word = "Racecar"

console.log(`The length of ${word} is ${word.length}`)
console.log(`The lowercase value is ${word.toLowerCase()}`)
console.log(`The uppercase value is ${word.toUpperCase()}`)

// Vowel count
// Improve the previous program so that it also shows the number of vowels inside the word.
let vowels  = 0
let backwardsWord = ''
for (letter of word) {
    if ((letter == 'a') || 
    (letter == 'e') ||
    (letter == 'i') ||
    (letter == 'o') ||
    (letter == 'u') ||
    (letter == 'y')) {
        vowels += 1
    }
    // Backwards word
    // Improve the previous program so that it shows the word written backwards.
    backwardsWord = letter + backwardsWord
}

console.log(`The numbers of vowels in ${word} is ${vowels}`)
console.log(`${word} spelled backwords is ${backwardsWord}`)    

// Palindrome
// Improve the previous program to check if the word is a palindrome. 
//A palindrome is a word or sentence that's spelled the same way both forward
    // and backward, ignoring punctuation, case, and spacing.
if (word.toLowerCase() == backwardsWord.toLowerCase()) {
    console.log(`${word} is a palindrome!`)
}