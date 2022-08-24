// // var str = [{"UserName":"xxx","Rolename":"yyy"}]; // your response in a string
// // var parses = str.toString(); // an *array* that contains the user
// // console.log(parses);
// // var parsed = JSON.parse(str); // an *array* that contains the user
// // var user = parsed[0];         // a simple user
// // console.log(user.UserName);   // you'll get xxx
// // console.log(user.Rolename);   // you'll get yyy

// // if data is not in string format
// const data = [{"UserName":"xxx","Rolename":"yyy"}];

// const username = data[0].UserName
// const rolename = data[0].Rolename

// console.log(username)
// console.log(rolename)

// // if data is in string format
// const strData = JSON.parse('[{"UserName":"xxx","Rolename":"yyy"}]');

// const Username = strData[0].UserName
// const Rolename = strData[0].Rolename

// console.log(Username)
// console.log(Rolename)

const args = process.argv;
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let data = JSON.parse(fs.readFileSync('./data-todo.json', 'utf-8'))

var DiString;
var Ngkeheula = 100
const Boboko = []
var Langseng = { task: "test", status: " ", time: "test" }

function Kenek() {
    console.log(Object.keys(data).length)


}

if (args.length < 3) {
    console.log(`\n>>> JS TODO <<<
node todo.js <command>
node todo.js list 
node todo.js task <task_id>
node todo.js add <task_content>
node todo.js delete <task_id>
node todo.js complete <task_id>
node todo.js uncomplete <task_id>
node todo.js list:outstanding <task_id>
node todo.js list:completed asc||desc
node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
node todo.js complete <task_id>
node todo.js filter:<tagname> \n`)

    setTimeout(function () {
        process.exit(0)
    }, Ngkeheula)

} else if (args[2] == 'add') {

    for (let i = 3; i < args.length; i++) {
        Boboko.push(args[i])
    }

    DiString = Boboko.join(' ')
    Langseng.task = DiString
    var time = new Date()
    var h = `${time.getHours()}:${time.getMinutes()}`
    Langseng.time = h
    data.push(Langseng)
    console.log(typeof data);
    
    fs.writeFile('./data-todo.json', JSON.stringify(data), (err) => {
        if (err) console.log(err)
        console.log(`"${DiString}" telah ditambahkan.`)
    })


    setTimeout(function () {
        process.exit(0)
    }, Ngkeheula)

} else if (args[2] == 'list') {

    console.log(`Daftar pekerjaan.\n`)
    let Kenek = 1
    data.forEach(function (Obj) {
        console.log(`${Kenek}. [${Obj.status}] ${Obj.task}`)
        Kenek++
    })

    setTimeout(function () {
        process.exit(0)
    }, Ngkeheula)

} else if (args[2] == 'list:outstanding') {


    let Kenek = 1
    let wadah = []
    data.forEach(function (Obj) {
        if (Obj.status == " ") {
            wadah.push(Obj)
            Kenek++
        }
        return wadah
    })

    if (wadah.length !== 0) {
        // console.log(wadah.length)
        if (args.length < 4) {
            console.log("tolong masukkan parameter urutan. (asc/desc)")

        } else if (args[3] == "desc") {
            console.log(`Daftar pekerjaan outstanding.\nsort:desc.\n`)
            let Kenek = wadah.length
            wadah.reverse().forEach(function (Obj) {
                // console.log(Object.keys(Obj)[2])
                console.log(`${Kenek}. [${Obj.status}] ${Obj.task}`)
                Kenek--
            })
        }
        else if (args[3] == "asc") {
            console.log(`Daftar pekerjaan outstanding.\nsort:asc.\n`)
            wadah.forEach(function (Obj) {
                console.log(`${Kenek}. [${Obj.status}] ${Obj.task}`)
                Kenek++
            })
        }
    } else {
        console.log("Tidak ada tugas outstanding.")
    }

    setTimeout(function () {
        process.exit(0)
    }, Ngkeheula)

} else if (args[2] == 'delete') {

    let order = parseInt(args[3]) - 1
    data.splice(order, 1)

    fs.writeFile('./data-todo.json', JSON.stringify(data), (err) => {
        if (err) console.log(err)
        console.log(`"${data[order].task}" telah dihapus dari daftar`)
    })

    setTimeout(function () {
        process.exit(0)
    }, Ngkeheula)

}
else if (args[2] == 'complete') {

    let order = parseInt(args[3]) - 1
    data[order].status = "x"

    fs.writeFile('./data-todo.json', JSON.stringify(data), (err) => {
        if (err) console.log(err)
        console.log(`"${data[order].task}" telah selesai.`)
    })

    setTimeout(function () {
        process.exit(0)
    }, Ngkeheula)
}
else if (args[2] == 'uncomplete') {

    let order = parseInt(args[3]) - 1
    data[order].status = " "

    fs.writeFile('./data-todo.json', JSON.stringify(data), (err) => {
        if (err) console.log(err)
        console.log(`"${data[order].task}" status selesai dibatalkan.`)
    })

    setTimeout(function () {
        process.exit(0)
    }, Ngkeheula)

}
else if (args[2] == 'tag') {
    let kenek = args[3] - 1
    let stiker = args.length - 1
    let mangkok = []
    let a

    for (let i = stiker; i >= 4; i--) {
        mangkok.push(args[i])
        // kenek++
    }

    a = mangkok.join(',')
    // console.log(a)

    let x = 0
    for (i = x; i <= parseInt(args[3]); i++) {
        if (i === parseInt(args[3])) {
            // console.log('sampe')
            data[x].tag = mangkok
            fs.writeFile('./data-todo.json', JSON.stringify(data), (err) => {
                if (err) console.log(err)
                console.log(`Tag '${data[x].tag}' telah ditambahkan ke daftar '${data[x].task}'`)
            })
        } else {
            x++
        }
    }

    setTimeout(function () {
        process.exit(0)
    }, Ngkeheula)

} else if (args[2].includes('filter:')) {
    let a = args[2].replace("filter:", "")
    // console.log(`berhasil 1 ${a}`)

    if (a == "") {
        console.log(`harap masukkan parameter filter!.`)

        setTimeout(function () {
            process.exit(0)
        }, Ngkeheula)

    } else {
        let x = 0
        let Kenek = 1
        // let b = data[x].tag.join(',')
        // console.log(`berhasil 2 ${b}`)

        let wadah = []
        data.forEach(function (Obj) {
            if (Obj.tag.includes(a)) {
                wadah.push(Obj)
                Kenek++
            }
            return wadah
        })

        console.log(`Daftar Pekerjaan dg tag: ${a}\n`)
        wadah.forEach(function (Obj) {
            console.log(`${Kenek}. [${Obj.status}] ${Obj.task}`)
            Kenek++
        })

        setTimeout(function () {
            process.exit(0)
        }, Ngkeheula)
    }
}