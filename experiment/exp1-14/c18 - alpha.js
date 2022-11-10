import sqlite from "sqlite3"
import Table from "cli-table3"
// import Table from "cli-table"
import readline from "node:readline"
import color from "@colors/colors"
sqlite.verbose()

class Model {
    #userName
    #passWord

    constructor() {
        // Test access prototype
        this.test = `Successfully accessed Model Class!`

        // Set the login information
        this.#userName = 'admin'
        this.#passWord = '1'

        // Make connection to the database
        this.dataPath = "./university.db"
        this.db = new sqlite.Database(
            this.dataPath, sqlite.OPEN_READWRITE, (err) => {
                if (err) throw err
            })

        // Syntax for Database Query
        this.query = ''
        this.parameter = ''
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
                ['NIM', 'Nama', 'Alamat', 'Jurusan', 'DoB']
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
        // this.mahasiswaQuery = [
        //     `SELECT * FROM mahasiswa`,
        //     `SELECT * FROM mahasiswa WHERE nim=?`,
        //     `INSERT INTO mahasiswa(nim, nama, alamat, jurusan, DoB) VALUES(?,?,?,?,?)`,
        //     `DELETE FROM mahasiswa WHERE nim=?`,
        //     `masukkan NIM: `,
        //     `mahasiswa dengan NIM: ? tidak terdaftar!`,
        //     `masukkan NIM mahasiswa yang akan dihapus: `,
        //     `mahasiswa dengan NIM: ? telah dihapus!`
        // ]
        // this.jurusanQuery = [
        //     `SELECT * FROM jurusan`,
        //     `SELECT * FROM jurusan WHERE idjurusan=?`,
        //     `INSERT INTO jurusan(idjurusan,nama_jurusan) VALUES(?,?)`,
        //     `DELETE FROM jurusan WHERE idjurusan=?`,
        //     `masukkan id jurusan: `,
        //     `jurusan dengan id: ? tidak terdaftar!`,
        //     `masukkan id jurusan yang akan dihapus:`,
        //     `jurusan dengan id: ? telah dihapus!`
        // ]
        // this.dosenQuery = [
        //     `SELECT * FROM dosen`,
        //     `SELECT * FROM dosen WHERE nip=?`,
        //     `INSERT INTO dosen(nip, nama, matakuliah) VALUES(?,?,?)`,
        //     `DELETE FROM dosen WHERE nip=?`,
        //     `masukkan nip: `,
        //     `dosen dengan nip: ? tidak terdaftar!`,
        //     `masukkan nip dosen yang akan dihapus:`,
        //     `dosen dengan nip: ? telah dihapus!`
        // ]
        // this.matakuliahQuery = [
        //     `SELECT * FROM matakuliah`,
        //     `SELECT * FROM jurusan WHERE idjurusan=?`,
        //     `INSERT INTO matakuliah(kodematkul, nama, sks) VALUES(?,?,?)`,
        //     `DELETE FROM matakuliah WHERE kodematkul=?`,
        //     `masukkan kode matakuliah: `,
        //     `matakuliah dengan kode: ? tidak terdaftar!`,
        //     `masukkan kode matakuliah yang akan dihapus: `,
        //     `matakuliah dengan kode: ? telah dihapus!`
        // ]
        // this.kontrakQuery = [
        //     `SELECT * FROM kontrak`,
        //     `SELECT * FROM kontrak WHERE idkontrak=?`,
        //     `INSERT INTO kontrak(id,mahasiswa,dosen,matakuliah,nilai) VALUES(?,?,?,?,?)`,
        //     `DELETE FROM kontrak WHERE id=?`,
        //     `masukkan id: `,
        //     `kontrak dengan id: ? tidak terdaftar!`,
        //     `masukkan id kontrak yang akan dihapus:`,
        //     `kontrak dengan id: ? telah dihapus!`
        // ]
    }

    get loginData() {
        let LoginArr = [this.#userName, this.#passWord]
        return LoginArr
    }

    // Display all the record in a table
    Display(mode) {

        if (mode === 1) {
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
        } else {
            this.db.all(this.query[0], (err, row) => {
                if (err) throw err
                console.log(row);
            })
        }
    }

    // Find a record in a table
    Find() {
        this.db.get(this.query[1], this.parameter, (err, row) => {
            if (row) {
                console.log(row);
            } else {
                console.log(this.query[5].replace('?', this.parameter))
            }
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
        // switch (table) {
        //     case 1:
        //         return this.Query = this.mahasiswaQuery
        //     case 2:
        //         return this.Query = this.jurusanQuery
        //     case 3:
        //         return this.Query = this.dosenQuery
        //     case 4:
        //         return this.Query = this.matakuliahQuery
        //     case 5:
        //         return this.Query = this.kontrakQuery
        // }
    }

    // TEST EXPERIMENT

    // Edit a specific record in a table
    // testUpdate(valuesUpdated, valuesOld) {
    //     let query = `UPDATE mahasiswa set nama = ${valuesUpdated} where nama = ${valuesOld}`
    //     this.db.run(query, function (err) {
    //         if (err) {
    //             return console.error(err.message);
    //         }
    //         console.log(`Row(s) updated!}`);
    //     });
    // }

    // testModel(c, d) {
    //     let a = 4 - c
    //     let b = 5 - d
    //     return [a, b]
    // }
}

class View {

    constructor() {
        // Interface for result
        this.result = new Table({
            head: model.GenerateQuery(),
            // colWidths: [15, 21, 10], //set the widths of each column (optional)
        });
        // this.border = `=============================================`
        // this.mainMenu = `[1] Mahasiswa\n[2] Jurusan\n[3] Dosen\n[4] Matakuliah\n[5] Kontrak\n[6] Keluar`
        // this.answerText = `masukkan salah satu no. dari opsi diatas:`

    }

    init() {
        this.setPrompt(`Welcome to the app!\nLogin to proceed..\n`)
    }

    // Model event handling

    // Display all records in a table
    showResult(result, mode) {
        if (mode === 1) {
            result.then((row) => {
                this.result.push(row)
                console.log(this.result.toString());
            }).catch((err) => {
                this.result.push(err)
                console.log(this.result.toString());
            })
        }
    }

    testTable() {
        this.result.push(['test1'], ['test2'], ['test3'], ['test4'])
        console.log(this.result.toString());
    }

    // TEST EXPERIMENT
    // Find a record in table
    // Add a record in a table
    // Delete a record in a table
    // TESTING PROPERTY AND METHODS
    // testReadline(value) {
    //     let container = value
    //     this.rl.on('line', container)
    //     return container
    // }

    // testView() {
    //     return this.test
    // }



    // answerPrompt() {
    //     this.rl.setPrompt(this.answerPrompt)
    //     this.rl.prompt()
    // }

    // respondPrompt(value) {
    //     this.rl.setPrompt(value)
    //     this.rl.prompt()
    // }


}

class Controller {
    constructor(model = new Model, view = new View) {
        // import the instance of Model and View
        this.model = model
        this.view = view

        // Creating the interface        
        // this.rl = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout,
        // })

        // // Handling Event rl.close()
        // this.rlclose = this.rl.on('close', () => {
        //     console.log(`Closing the app..\n`);
        //     process.exit(0);
        // });
    }

    init(value) {
        console.log(`selamat datang\n`)
        this.displayTheResult(value)
        // this.rl.on('line', (answer) => {
        //     if (answer === 1) {
        //         this.displayTheResult()
        //     }
        // }))

        // TEST LOGIN 
        // this.view.testReadline((answer) => {
        //     if (answer === model.loginData[0]) {
        //         console.log(`selamat anda masuk\n`);
        //         this.run()
        //     } else {
        //         console.log(`gagal\n`);
        //         this.init()
        //     }
        // })
    }

    // Bridge the model and view
    displayTheResult = (result) => {
        this.view.showResult(result)
    }


    // Handle quit app
    quit() {
        this.rl.close()
    }

    // // User processing code
    // setPrompt(value) {
    //     this.rl.setPrompt(value)
    //     this.rl.prompt()
    // }

}

// const appView = new View()
// // appView.testTable()
// const appModel = new Model()
// appModel.GenerateQuery(5)
// appModel.Display(2)
// const app = new Controller(appModel, appView)

const AppModel = new Model()
const AppView = new View()

let x = AppModel.GenerateQuery(1)[8]
let y = AppView.result.length
console.log(x);
console.log(y);