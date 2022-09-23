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
        this.parameter = ''
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
        this.db.run(this.query[2], this.parameter, function (err) {
            if (err) {
                return console.error(err.message);
            }
            model.Display()
        });
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

    GenerateQuery(keys) {
        const tableSet = ['not found', 'mahasiswa', 'jurusan', 'dosen', 'matakuliah', 'kontrak']
        return this.query = this.queryList[tableSet[keys]]
    }

}

class View {
    constructor() {
        this.table = new Table({
            head: ['default table']
        })
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

    mainmenu() {
        console.log(`[1] Mahasiswa\n[2] Jurusan\n[3] Dosen\n[4] Matakuliah\n[5] Kontrak\n[6] Keluar\n=============================================`);
        this.rl.setPrompt(`masukan salah satu no. dari opsi diatas: `)
        this.rl.prompt()
        this.rl.on('line', (answer) => {
            if (answer.toLowerCase() == 1) {
                console.log('test');
            } else if (answer.toLowerCase() == 2) {
                console.log('what');
            } else {
                this.quit()
            }
        })
    }

    init() {
        this.rl.setPrompt(`=============================================\nUsername: `)
        console.log(`=============================================\nWelcome to Universitas Pendidikan Indonesia\nJl Setiabudhi No. 255\n=============================================`);
        this.rl.question(`Username: `, (answer) => {
            if (answer == 'admin') {
                console.log(`berhasil masuk`);
                this.mainmenu()
            } else {
                console.log(`ulangi`);
                this.rl.prompt()
            }
        })
    }
    quit() {
        this.rl.close()
    }

    showRecords = () => {
        this.view.vShowRecords(this.model.Display())
    }

    findRecord = () => {
        this.view.vFindRecord(this.model.Find())
    }
}

const appModel = new Model()
const appView = new View()

const userInput = appModel.parameter = '001'

const app = new Controller(appModel, appView)
const setQuery = app.model.GenerateQuery(1)
app.init()
/* TEST SHOW RECORD */
// app.view.setTable(setQuery[8])
// app.findRecord()
// app.showRecords()

/* TEST FIND RECORD */
// app.findRecord()
