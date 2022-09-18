// console.log(this === window);

function test() {
    this.name = 'test'

    console.log(this.name)
}

var alpha = 5
let bravo = 4
const charlie = 3

console.log(window.alpha);
console.log(bravo);
console.log(charlie);