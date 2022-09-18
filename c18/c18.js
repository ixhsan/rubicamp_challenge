import sqlite from "sqlite3"
import CliTable3 from "cli-table3"
// import Table from "cli-table"
import readline from "node:readline"
import { lookup } from "node:dns"
sqlite.verbose()

const data = "./university.db"
// const db = new sqlite.Database(data, sqlite.OPEN_READWRITE, (err) => {
//     if (err) throw err
//     console.log(`connected to the ${data} database`);
// })

// db.serialize(() => {
//     db.each(`SELECT mahasiswa.nama from mahasiswa`, (err, row) => {
//         if (err) throw err
//         console.log(row.nama);
//     })
// })

// Login function

// Declaring MVC

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
        this._data = new sqlite.Database(data, sqlite.OPEN_READWRITE, (err) => { if (err) throw err })

        // Syntax for Database Query

        // Display all data
        this.mahasiswa = "SELECT * FROM mahasiswa";
        this.jurusan = "SELECT * FROM jurusan";
        this.dosen = "SELECT * FROM dosen";
        this.matakuliah = "SELECT * FROM matakuliah";
        this.kontrak = "SELECT * FROM kontrak";

        // Browse specific data
        this.mahasiswaAt = "SELECT * FROM mahasiswa WHERE nim=?";
        this.jurusanAt = "SELECT * FROM jurusan WHERE idjurusan=?";
        this.dosenAt = "SELECT * FROM dosen WHERE nip=?";
        this.matakuliahAt = "SELECT * FROM matakuliah WHERE kodematkul=?";
        this.kontrakAt = "SELECT * FROM kontrak WHERE idkontrak=?";

        // Add data
        this.mahasiswaUpdate =
            "INSERT INTO mahasiswa(nim,namamahasiswa,idjurusan,alamat) VALUES(?,?,?,?)";
        this.jurusanUpdate = "INSERT INTO jurusan(idjurusan,namajurusan) VALUES(?,?)";
        this.dosenUpdate = "INSERT INTO dosen(nip,namadosen,idjurusan) VALUES(?,?,?)";
        this.matakuliahUpdate =
            "INSERT INTO matakuliah(kodematkul,namamatkul,sks,idjurusan) VALUES(?,?,?,?)";
        this.kontrakUpdate =
            "INSERT INTO kontrak(idkontrak,nilai,nim,kodematkul,nip) VALUES(?,?,?,?,?)";

        // Delete data
        this.mahasiswaDelete = "DELETE FROM mahasiswa WHERE nim=?";
        this.jurusanDelete = "DELETE FROM jurusan WHERE idjurusan=?";
        this.dosenDelete = "DELETE FROM dosen WHERE nip=?";
        this.dosenDelete = "DELETE FROM matakuliah WHERE kodematkul=?";
        this.kontrakDelete = "DELETE FROM kontrak WHERE idkontrak=?";
    }

    get loginData() {
        let LoginArr = [this.#userName, this.#passWord]
        return LoginArr
    }

    // TEST PROPERTY AND METHOD

    testModel() {
        return this.test
    }
}

class View {

    constructor() {
        // Test prototype access
        this.test = `Successfully accessed View Class!`

        // Creating the interface        
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })

        // Handling Event rl.close()
        this.rlclose = this.rl.on('close', () => {
            console.log(`Closing the app..\n`);
            process.exit(0);
        });

        // Interface for result
        this.queryResult = new CliTable3({
            chars: {
                'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
                , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
                , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
                , 'right': '║', 'right-mid': '╢', 'middle': '│'
            }
        });


    }

    init() {
        this.userPrompt(`Welcome to the app!\nLogin to proceed..\n`)
    }

    // User processing code
    userPrompt(value) {
        this.rl.setPrompt(value)
        this.rl.prompt()
    }

    respondPrompt(value) {
        this.rl.setPrompt(value)
        this.rl.prompt()
    }

    // Handle quit app
    quit() {
        this.rl.close()
    }

    // TESTING PROPERTY AND METHODS
    testReadline(value) {
        let container = value
        this.rl.on('line', container)
        return container
    }

    testView() {
        return this.test
    }

    testTable() {
        this.queryResult.push(['test1'], ['test2'], ['test3'], ['test4'])
        console.log(this.result.toString());
    }

}

class Controller {
    constructor(model = new Model, view = new View) {
        // import the instance of Model and View
        this.model = model
        this.view = view

    }

    init() {
        var initThis = this
        this.view.init()
        this.Idle()
        // let b = this.view.testReadline((answer) => {
        //     console.log(this.model.loginData[0]);
        //     if (answer === this.model.loginData[0]) {
        //         this.view.respondPrompt(`berhasil..`)
        //         this.Idle()
        //     } else {
        //         this.view.respondPrompt(`Coba lagi...`);
        //     }
        // })
        // this.view.rl.on('line', (answer) => {
        //     this.model.login(answer) ? this.Idle() : this.view.respondPrompt(`Coba lagi..\n`)
        // })
    }

    Idle() {
        this.view.testReadline((value) => {
            switch (value) {
                case 'add':
                    this.view.respondPrompt(`anda berhasil mengakses Add!\n`)
                    break
                case 'edit':
                    this.view.respondPrompt(`anda berhasil mengakses Edit!\n`)
                    break
                case 'read':
                    this.view.respondPrompt(`anda berhasil mengakses Read!\n`)
                    break
                case 'browse':
                    this.view.respondPrompt(`anda berhasil mengakses Browse!\n`)
                    break
                case 'delete':
                    this.view.respondPrompt(`anda berhasil mengakses Delete!\n`)
                    break
                case 'close':
                    this.view.respondPrompt(`closing..\n`)
                    this.view.quit()
                default:
                    this.view.respondPrompt(`Coba lagi..\n`)
                    break
            }
        })
    }
}

const app = new Controller(new Model, new View)
app.init()

// const model = new View()
// model.testTable()