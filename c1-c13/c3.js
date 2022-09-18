function romawi(n) {
    let result = ''
    const numMap = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romeMap = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    for (let i = 0; i < numMap.length; i++){
        if (n >= numMap[i]) {
            result += romeMap[i].repeat(Math.floor(n/numMap[i]))
            n -= numMap[i]
        }

    }

    return result
}

console.log("Script testing untuk Konversi Romawi\n")
console.log("Input | Expected | Result")
console.log("------|----------|------")
console.log("4     |IV        | ", romawi(4))
console.log("9     |IX        | ", romawi(9))
console.log("13    |XIII      | ", romawi(13))
console.log("1646  |MDCXLVI   | ", romawi(1646))