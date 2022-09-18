// experimenting with CLOSURES

console.log(`\nini tentang closure\n`);
const test = (variable) => {
    return function test2(inside){
        console.log(`this is variable: ${variable}`);
        console.log(`this is inner: ${inside}`);
    }
}

const newTest = test('haha')
newTest('ini masuk')

for (let i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }

    setTimeout(log, 10)
}