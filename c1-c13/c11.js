const fs = require('node:fs');
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `Tebakan: `
});

let index = 0
const dataSource = JSON.parse(fs.readFileSync('./c11_data.json', 'utf-8'))

console.log(`Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar !\n\nPertanyaan: ${dataSource[index].question}`)
rl.prompt();

rl.on('line', (line) => {
    switch (line.toLowerCase() === dataSource[index].answer) {
        case true:
            index++
            if (index >= dataSource.length) {
                console.log(`Selamat Anda Benar!\n`);
                rl.close()
            } else {
                console.log(`Selamat Anda Benar!\n\nPertanyaan: ${dataSource[index].question}`);
            }
            break;
        case false:
            console.log(`Wkwkwkwk, Anda kurang beruntung!\n`);
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log(`Hore Anda Menang!\n`);
    process.exit(0);
});