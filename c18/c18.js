import Table from "cli-table3"
import color from "@colors/colors"
import sqlite from "sqlite3"
import readline from "node:readline"
sqlite.verbose()

class Model {

    constructor() {
        this._query = ''
        this.queryList = {
            mahasiswa: [
                `SELECT * FROM mahasiswa`,
                `SELECT * FROM mahasiswa WHERE nim=?`,
                `INSERT INTO mahasiswa(nim, nama, alamat, jurusan, DoB) VALUES(?,?,?,?,?)`,
                `DELETE FROM mahasiswa WHERE nim=?`,
                `mahasiswa dengan NIM: ? tidak terdaftar!`,
                `mahasiswa dengan NIM: ? telah dihapus!`,
                [color.red('NIM'), color.red('Nama'), color.red('Alamat'), color.red('Jurusan'), color.red('DoB')]
            ],
            jurusan: [
                `SELECT * FROM jurusan`,
                `SELECT * FROM jurusan WHERE idjurusan=?`,
                `INSERT INTO jurusan(idjurusan,nama_jurusan) VALUES(?,?)`,
                `DELETE FROM jurusan WHERE idjurusan=?`,
                `jurusan dengan id: ? tidak terdaftar!`,
                `jurusan dengan id: ? telah dihapus!`,
                ['ID jurusan', 'Jurusan']
            ],
            dosen: [
                `SELECT * FROM dosen`,
                `SELECT * FROM dosen WHERE nip=?`,
                `INSERT INTO dosen(nip, nama, matakuliah) VALUES(?,?,?)`,
                `DELETE FROM dosen WHERE nip=?`,
                `dosen dengan NIP: ? tidak terdaftar!`,
                `dosen dengan nip: ? telah dihapus!`,
                ['NIP', 'Nama Dosen', 'Mata Kuliah']
            ],
            matakuliah: [
                `SELECT * FROM matakuliah`,
                `SELECT * FROM jurusan WHERE idjurusan=?`,
                `INSERT INTO matakuliah(kodematkul, nama, sks) VALUES(?,?,?)`,
                `DELETE FROM matakuliah WHERE kodematkul=?`,
                `matakuliah dengan kode: ? tidak terdaftar!`,
                `matakuliah dengan kode: ? telah dihapus!`,
                ['Kode', 'Nama Matakuliah', 'Jumlah SKS']
            ],
            kontrak: [
                `SELECT * FROM kontrak`,
                `SELECT * FROM kontrak WHERE idkontrak=?`,
                `INSERT INTO kontrak(id,mahasiswa,dosen,matakuliah,nilai) VALUES(?,?,?,?,?)`,
                `DELETE FROM kontrak WHERE id=?`,
                `kontrak dengan id: ? tidak terdaftar!`,
                `kontrak dengan id: ? telah dihapus!`,
                ['ID', 'Mahasiswa', 'Dosen', 'Matakuliah', 'Nilai']
            ]
        }
        this._parameter = []
        this.parameterList = [
            null,
            ["NIM", "Nama", "Alamat", "Jurusan", "DoB"],
            ["ID", "Nama Jurusan"],
            ["NIP", "Nama Dosen", "Matakuliah"],
            ["Kode", "Nama Matakuliah", "Jumlah SKS"],
            ["ID", "Nama Mahasiswa", "Alamat", "Jurusan", "DoB"]
        ]

        // Make connection to the database
        this._dataPath = "./university.db"
        this._db = new sqlite.Database(
            this._dataPath, sqlite.OPEN_READWRITE, (err) => {
                if (err) throw err
            })
    }

    // Display all the record in a table
    Display() {
        return new Promise((resolve, reject) => {
            this._db.all(this._query[0], (err, row) => {
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
            this._db.get(this._query[1], this._parameter, (err, row) => {
                if (row) {
                    resolve([row])
                } else if (err) {
                    let errObj = {
                        'error': err
                    }
                    reject(errObj);
                } else {
                    reject(this._query[4].replace('?', this._parameter))
                }
            })
        })

    }

    // Adding a new record in a table
    Add() {
        return new Promise((resolve, reject) => {
            this._db.run(this._query[2], this._parameter, (err) => {
                if (err) {
                    let errObj = {
                        'error': err
                    }
                    reject(errObj);
                } else {
                    resolve(this.Display())
                }
            });
        })
    }

    // Deleting a record in a table
    Delete() {
        return new Promise((resolve, reject) => {
            let successMessage = this._query[5].replace('?', this._parameter)
            let errorMessage = this._query[4].replace('?', this._parameter)
            this._db.run(this._query[3], this._parameter, function(err) {
                if (err) {
                    let errObj = {
                        'error': err
                    }
                    reject(errObj['error']);
                } else if (this.changes) {
                    resolve(successMessage)
                } else {
                    reject(errorMessage)
                }
            })
        })
    }

    GenerateQuery(keys, mode = 'query') {
        const tableSet = ['not found', 'mahasiswa', 'jurusan', 'dosen', 'matakuliah', 'kontrak']
        return mode === 'query' ? this._query = this.queryList[tableSet[keys]] : tableSet[keys]
    }

}

class View {
    constructor() {
        this.table = new Table({
            head: ['default table']
        })
    }

    vShowRecords(table) {
        return new Promise((resolve, reject) => {
            let entry = []
            for (let i = 0; i < table.length; i++) {
                for (let key in table[i]) {
                    typeof table[i][key] === 'number' ? entry.push(table[i][key]) : entry.push(table[i][key][0].toUpperCase() + table[i][key].substring(1))
                }
                this.table.push(entry)
                entry = []
            }
            let row = this.table.toString()
            resolve(row)
        })
    }

    vFindRecord(table) {
        return new Promise((resolve, reject) => {
            let result = []
            let textMerge = ``
            let textProcessed = ``
            let textRaw = ``

            for (let i = 0; i < table.length; i++) {
                for (let key in table[i]) {
                    typeof table[i][key] === 'number' ? textRaw = table[i][key] : textRaw = table[i][key][0].toUpperCase() + table[i][key].substring(1)
                    textProcessed = textMerge.concat(`${key[0].toUpperCase() + key.substring(1)}\t: ${textRaw}\n`)
                    result.push(textProcessed)
                }
            }

            resolve(result.toString('').replace(/,/g, ''))
        })
    }

    vDeleteRecord(table) {
        return new Promise((resolve, reject) => {resolve(table)})
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

        /* application state */
        this._pageInput = []
        this._lineBreak = `======================================================`;
        this._table = ''
        this._mode = ''
    }

    /* Main page : LOGIN */
    init(/*mode = 1 */) {
        // const clearLine = mode ?? process.stdout.write('\u001B[2J\u001B[0;0f')
        console.log(`${this._lineBreak}\nWelcome to Universitas Pendidikan Indonesia\nJl Setiabudhi No. 255\n${this._lineBreak}`)
        this.rl.question("Username: ", (answer1) => {
            console.log(this._lineBreak);
            this.rl.question("Password: ", (answer2) => {
                console.log(this._lineBreak);
                if (answer1 == "admin" && answer2 == "1") {
                    console.log(`Welcome, ${answer1}. Your access level is: ADMIN `);
                    this.pageMainMenu();
                } else if (answer1 === '.quit') {
                    this.rl.close()
                } else {
                    // process.stdout.write('\u001B[2J\u001B[0;0f')
                    console.log("username atau password anda salah, silakan coba lagi.");
                    this.init();
                }
            });
        });
    }

    pageMainMenu(/*mode = 1*/) {
        // const clearLine = mode ?? process.stdout.write('\u001B[2J\u001B[0;0f')
        console.log(`${this._lineBreak}\nsilahkan pilih opsi di bawah ini\n[1] Mahasiswa\n[2] Jurusan\n[3] Dosen\n[4] Matakuliah\n[5] Kontrak\n[6] Keluar\n${this._lineBreak}`)
        this.rl.question(`Masukkan salah satu no. dari opsi diatas: `, (answer) => {
            // console.log(this.lineBreak);
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

    pageOperation(page1Input, anyOutput = 'no', output) {
        /* Set table and operation */
        this._mode = this.model.GenerateQuery(page1Input)
        this._table = this.model.GenerateQuery(page1Input, 'teks')
        let view = this.view.setTable(this._mode[6])
        let isOutput = anyOutput
        // process.stdout.write('\u001B[2J\u001B[0;0f')
        if (isOutput === 'yes') {
            console.log(`${this._lineBreak}`)
            console.log(output);
        }
        console.log(`${this._lineBreak}\nsilahkan pilih opsi di bawah ini\n[1] daftar ${this._table}\n[2] cari ${this._table}\n[3] tambah ${this._table}\n[4] hapus ${this._table}\n[5] kembali\n${this._lineBreak}`)
        this.rl.question(`masukkan salah satu no. dari opsi diatas: `, (page2Input) => {
            // process.stdout.write('\u001B[2J\u001B[0;0f')
            this._pageInput = [page1Input, page2Input]
            if (Number(this._pageInput[1]) === 5) {
                this.pageMainMenu(/*null*/)
            } else if (Number(this._pageInput[1]) >= 1 && Number(this._pageInput[1]) <= 4) {
                this.generateQuestion(this.executeNow('table'))
            } else {
                this.executeNow('operation')
            }
        })
    }

    quit() {
        this.rl.close()
    }

    /* Bridging Function */
    // 1. Question Generator
    generateQuestion = (userInput) => {
        let parameter = []
        let ask = ``
        console.log(`userInput: ${userInput.length}`);
        Number(this._pageInput[1]) === 2 || Number(this._pageInput[1]) === 4 ? parameter = [userInput.slice(0,1)] : parameter = userInput.slice(0,)
        Number(this._pageInput[1]) === 2 || Number(this._pageInput[1]) === 4 ? ask = `Masukkan ` : ask = ``
        // console.log(`${this._lineBreak}`)
        this.rl.question(`${ask}${parameter[0]}\t: `, (answer) => {
            this.model._parameter.push(answer)
            if (parameter.length > 1) {
                parameter.splice(0, 1)
                this.generateQuestion(parameter)
            } else {
                return this.executeNow('operation')
            }
        })
    }

    // 2. Operand functions
    executeNow = (mode = 'operation') => {
        /* Select Table */
        const queryExec = this.model.parameterList[this._pageInput[0]]
        /* Select Operation */
        const operateSelect = [
            null,
            this.showRecords,
            this.findRecord,
            this.addRecord,
            this.deleteRecord
        ]

        const operate = operateSelect[Number(this._pageInput[1])] ?? this.noOption
        return mode === 'operation' ? operate() : queryExec
    }

    /* View-Model Interfacing */
    showRecords = async () => {
        try {
            const result = await this.model.Display()
            const result2 = await this.view.vShowRecords(result)
            this.model._parameter = []
            this.pageOperation(this._pageInput[0], 'yes', result2);
        } catch (err) {
            this.model._parameter = []
            this.pageOperation(this._pageInput[0], 'yes', err);
        }
    }

    findRecord = async () => {
        try {
            let result = await this.model.Find()
            let result2 = await this.view.vFindRecord(result)
            this.model._parameter = []
            this.pageOperation(this._pageInput[0], 'yes', result2);
        } catch (err) {
            this.model._parameter = []
            console.log(`${this._lineBreak}`)
            console.log(err);
            this.generateQuestion(this.executeNow('table'))
        }
    }

    addRecord = async () => {
        try {
            const result = await this.model.Add()
            const result2 = await this.view.vShowRecords(result)
            this.model._parameter = []
            this.pageOperation(this._pageInput[0], 'yes', result2);
        } catch (err) {
            this.model._parameter = []
            this.pageOperation(this._pageInput[0], 'yes', err);
        }
    }

    deleteRecord = async () => {
        try {
            let result = await this.model.Delete()
            let result2 = await this.view.vDeleteRecord(result)
            this.model._parameter = []
            this.pageOperation(this._pageInput[0], 'yes', result2);
        } catch (err) {
            this.model._parameter = []
            console.log(`${this._lineBreak}`)
            console.log(err);
            this.generateQuestion(this.executeNow('table'))
        }
    }

    noOption = () => {
        let result = `Silahkan pilih antara opsi 1-5.`;
        this.pageOperation(this._pageInput[0], 'yes', result);
    }

}

const app = new Controller(new Model, new View)
app.init()