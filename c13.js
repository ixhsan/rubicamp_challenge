const { writeFile } = require('node:fs');
const fs = require('node:fs');

const userInput = process.argv
const dataPath = './c13_data.json'
let message = 'no message'
let updateExec = ''

let dataSource = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

const dataFormat = { task: "sample", status: "not yet" }
const [a, b, c, ...arr] = userInput

// TEST CODE
// dataFormat.task = arr.join(' ')
// dataSource.push(dataFormat)

// console.log(dataSource.length);
// console.log(dataSource);

// fs.promises.writeFile(dataPath, JSON.stringify(dataSource), 'utf-8')
//     .then(() => console.log(`${message}`))
//     .catch(console.error())

// DRIVER CODE
const updateData = (data, message) => {

    dataSource.push(data)

    fs.promises.writeFile(dataPath, JSON.stringify(data), 'utf-8')
        .then(() => console.log(`${message}`))
        .catch(console.error())

}

if (userInput[2] === 'add') {

    dataFormat.task = arr.join(' ')
    message = `${dataFormat.task} telah ditambahkan.`

    // // TEST OUTPUT
    // updateData(dataFormat, message)

}

// --------------- EXPERIMENT ---------------
// switch (userInput.length) {
//     case 2:
//         console.log(`>>> JS TODO <<<
// node todo.js <command>
// node todo.js list 
// node todo.js task <task_id>
// node todo.js add <task_content>
// node todo.js delete <task_id>
// node todo.js complete <task_id>
// node todo.js uncomplete <task_id>
// node todo.js list:outstanding <task_id>
// node todo.js list:completed asc||desc
// node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
// node todo.js complete <task_id>
// node todo.js filter:<tagname>\n`)
//         break
//     case 3:
//         console.log(`ada`)
//         break
//     case 4:
//         console.log(`haha`)
//         break
// }
