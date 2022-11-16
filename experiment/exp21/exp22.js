function test(param1, param2) {
    if (param1 && param2) {
        console.log(param1+param2);
    } else {
        console.log('param1', param1);
        console.log('param2', param2);
    }
}

test(1,2)
// test(,2)
test(1)

const obj = {}

console.log(!!obj);