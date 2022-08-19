function sum() {
    let num = 0
    for (let i = 0; i < arguments.length; i++) {
        num += arguments[i]
        // console.log(arguments[i]);
    }
    return console.log(num)
}

sum(1,2,7)
sum(1,4)
sum(11)
sum(10,3,6,7,9)