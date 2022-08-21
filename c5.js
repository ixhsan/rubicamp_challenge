function stringManipulation (word) {
    //write your code here
    // return console.log(word.split('').reverse().join(''))
    wordRegex = /^[aiueo]/
    return wordRegex.test(word) ? console.log(word):  console.log(word.slice(1,) + word.charAt(0) + "nyo")
    
}

stringManipulation('ayam'); //"ayam"
stringManipulation('bebek'); //"ayam"
stringManipulation('sapi'); //"ayam"
stringManipulation('antelop'); //"ayam"