// GANTI STRING DALAM ARRAY

// var obj = {
//     'property': 'Mahasiswa',
//     'key': 'NIM'
//   }

//   var text = "{property} dengan {key}: ? tidak terdaftar"

//   console.log(mutliStringReplace(obj,text))

//   function mutliStringReplace(object, string) {
//         var val = string
//         var entries = Object.entries(object);
//         console.log(entries);
//         entries.forEach((item)=> {
//             var find = '{' + item[0] + '}'
//             var regExp = new RegExp(find,'g')
//          val = val.replace(regExp, item[1])
//          console.log(item);
//       })
//     return val;
//   }

// const defaultPrompt = [
//     `masukkan key: `,
//     `property dengan key: ? tidak terdaftar`,
//     `masukkan key property yang akan dihapus: `,
//     `property dengan key: ? telah dihapus`
// ]

// const table = ['mahasiswa', 'jurusan', 'dosen', 'matakuliah', 'kontrak']
// const keys = ['NIM', 'id', 'NIP', 'Kode', 'id']

// let textmod = function (value) {
//     let updatedPrompt = []
//     for (let key in defaultPrompt) {
//         updatedPrompt.push(
//             defaultPrompt[key]
//                 .replace(/key/g, keys[value])
//                 .replace(/property/g, props[value])
//         )
//     }
//     return updatedPrompt
// }

// console.log(textmod(1));
// let a = 4

// TEST PROMISE
// const p = new Promise((resolve, reject) => {
//     if (a === 5) {
//         resolve(a)
//     } else {
//         reject(a)
//     }
// })

// p.then((message) => {
//     console.log(`waw ${message}`)
// }).catch((message) => {
//     console.log(`waduh ${message}`);
// })

// const Obj = {
//     "name": "tesa",
//     "class": "6a"
// }

// let c = Object.keys(Obj).toString()
// console.log(c);

// TEST LOOPING ARRAY

const query = {
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

function setHeader(keys) {
    const tableSet = ['not found', 'mahasiswa', 'jurusan', 'dosen', 'matakuliah', 'kontrak']
    const setHead = query[tableSet[keys]][8]
    return setHead
}

const finalArr = setHeader(5)

console.log(finalArr);

// METODE UNTUK AKSES ARRAY OF OBJECT
// for (let i = 0; i < arrOfTwo.length; i++) {
//     for (let key in arrOfTwo[i]) {
//         arrSelect.push(key)
//         console.log(`ini ${key} for ${arrOfTwo[i][key]}`);
//     }
// }


// let a = arrOfTwo.entries()

// for (let [index, key] of  arrOfTwo.entries()) {
//     for (let key in arrOfTwo[index]) {
//         console.log(`ini let of entries ${index}, ${key}`);
//     }
// }


// metode looping buat array
// for (let key of arrOfOne) {
//     console.log(`ini let of ` + key);
// }

// for (let key in arrOfOne) {
//     console.log(`ini let in ` + key);
// }

// for (let key in arrOfTwo[0]) {
//     console.log(key + ' ' + arrOfTwo[0][key]);
// }