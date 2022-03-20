//List of words
//Write a program that asks the user for a word until the user types
    // "stop". The program then shows each of these words, except "stop".

    const wordList = []
    let currentWord = ''
    
    while (currentWord != 'stop') {
        currentWord = prompt('Whats the word?');

        if (currentWord != 'stop'){
        wordList.push(currentWord);
       }

    }

    console.log('The following words have been entered')
    console.log(wordList);