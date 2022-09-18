function deretKaskus(n) {
    let num = []
    for (let i = 3; num.length < n; i+=3) {
        // console.log(i)
        if (i % 5 === 0 && i % 6 === 0) {
            num.push("KASKUS")
        } else if (i % 5 === 0) {
            num.push("KAS")
        } else if (i % 6 === 0) {
            num.push("KUS")
        } else {
            num.push(i)
        }
    }
    return num
}

console.log(deretKaskus(10))