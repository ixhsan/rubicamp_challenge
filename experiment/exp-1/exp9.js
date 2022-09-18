// this is about multiple questions with readline

import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `Jawaban: `
});

console.log(`lengkapi data di bawah ini:`);
rl.prompt()
rl.question("NIM:", (answer1) => {
    rl.question("nama:", (answer2) => {
        rl.question("jurusan:", (answer3) => {
            rl.question("alamat:", (answer4) => {
                return answer4
            });
            return answer3
        });
        return answer2
    });
    return answer1
});