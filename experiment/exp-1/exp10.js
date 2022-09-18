import readline from 'node:readline'

let message = `test the prompt`

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `jawaban:`
});


// rl.prompt()
// rl.on('line', (answer) => {
//     switch (answer) {
//         case '1':
//             message = 'prompt1 hehe'
//             rl.setPrompt(message)
//             rl.prompt()
//             break
//         case '2':
//             message = 'berhasil'
//             rl.setPrompt(message)
//             rl.prompt()
//             break
//         case '3':
//             message = 'jawaban:'
//             rl.setPrompt(message)
//             rl.prompt()
//             break
//         case '4':
//             message = 'jawaban:'
//             rl.question(`jawaban anda ${answer}`)
//             break
//     }
// })

function sentencesManipulation(sentence) {
    let arr = sentence.split(' ')
    let sentenceUpdated = []
    let wordRegex = /^[aiueo]/
    for (let i = 0; i < arr.length; i++) {
        wordRegex.test(arr[i]) ? sentenceUpdated.push(arr[i]) : sentenceUpdated.push(arr[i].slice(1,) + arr[i].charAt(0) + "nyo")
    }

    return console.log(sentenceUpdated.join(' '))
    }

rl.question('tulis kalimatmu disini >', (answer) => {
    console.log(`Oh, so your name is ${answer}?`)
    // rl.close()
})