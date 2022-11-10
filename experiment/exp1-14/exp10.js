import readline from 'readline/promises'

    // const rl = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout,
    //     prompt: `jawaban:`
    // });

    // rl.prompt()
    // rl.on('line', (answer) => {
    //     switch (answer) {
    //         case 1:
    //             message = `welcome to the layer of ${answer}`
    //             rl.setPrompt(message)
    //             rl.prompt()
    //             rl.on('line', (answer2) => {
    //                 switch (answer2) {
    //                     case 2:
    //                         message = `welcome to the layer of ${answer}`
    //                         rl.setPrompt(message)
    //                         rl.prompt()
    //                         break
    //                     case 3:
    //                         message = `welcome to the layer of ${answer}`
    //                         rl.setPrompt(message)
    //                         rl.prompt()
    //                         break
    //                 }
    //             })
    //         case 2:
    //             switch (answer) {
    //                 case (answer === 2):
    //                     message = `prompt ${answer}-2`
    //                     rl.setPrompt(message)
    //                     rl.prompt()
    //                     break
    //                 case (answer === 3):
    //                     message = `prompt ${answer}-3`
    //                     rl.setPrompt(message)
    //                     rl.prompt()
    //                     break
    //             }
    //         case 3:
    //             switch (answer) {
    //                 case (answer === 3):
    //                     message = `prompt ${answer}-2`
    //                     rl.setPrompt(message)
    //                     rl.prompt()
    //                     break
    //                 case (answer === 4):
    //                     message = `prompt ${answer}-3`
    //                     rl.setPrompt(message)
    //                     rl.prompt()
    //                     break
    //             }
    //         case 4:
    //             switch (answer) {
    //                 case (answer === 5):
    //                     message = `prompt ${answer}-2`
    //                     rl.setPrompt(message)
    //                     rl.prompt()
    //                     break
    //                 case (answer === 6):
    //                     message = `prompt ${answer}-3`
    //                     rl.setPrompt(message)
    //                     rl.prompt()
    //                     break
    //             }
    //         default:
    //             message = 'jawaban:'
    //             rl.question(`jawaban anda ${answer}`)
    //             break
    //     }
    // })

    // // function sentencesManipulation(sentence) {
    // //     let arr = sentence.split(' ')
    // //     let sentenceUpdated = []
    // //     let wordRegex = /^[aiueo]/
    // //     for (let i = 0; i < arr.length; i++) {
    // //         wordRegex.test(arr[i]) ? sentenceUpdated.push(arr[i]) : sentenceUpdated.push(arr[i].slice(1,) + arr[i].charAt(0) + "nyo")
    // //     }

    // //     return console.log(sentenceUpdated.join(' '))
    // //     }

    // // rl.question('tulis kalimatmu disini >', (answer) => {
    // //     console.log(`Oh, so your name is ${answer}?`)
    // //     // rl.close()
    // // })

    // const readline = require('readline/promises');
    // const { stdin: input, stdout: output } = require('process');

    (async () => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        try {
            const answer = await rl.question('What is 4x4 equals? ');

            const correctOrNot = answer.trim() === '16' ? 'correct!' : 'incorrect. Try again.';
            console.log(`${answer.trim()} is ${correctOrNot}`);
        } catch (err) {
            console.log(`Error: `, err);
        } finally {
            rl.close();
        }
        process.exit(1);
    })();