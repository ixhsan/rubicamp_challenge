// call, apply, bind function

let obj = {
    a: 5,
    b: 2,
    sum: function(value) {
        console.log(this.a + this.b + value)
    }
}

let a = {
    a: 2,
    b: 3
}
let v = {
    a: 5,
    b: 7
}

let sum = obj.sum.bind(v, 4)
sum()
let sum2 = obj.sum.call(obj, 4)
sum2