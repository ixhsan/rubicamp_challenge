import Table from "cli-table3"
import color from "@colors/colors"
import sqlite from "sqlite3"
import readline from "node:readline"
sqlite.verbose()

class Model {
    #userName
    #passWord

    constructor() {
        this.query = ''
        this.queryList = {
            mahasiswa: [
                `SELECT * FROM mahasiswa`,
                `SELECT * FROM mahasiswa WHERE nim=?`,
                `INSERT INTO mahasiswa(nim, nama, alamat, jurusan, DoB) VALUES(?,?,?,?,?)`,
                `DELETE FROM mahasiswa WHERE nim=?`,
                `masukkan NIM: `,
                `mahasiswa dengan NIM: ? tidak terdaftar!`,
                `masukkan NIM mahasiswa yang akan dihapus: `,
                `mahasiswa dengan NIM: ? telah dihapus!`,
                [color.red('NIM'), color.red('Nama'), color.red('Alamat'), color.red('Jurusan'), color.red('DoB')]
            ],
            jurusan: [
                `SELECT * FROM jurusan`,
                `SELECT * FROM jurusan WHERE idjurusan=?`,
                `INSERT INTO jurusan(idjurusan,nama_jurusan) VALUES(?,?)`,
                `DELETE FROM jurusan WHERE idjurusan=?`,
                `masukkan id jurusan: `,
                `jurusan dengan id: ? tidak terdaftar!`,
                `masukkan id jurusan yang akan dihapus:`,
                `jurusan dengan id: ? telah dihapus!`,
                ['ID jurusan', 'Jurusan']
            ],
            dosen: [
                `SELECT * FROM dosen`,
                `SELECT * FROM dosen WHERE nip=?`,
                `INSERT INTO dosen(nip, nama, matakuliah) VALUES(?,?,?)`,
                `DELETE FROM dosen WHERE nip=?`,
                `masukkan nip: `,
                `dosen dengan nip: ? tidak terdaftar!`,
                `masukkan nip dosen yang akan dihapus:`,
                `dosen dengan nip: ? telah dihapus!`,
                ['NIP', 'Nama Dosen', 'Mata Kuliah']
            ],
            matakuliah: [
                `SELECT * FROM matakuliah`,
                `SELECT * FROM jurusan WHERE idjurusan=?`,
                `INSERT INTO matakuliah(kodematkul, nama, sks) VALUES(?,?,?)`,
                `DELETE FROM matakuliah WHERE kodematkul=?`,
                `masukkan kode matakuliah: `,
                `matakuliah dengan kode: ? tidak terdaftar!`,
                `masukkan kode matakuliah yang akan dihapus: `,
                `matakuliah dengan kode: ? telah dihapus!`,
                ['Kode', 'Nama Matakuliah', 'Jumlah SKS']
            ],
            kontrak: [
                `SELECT * FROM kontrak`,
                `SELECT * FROM kontrak WHERE idkontrak=?`,
                `INSERT INTO kontrak(id,mahasiswa,dosen,matakuliah,nilai) VALUES(?,?,?,?,?)`,
                `DELETE FROM kontrak WHERE id=?`,
                `masukkan id: `,
                `kontrak dengan id: ? tidak terdaftar!`,
                `masukkan id kontrak yang akan dihapus:`,
                `kontrak dengan id: ? telah dihapus!`,
                ['ID', 'Mahasiswa', 'Dosen', 'Matakuliah', 'Nilai']
            ]
        }
        this.parameter = []
        this.parameterSelect = [
            null,
            ["NIM", "Nama", "Alamat", "Jurusan", "DoB"],
            ["ID", "Nama Jurusan"],
            ["NIP", "Nama Dosen", "Matakuliah"],
            ["Kode", "Nama Matakuliah", "Jumlah SKS"],
            ["ID", "Nama Mahasiswa", "Alamat", "Jurusan", "DoB"]
        ]
        this.mahasiswa = [{
            nim: '005',
            nama: 'deri',
            alamat: 'cianjur',
            jurusan: 'teknik mesin',
            DoB: '2003-02-01'
        },
        {
            nim: '004',
            nama: 'dani',
            alamat: 'surabaya',
            jurusan: 'teknik pangan',
            DoB: '1999-12-29'
        }]

        // Set the login information
        this.#userName = 'admin'
        this.#passWord = '1'

        // Make connection to the database
        this.dataPath = "./university.db"
        this.db = new sqlite.Database(
            this.dataPath, sqlite.OPEN_READWRITE, (err) => {
                if (err) throw err
            })
    }

    //Login procedure
    get loginData() {
        let LoginArr = [this.#userName, this.#passWord]
        return LoginArr
    }

    // Display all the record in a table
    Display() {
        return new Promise((resolve, reject) => {
            this.db.all(this.query[0], (err, row) => {
                if (err) {
                    let responseObj = {
                        'error': err
                    }
                    reject(responseObj);
                } else {
                    resolve(row);
                }
            })
        })
    }

    // Find a record in a table
    Find() {
        return new Promise((resolve, reject) => {
            this.db.get(this.query[1], this.parameter, (err, row) => {
                if (row) {
                    resolve([row])
                } else if (err) {
                    let responseObj = {
                        'error': err
                    }
                    reject(responseObj);
                } else {
                    reject(this.query[5].replace('?', this.parameter))
                }
            })
        })

    }

    // Adding a new record in a table
    Add() {
        return new Promise((resolve, reject) => {
            this.db.run(this.query[2], this.parameter, function (err) {
                if (err) {
                    return console.error(err.message);
                }
                model.Display()
            });
        })
    }

    // Deleting a record in a table
    Delete() {
        this.db.run(this.query[3], this.parameter, function (err) {
            if (err) {
                return console.error(err.message);
            } else {
                console.log(model.query[7].replace('?', model.parameter));
            }
        });
    }

    GenerateQuery(keys, mode = 'query') {
        const tableSet = ['not found', 'mahasiswa', 'jurusan', 'dosen', 'matakuliah', 'kontrak']
        return mode === 'query' ? this.query = this.queryList[tableSet[keys]] : tableSet[keys]
    }

}

class View {
    constructor() {
        this.table = new Table({
            head: ['default table']
        })
        this.lineBreak = `======================================================`;
    }

    vShowRecords = (table) => {
        table.then((message) => {
            let entry = []
            for (let i = 0; i < message.length; i++) {
                for (let key in message[i]) {
                    typeof message[i][key] === 'number' ? entry.push(message[i][key]) : entry.push(message[i][key][0].toUpperCase() + message[i][key].substring(1))
                }
                this.table.push(entry)
                entry = []
            }
            let row = this.table.toString()
            console.log(row)
        }).catch((err) => {
            console.log(err);
        })
    }

    vFindRecord = (table) => {
        table.then((message) => {
            for (let i = 0; i < message.length; i++) {
                for (let key in message[i]) {
                    let teks = ''
                    typeof message[i][key] === 'number' ? teks = message[i][key] : teks = message[i][key][0].toUpperCase() + message[i][key].substring(1)
                    console.log(`${key[0].toUpperCase() + key.substring(1)}\t: ${teks}`);
                }
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    vAddRecord = (table) => {
        
    }

    vDeleteRecord = (table) => {

    }

    setTable(value) {
        return this.table = new Table({
            head: value,
            // colWidths: [15, 21, 10], //set the widths of each column (optional)
        })
    }

}

class Controller {
    constructor(model = new Model, view = new View) {
        this.model = model
        this.view = view

        // Creating the interface        
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        this.rlclose = this.rl.on('close', () => {
            console.log(`Closing the app..\n`)
            process.exit(0)
        })
    }

    /* Main page */
    /* Login Page */
    init(/*mode = 1 */) {
        // const clearLine = mode ?? process.stdout.write('\u001B[2J\u001B[0;0f')
        console.log(`${this.view.lineBreak}\nWelcome to Universitas Pendidikan Indonesia\nJl Setiabudhi No. 255\n${this.view.lineBreak}`)
        this.rl.question("Username: ", (answer1) => {
            console.log(this.view.lineBreak);
            this.rl.question("Password: ", (answer2) => {
                console.log(this.view.lineBreak);
                if (answer1 == "admin" && answer2 == "1") {
                    console.log(`Welcome, ${answer1}. Your access level is: ADMIN `);
                    // Menu utama
                    this.pageMainMenu();
                } else if (answer1 === '.quit') {
                    this.rl.close()
                } else {
                    // process.stdout.write('\u001B[2J\u001B[0;0f')
                    console.log("username atau password anda salah, silakan coba lagi.");
                    // Kembali looping ke login
                    this.init();
                }
            });
        });
    }

    pageMainMenu(/*mode = 1*/) {
        // const clearLine = mode ?? process.stdout.write('\u001B[2J\u001B[0;0f')
        console.log(this.view.lineBreak);
        console.log(`Menu Utama`)
        console.log(this.view.lineBreak);
        console.log(`[1] Mahasiswa\n[2] Jurusan\n[3] Dosen\n[4] Matakuliah\n[5] Kontrak\n[6] Keluar`)
        console.log(this.view.lineBreak);
        this.rl.question(`Masukkan salah satu no. dari opsi diatas: `, (answer) => {
            console.log(this.view.lineBreak);
            if (Number(answer) > 0 && Number(answer) < 6) {
                this.pageOperation(answer, 'no')
            } else if (Number(answer) === 6) {
                this.init(/*null*/)
            } else {
                console.log(`Silahkan pilih menu antara 1-6`);
                this.pageMainMenu(/*null*/)
            }
        })
    }

    pageOperation(page1Input, checkOutput = 'no', output) {
        /* Set table and operation */
        let mode = this.model.GenerateQuery(page1Input)
        let table = this.model.GenerateQuery(page1Input, 'teks')
        let view = this.view.setTable(table[8])
        let isOutput = checkOutput

        // process.stdout.write('\u001B[2J\u001B[0;0f')
        if (isOutput === 'yes') {
            console.log(output);
        }
        console.log(/*${this.view.lineBreak}\n*/`${table}\n${this.view.lineBreak}\n[1] daftar ${table}\n[2] cari ${table}\n[3] tambah ${table}\n[4] hapus ${table}\n[5] kembali\n${this.view.lineBreak}`)
        this.rl.question(`masukkan salah satu no. dari opsi diatas: `, (page2Input) => {
            // process.stdout.write('\u001B[2J\u001B[0;0f')
            let pageInput = [page1Input, page2Input]
            if (Number(pageInput[1]) === 5) {
                this.pageMainMenu(/*null*/)
            } else if (Number(pageInput[1]) === 1) {
                this.executeNow('operation', pageInput)
            } else {
                this.generateQuestion(executeNow('table', pageInput), pageInput)
            }
        })
    }

    quit() {
        this.this.rl.close()
    }

    /* Bridging Function */
    // 1. Question Generator
    generateQuestion = (value, pageInput) => {
        if (Number(pageInput[1]) === 2 || Number(pageInput[1]) === 4) {
            let singleValue = [value[0]]
            this.rl.question(`${singleValue[0]}: `, (answer) => {
                this.model.parameter.push(answer)
                if (singleValue.length > 1) {
                    singleValue.splice(0, 1)
                    this.generateQuestion(singleValue, pageInput)
                } else {
                    return this.executeNow('operation', pageInput)
                }
            })
        } else {
            this.rl.question(`${value[0]}: `, (answer) => {
                this.model.parameter.push(answer)
                if (value.length > 1) {
                    value.splice(0, 1)
                    this.generateQuestion(value, pageInput)
                } else {
                    return this.executeNow('operation', pageInput)
                }
            })
        }
    }

    // 2. Operand functions
    executeNow(mode = 'operation', pageInput) {
        /* Select Table */
        const queryExec = this.model.parameterSelect[pageInput[0]]

        /* Select Operation */
        const operateSelect = [
            null,
            this.showRecords,
            this.findRecord,
            this.addRecord,
            this.deleteRecord
        ]

        const operate = operateSelect[pageInput[1]] ?? this.noOption
        return mode === 'operation' ? operate(pageInput[0]) : queryExec
    }

    /* View-Model Interfacing */
    showRecords = (page1Input) => {
        this.view.vShowRecords(this.model.Display())
        this.model.parameter = []
        return pageOperation(page1Input, 'yes', result);
    }

    findRecord = (page1Input) => {
        let result = this.view.vFindRecord(this.model.Find())
        this.model.parameter = []
        return pageOperation(page1Input, 'yes', result);
    }

    addRecord = (page1Input) => {
        let result = this.view.vAddRecord(this.model.Add())
        this.model.parameter = []
        return pageOperation(page1Input, 'yes', result);
    }

    deleteRecord = (page1Input) => {
        let result = this.view.vDeleteRecord(this.model.Delete())
        this.model.parameter = []
        return pageOperation(page1Input, 'yes', result);
    }

    noOption(page1Input) {
        let result = `Silahkan pilih antara opsi 1-5.\n${page1Input}`;
        this.model.parameter = []
        return this.pageOperation(page1Input, 'yes', result);
    }
}

// const appModel = new Model()
// const appView = new View()

// const userInput = appModel.parameter = '001'

const app = new Controller(new Model,new View)
app.init()
// const setQuery = app.model.GenerateQuery(1)
/* TEST SHOW RECORD */
// app.view.setTable(setQuery[8])
// app.findRecord()
// app.showRecords()

/* TEST FIND RECORD */
// app.findRecord()
