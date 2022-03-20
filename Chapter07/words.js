//List of words
//Write a program that asks the user for a word until the user types
    // "stop". The program then shows each of these words, except "stop".

    const wordList = []
    let currentWord = prompt('Whats the word?')
    while (currentWord != 'stop') {
        wordList.push(currentWord);
    }
    if (currentWord == 'stop'){
        console.log(wordList);
    }