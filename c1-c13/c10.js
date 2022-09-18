// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');

import readline from 'readline';
import { stdin as input, stdout as output } from 'process';
const rl = readline.createInterface({ input, output });


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
    sentencesManipulation(answer)
    rl.close()
})