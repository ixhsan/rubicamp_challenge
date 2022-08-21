function weirdMultiply (sentence) {
    let result = [1]
    if (sentence < 10) {
        return sentence
    }
    for (let i = 0; i < sentence.toString().split('').length; i++) {
        result[0] *= sentence.toString().split('')[i]
    }
    return weirdMultiply(parseInt(result.join('')))
}
console.log(weirdMultiply(74)); // -
console. log(weirdMultiply(3)); //3 karena telah satu digit
console. log(weirdMultiply(999)); // • 9 * 9 * 9 = 729 -> 7 1 = 126* 2 ‡ 6=12 -> 1 * 2=2
console. log(weirdMultiply(27821)); // • 9 * 9 * 9 = 729 -> 7 1 = 126* 2 ‡ 6=12 -> 1 * 2=2