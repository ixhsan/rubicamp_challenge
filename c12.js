const fs = require('node:fs');
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `Jawaban: `
});
const userInput = process.argv

// DEKLARASI VARIABLE
let falseCount = 0, questionCount = 0, trueCount = 0
let dataSource = ''
const messageFileCheck1 = `Tolong sertakan nama file sebagai inputan soalnya\nMisalnya 'node solution.js data.json'`,
    messageFileCheck2 = `File tidak ditemukan!`,
    messageStart1 = `Selamat datang di permainan Tebak-tebakan. kamu akan diberikan pertanyaan dari file ini '${userInput[2]}'.\n`,
    messageStart2 = `Untuk bermain, jawablah dengan jawaban yang sesuai.\n`,
    appStart = `${messageStart1}${messageStart2}Gunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.\n`

// CHECK JIKA INPUT TIDAK MENYERTAKAN PATH DAN NAMA FILE
if (userInput.length < 3) {
    console.log(messageFileCheck1)
    process.exit()
} else {
    dataSource = JSON.parse(fs.readFileSync(userInput[2], 'utf-8'))
    console.log(appStart)
}

// console.log(index.length);
// process.exit()

console.log(`Pertanyaan: ${dataSource[questionCount].question}`)
rl.prompt();
if (questionCount >= dataSource.length) {
    questionCount = 0
    console.log(`Wah skip bro\nPertanyaan: ${dataSource[questionCount].question}`);
}
rl.on('line', (line) => {
    if (line.toLowerCase() === dataSource[questionCount].answer) {
        questionCount++
        trueCount++
        if (trueCount === dataSource.length) {
            console.log(`\nSelamat Anda telah Beruntung!\n`);
            rl.close()
        } else if (questionCount >= dataSource.length) {
            questionCount = 0
            console.log(`\nAnda Beruntung!\n\nPertanyaan: ${dataSource[questionCount].question}`);
        } else {
            console.log(`\nAnda Beruntung!\n\nPertanyaan: ${dataSource[questionCount].question}`);
        }
    } else if (line.toLowerCase() === 'skip') {
        if (trueCount === dataSource.length - 1) {
            console.log(`Pertanyaan terakhir, tidak bisa anda skip.\nPertanyaan: ${dataSource[questionCount].question}`)
        } else {
            falseCount = 0
            questionCount++
            if (questionCount >= dataSource.length) {
                questionCount = 0
                console.log(`\nPertanyaan di skip.\nPertanyaan: ${dataSource[questionCount].question}`);
            } else {
                console.log(`\nPertanyaan di skip.\nPertanyaan: ${dataSource[questionCount].question}`);
            }
        }
    }
    else {
        falseCount++
        if (falseCount < 3) {
            console.log(`Anda Kurang Beruntung! anda telah salah ${falseCount} kali, silahkan coba lagi.\n`);
        } else {
            console.log(`Anda Kurang Beruntung! anda telah salah ${falseCount} kali, kesempatan anda telah habis.\n`);
            rl.close()
        }
    }
    rl.prompt();
}).on('close', () => {
    if (trueCount === dataSource.length) {
        console.log(`Pertanyaan telah selesai, Anda Berhasil!\n`);
        process.exit(0);
    } else {
        console.log(`Anda telah gagal!\n`);
        process.exit(0);
    }
});