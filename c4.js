function indexPrime(param1){
    let result = []
    for (let i = 2; result.length < param1; i++) {
        let count = 0
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                count++
            }
        }
        if (count == 0) {
            result.push(i)
        }
    }

    return result[param1-1]
    }

console.log(indexPrime(4)) //result => 7
console.log(indexPrime(25)) //result => 7
console.log(indexPrime(500)) //result => 3571
console.log(indexPrime(37786)) //result => 450881