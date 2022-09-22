import Table from "cli-table3"
import color from "@colors/colors"

class Model {
    constructor() {
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
        this.mahasiswa = [{
            nim: '005',
            nama: 'deri',
            alamat: 'cianjur',
            jurusan: 'teknik mesin',
            DoB: '2003-02-01'
        }]
    }

    Display(table, mode) {
        const ObjTable = {
            satu: this.mahasiswa,
            dua: this.jurusan,
            tiga: this.dosen,
            empat: this.matakuliah,
            lima: this.kontrak
        }
        let tables = ObjTable[table]
        return new Promise((resolve, reject) => {
            if (mode === 1) {
                resolve(tables)
            } else {
                reject('wah error mang')
            }
        })
    }

    // Display all the record in a table
    Display2(mode) {

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
    }

}

class View {
    constructor() {
        this.table = new Table({
            head: ['default table']
        })
    }

    Display(table) {
        table.then((message) => {
            let entry = []
            for (let i = 0; i < message.length; i++) {
                for (let key in message[i]) {
                    entry.push(message[i][key][0].toUpperCase() + message[i][key].substring(1))
                }
            }
            this.table.push(entry)
            let row = this.table.toString()
            console.log(row)
        }).catch((err) => {
            console.log(err);
        })
    }

    testTable() {
        this.table.push(['hahahahahahahahahaha', 'test', 'test'])
        console.log(this.table.toString());
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
    }

    Display(table) {
        this.view.Display(table)
        // this.view.testTable()
    }
}

const appModel = new Model()
const appView = new View()
const app = new Controller(appModel, appView)
const a = app.model.GenerateQuery(1)
app.view.setTable(a[8])
const b = appModel.Display('satu', 1)
app.Display(b)
