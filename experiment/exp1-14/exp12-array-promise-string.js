// // /* TEST MENU SWITCHING DENGAN CASE */
// // // let b = Obj['dosen']
// // // let c = Obj['jurusan'] ?? Obj['mahasiswa']

// // // console.log(b);
// // // console.log(c);

// // // switch (answer) {
// // //     case 1:
// // //         console.log(bar);
// // //         console.log('menu mahasiswa');
// // //         rl.prompt()
// // //         break
// // //     case 2:
// // //         console.log(bar);
// // //         console.log('menu jurusan');
// // //         rl.prompt()
// // //         break
// // //     case 3:
// // //         console.log(bar);
// // //         console.log('menu dosen');
// // //         rl.prompt()
// // //         break
// // //     case 4:
// // //         console.log(bar);
// // //         console.log('menu matakuliah');
// // //         rl.prompt()
// // //         break
// // //     case 5:
// // //         console.log(bar);
// // //         console.log('menu kontrak');
// // //         rl.prompt()
// // //         break
// // //     default:
// // //         console.log(bar);
// // //         console.log('kok default');
// // //         rl.prompt()
// // //         break
// // // }
// // // })
// // // rl.question('Username: ', (username) => {
// // //     if (username == "admin") {
// // //         rl.question('Password: ', (password) => {
// // //             console.log(bar);
// // //             if (password == "1") {
// // //                 console.log(`Welcome, ${username}. Your access level is: ADMIN`);
// // //                 console.log(bar);
// // //                 console.log(`[1] Mahasiswa\n[2] Jurusan\n[3] Dosen\n[4] Matakuliah\n[5] Kontrak\n[6] Keluar\n`)
// // //                 rl.setPrompt(`Masukkan salah satu no. dari opsi diatas: `)
// // //                 rl.prompt()
// // //                 rl.on('line', (answer) => {
// // //                     switch (answer) {
// // //                         case 1:
// // //                             console.log(bar);
// // //                             console.log('menu mahasiswa');
// // //                             rl.prompt()
// // //                             break
// // //                         case 2:
// // //                             console.log(bar);
// // //                             console.log('menu jurusan');
// // //                             rl.prompt()
// // //                             break
// // //                         case 3:
// // //                             console.log(bar);
// // //                             console.log('menu dosen');
// // //                             rl.prompt()
// // //                             break
// // //                         case 4:
// // //                             console.log(bar);
// // //                             console.log('menu matakuliah');
// // //                             rl.prompt()
// // //                             break
// // //                         case 5:
// // //                             console.log(bar);
// // //                             console.log('menu kontrak');
// // //                             rl.prompt()
// // //                             break
// // //                         default:
// // //                             console.log(bar);
// // //                             console.log('kok default');
// // //                             rl.prompt()
// // //                             break
// // //                     }
// // //                 })
// // //             } else {
// // //                 console.log(`coba lagi`);
// // //             }
// // //         })
// // //     } else {
// // //         console.log('coba lagi');
// // //     }

// // // })
// // /* activating readline */

// // /* TEST LOGIN  */
// // // function generateObj(value) {
// // //     let selecobj = [
// // //         `not found`:, 
// // //         `mahasiswa`:, 
// // //         `jurusan`:, 
// // //         `dosen`:, 
// // //         `matakuliah`:, 
// // //         `kontrak`
// // //     ]
// // //     return selecobj[value]
// // // }

// // // function login() {
// // //     rl.setPrompt(`Masukkan salah satu no. dari opsi diatas: `)
// // //     rl.prompt()
// // //     rl.on('line', (line) => {
// // //         if (line === 'admin') {
// // //             console.log(`berhasil masuk`);
// // //             rl.close()
// // //             // process.exit(0)
// // //             return menu()
// // //         } else {
// // //             console.log(`Username atau password anda salah, silahkan coba lagi.`);
// // //         }
// // //         rl.prompt()
// // //     })
// // // }

// // // rl.prompt()
// // /* TEST PAKE CASE SINGLE MANUAL */
// // // switch (Number(answer)) {
// // //     // fungsi show all records
// // //     case 1:
// // //         console.log(`show ${teks}`);
// // //         // rl.prompt()
// // //         break;
// // //     // fungsi find a record
// // //     case 2:
// // //         console.log(`find a ${teks}`);
// // //         // rl.prompt()
// // //         break;
// // //     // fungsi add a record
// // //     case 3:
// // //         console.log(`add ${teks}`);
// // //         // rl.prompt()
// // //         break;
// // //     // fungsi delete a record
// // //     case 4:
// // //         console.log(`delete ${teks}`);
// // //         // rl.prompt()
// // //         break;
// // //     // fungsi delete a record
// // //     case 5:
// // //         console.log(`kembali`);
// // //         process.stdout.write('\u001B[2J\u001B[0;0f')
// // //         return pageMainMenu()
// // //     default:
// // //         console.log(`Silahkan pilih antara opsi 1-5.`);
// // //         break
// // // }
// // // rl.setPrompt(`kenapa masukkan salah satu no. dari opsi diatas: `)
// // // rl.prompt()
// // /* TEST PAKE CASE MANUAL*/
// // // break;
// // //     case 2:
// // //         console.log(`[1] daftar jurusan\n[2] cari jurusan\n[3] tambah jurusan\n[4] hapus jurusan\n[5] kembali`)
// // //         console.log(lineBreak);
// // //         rl.setPrompt(`masukkan salah satu no. dari opsi diatas: `)
// // //         rl.prompt()
// // //         rl.on(`line`, (answer) => {
// // //             switch (Number(answer)) {
// // //                 // fungsi show all records
// // //                 case 1:
// // //                     console.log(`show jurusan`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi find a record
// // //                 case 2:
// // //                     console.log(`find a jurusan`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi add a record
// // //                 case 3:
// // //                     console.log(`add jurusan`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi delete a record
// // //                 case 4:
// // //                     console.log(`delete jurusan`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi delete a record
// // //                 case 5:
// // //                     console.log(`back`);
// // //                     pageMainMenu()
// // //                     break;
// // //                 default:
// // //                     console.log(`choose from 1-5`);
// // //                     rl.prompt()
// // //                     break
// // //             }
// // //         })
// // //         break;
// // //     case 3:
// // //         console.log(`[1] daftar dosen\n[2] cari dosen\n[3] tambah dosen\n[4] hapus dosen\n[5] kembali`)
// // //         console.log(lineBreak);
// // //         rl.setPrompt(`masukkan salah satu no. dari opsi diatas: `)
// // //         rl.prompt()
// // //         rl.on(`line`, (answer) => {
// // //             switch (Number(answer)) {
// // //                 // fungsi show all records
// // //                 case 1:
// // //                     console.log(`show dosen`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi find a record
// // //                 case 2:
// // //                     console.log(`find a dosen`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi add a record
// // //                 case 3:
// // //                     console.log(`add dosen`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi delete a record
// // //                 case 4:
// // //                     console.log(`delete dosen`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi delete a record
// // //                 case 5:
// // //                     console.log(`back`);
// // //                     pageMainMenu()
// // //                     break;
// // //                 default:
// // //                     console.log(`choose from 1-5`);
// // //                     rl.prompt()
// // //                     break
// // //             }
// // //         })
// // //         break;
// // //     case 4:
// // //         console.log(`[1] daftar matakuliah\n[2] cari matakuliah\n[3] tambah matakuliah\n[4] hapus matakuliah\n[5] kembali`)
// // //         console.log(lineBreak);
// // //         rl.setPrompt(`masukkan salah satu no. dari opsi diatas: `)
// // //         rl.prompt()
// // //         rl.on(`line`, (answer) => {
// // //             switch (Number(answer)) {
// // //                 // fungsi show all records
// // //                 case 1:
// // //                     console.log(`show matakuliah`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi find a record
// // //                 case 2:
// // //                     console.log(`find a matakuliah`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi add a record
// // //                 case 3:
// // //                     console.log(`add matakuliah`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi delete a record
// // //                 case 4:
// // //                     console.log(`delete matakuliah`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi delete a record
// // //                 case 5:
// // //                     console.log(`back`);
// // //                     pageMainMenu()
// // //                     break;
// // //                 default:
// // //                     console.log(`choose from 1-5`);
// // //                     rl.prompt()
// // //                     break
// // //             }
// // //         })
// // //         break;
// // //     case 5:
// // //         console.log(`[1] daftar kontrak\n[2] cari kontrak\n[3] tambah kontrak\n[4] hapus kontrak\n[5] kembali`)
// // //         console.log(lineBreak);
// // //         rl.setPrompt(`masukkan salah satu no. dari opsi diatas: `)
// // //         rl.prompt()
// // //         rl.on(`line`, (answer) => {
// // //             switch (Number(answer)) {
// // //                 // fungsi show all records
// // //                 case 1:
// // //                     console.log(`show kontrak`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi find a record
// // //                 case 2:
// // //                     console.log(`find a kontrak`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi add a record
// // //                 case 3:
// // //                     console.log(`add kontrak`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi delete a record
// // //                 case 4:
// // //                     console.log(`delete kontrak`);
// // //                     rl.prompt()
// // //                     break;
// // //                 // fungsi delete a record
// // //                 case 5:
// // //                     console.log(`back`);
// // //                     pageMainMenu()
// // //                     break;
// // //                 default:
// // //                     console.log(`choose from 1-5`);
// // //                     rl.prompt()
// // //                     break
// // //             }
// // //         })
// // //         break;
// // //     default:
// // //         console.log(`masukkan menu diantara 1-5`);
// // //         rl.prompt()
// // //         break
// // // }
// // // rl.prompt()

// // /* SELECTIVE OPERATION */

// // // function pageOperation(input, output, checkOutput = 'no') {
// // //     let teks = generateQuery(input)
// // //     let isOutput = checkOutput
// // //     process.stdout.write('\u001B[2J\u001B[0;0f')
// // //     if (isOutput === 'yes') {
// // //         console.log(output);
// // //     }
// // //     console.log(`${lineBreak}\n${teks}\n${lineBreak}\n[1] daftar ${teks}\n[2] cari ${teks}\n[3] tambah ${teks}\n[4] hapus ${teks}\n[5] kembali\n${lineBreak}`)
// // //     rl.question(`masukkan salah satu no. dari opsi diatas: `, (answer) => {
// // //         process.stdout.write('\u001B[2J\u001B[0;0f')
// // //         Number(answer) === 5 ? result = '' : result = executeNow(answer)
// // //         Number(answer) === 5 ? isOutput = 1 : isOutput = 0
// // //         Number(answer) === 5 ? pageMainMenu(null) : pageOperation(input, result, 'yes')

// // /* METODE 3 - SHORTENING CASCADE */
// // // if (Number(answer) === 5) {
// // //     isOutput = 1
// // //     pageMainMenu(null)
// // // } else {
// // //     result = executeNow(answer)
// // //     isOutput = 0
// // //     pageOperation(input, result, 0)
// // // }

// // /* METODE 2 - SHORTENING CASCADE*/
// // // if (Number(answer) > 0 && Number(answer) < 5) {
// // //     process.stdout.write('\u001B[2J\u001B[0;0f')
// // //     textOutput = executeNow(answer)
// // //     count = 0
// // //     pageOperation(input, textOutput, 0)
// // // } else if (Number(answer) === 5) {
// // //     process.stdout.write('\u001B[2J\u001B[0;0f')
// // //     count = 1
// // //     pageMainMenu(null)
// // // } else {
// // //     process.stdout.write('\u001B[2J\u001B[0;0f')
// // //     textOutput = executeNow(answer)
// // //     count = 0
// // //     pageOperation(input, textOutput, 0)
// // // }

// // /* METODE 1 - CASCADE CASE */
// // // if (Number(answer) > 5 || Number(answer) < 0) {
// // //     process.stdout.write('\u001B[2J\u001B[0;0f')
// // //     console.log(`Silahkan pilih antara opsi 1-5.`);
// // //     pageOperation(input, textOutput, 0)
// // // }
// // // else if (Number(answer) === 1) {
// // //     process.stdout.write('\u001B[2J\u001B[0;0f')
// // //     textOutput = `daftar ${teks}`
// // //     pageOperation(input, textOutput, 0)
// // // } else if (Number(answer) === 2) {
// // //     process.stdout.write('\u001B[2J\u001B[0;0f')
// // //     textOutput = `cari ${teks}`
// // //     count = 0
// // //     pageOperation(input, textOutput, 0)
// // // } else if (Number(answer) === 3) {
// // //     process.stdout.write('\u001B[2J\u001B[0;0f')
// // //     textOutput = `tambah ${teks}`
// // //     count = 0
// // //     pageOperation(input, textOutput, 0)
// // // } else if (Number(answer) === 4) {
// // //     process.stdout.write('\u001B[2J\u001B[0;0f')
// // //     textOutput = `hapus ${teks}`
// // //     count = 0
// // //     pageOperation(input, textOutput, 0)
// // // } else if (Number(answer) === 5) {
// // //     process.stdout.write('\u001B[2J\u001B[0;0f')
// // //     console.log(`kembali`);
// // //     count = 1
// // //     return pageMainMenu(null)
// // // }

// // //     })
// // // }

// import readline from 'node:readline'

/* DEKLARASI FUNGSI & COMPONENT*/

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// let userInput = []
// let lineBreak = `======================================================`;

// /* OPERATING FUNCTION */
// function ShowAll(page1Input, query) {
//     let result = `showing something..\n${page1Input}`
//     userInput = []
//     return pageOperation(page1Input, 'yes', result);
// }

// function Find(page1Input, query = 1) {
//     let result = `finding something..\n${page1Input}\n${query}`
//     userInput = []
//     return pageOperation(page1Input, 'yes', result);
// }

// function Add(page1Input, query = 1) {
//     let result = `adding something..\n${page1Input}\n${query}`;
//     userInput = []
//     return pageOperation(page1Input, 'yes', result);
// }

// function Delete(page1Input, query = 1) {
//     let result = `deleting something..\n${page1Input}\n${query}`;
//     userInput = []
//     return pageOperation(page1Input, 'yes', result);
//     // }
// }

// function offTheOption(page1Input, query) {
//     let result = `Silahkan pilih antara opsi 1-5.\n${page1Input}`;
//     userInput = []
//     return pageOperation(page1Input, 'yes', result);
// }

// // Supplement function

// function generateQuery(objIndex) {
//     let selecobj = [`not found`, `mahasiswa`, `jurusan`, `dosen`, `matakuliah`, `kontrak`]
//     return selecobj[objIndex]
// }

// function generateQuestion(value, pageInput) {
//     if (Number(pageInput[1]) === 2 || Number(pageInput[1]) === 4) {
//         let singleValue = [value[0]]
//         rl.question(`${singleValue[0]}: `, (answer) => {
//             userInput.push(answer)
//             if (singleValue.length > 1) {
//                 singleValue.splice(0, 1)
//                 generateQuestion(singleValue, pageInput)
//             } else {
//                 return executeNow('operation', pageInput, userInput)
//             }
//         })
//     } else {
//         rl.question(`${value[0]}: `, (answer) => {
//             userInput.push(answer)
//             if (value.length > 1) {
//                 value.splice(0, 1)
//                 generateQuestion(value, pageInput)
//             } else {
//                 return executeNow('operation', pageInput, userInput)
//             }
//         })
//     }
// }

// function executeNow(mode = 'operation', pageInput, query) {
//     /* Select obj */
//     const objSelect = [
//         null,
//         ["NIM", "Nama", "Alamat", "Jurusan", "DoB"],
//         ["ID", "Nama Jurusan"],
//         ["NIP", "Nama Dosen", "Matakuliah"],
//         ["Kode", "Nama Matakuliah", "Jumlah SKS"],
//         ["ID", "Nama Mahasiswa", "Alamat", "Jurusan", "DoB"]
//     ]

//     const queryExec = objSelect[pageInput[0]]

//     /* Select Operation */
//     const operateSelect = [
//         null,
//         ShowAll,
//         Find,
//         Add,
//         Delete
//     ]

//     const operate = operateSelect[pageInput[1]] ?? offTheOption
//     return mode === 'operation' ? operate(pageInput[0], query) : queryExec
// }

// /* Main page */
// /* PAGE Login */
// function pageLogin(/*mode = 1*/) {
//     // const clearLine = mode ?? process.stdout.write('\u001B[2J\u001B[0;0f')
//     console.log(`${lineBreak}\nWelcome to Universitas Pendidikan Indonesia\nJl Setiabudhi No. 255\n${lineBreak}`)
//     rl.question("Username: ", (answer1) => {
//         console.log(lineBreak);
//         rl.question("Password: ", (answer2) => {
//             console.log(lineBreak);
//             if (answer1 == "admin" && answer2 == "1") {
//                 console.log(`Welcome, ${answer1}. Your access level is: ADMIN `);
//                 // Menu utama
//                 pageMainMenu();
//             } else if (answer1 === '.quit') {
//                 rl.close()
//             } else {
//                 // process.stdout.write('\u001B[2J\u001B[0;0f')
//                 console.log("username atau password anda salah, silakan coba lagi.");
//                 // Kembali looping ke login
//                 pageLogin();
//             }
//         });
//     });
// }

// /* PAGE MainMenu */
// function pageMainMenu(/*mode = 1*/) {
//     // const clearLine = mode ?? process.stdout.write('\u001B[2J\u001B[0;0f')
//     console.log(lineBreak);
//     console.log(`Menu Utama`)
//     console.log(lineBreak);
//     console.log(`[1] Mahasiswa\n[2] Jurusan\n[3] Dosen\n[4] Matakuliah\n[5] Kontrak\n[6] Keluar`)
//     console.log(lineBreak);
//     rl.question(`Masukkan salah satu no. dari opsi diatas: `, (answer) => {
//         console.log(lineBreak);
//         if (Number(answer) > 0 && Number(answer) < 6) {
//             pageOperation(answer, 'no')
//         } else if (Number(answer) === 6) {
//             pageLogin(/*null*/)
//         } else {
//             console.log(`Silahkan pilih menu antara 1-6`);
//             pageMainMenu(/*null*/)
//         }
//     })
// }

// /* PAGE Operation */
// function pageOperation(page1Input, checkOutput = 'no', output) {
//     let teks = generateQuery(page1Input)
//     let isOutput = checkOutput
//     // process.stdout.write('\u001B[2J\u001B[0;0f')
//     if (isOutput === 'yes') {
//         console.log(output);
//     }
//     console.log(/*${lineBreak}\n*/`${teks}\n${lineBreak}\n[1] daftar ${teks}\n[2] cari ${teks}\n[3] tambah ${teks}\n[4] hapus ${teks}\n[5] kembali\n${lineBreak}`)
//     rl.question(`masukkan salah satu no. dari opsi diatas: `, (page2Input) => {
//         // process.stdout.write('\u001B[2J\u001B[0;0f')
//         let pageInput = [page1Input, page2Input]
//         if (Number(pageInput[1]) === 5) {
//             pageMainMenu(/*null*/)
//         } else if (Number(pageInput[1]) === 1){
//             executeNow('operation', pageInput)
//         } else {
//             generateQuestion(executeNow('obj', pageInput), pageInput)
//         }
//     })
// }

// pageLogin(/*null*/)

/*/////////////////////////////////////////////////////////*/

// /*TEST ARRAY OF FUNCTIONS */

// // function test1() {
// //     console.log('test1');
// // }
// // function test2() {
// //     console.log('test2');
// // }
// // function test3() {
// //     console.log('test3');
// // }

// // const testArr = [
// //     test1,
// //     test2,
// //     test3
// // ]

// // testArr[0]()

/* TEST NULLISH COALLESCING OPERATOR (??) */
// // // let Obj = {
// // //     mahasiswa: 'test',
// // //     dosen: 'haha'
// // // }

/* GANTI STRING DALAM ARRAY */
// // // var obj = {
// // //     'property': 'Mahasiswa',
// // //     'key': 'NIM'
// // //   }

// // //   var text = "{property} dengan {key}: ? tidak terdaftar"

// // //   console.log(mutliStringReplace(obj,text))

// // //   function mutliStringReplace(object, string) {
// // //         var val = string
// // //         var entries = Object.entries(object);
// // //         console.log(entries);
// // //         entries.forEach((item)=> {
// // //             var find = '{' + item[0] + '}'
// // //             var regExp = new RegExp(find,'g')
// // //          val = val.replace(regExp, item[1])
// // //          console.log(item);
// // //       })
// // //     return val;
// // //   }

// // // const defaultPrompt = [
// // //     `masukkan key: `,
// // //     `property dengan key: ? tidak terdaftar`,
// // //     `masukkan key property yang akan dihapus: `,
// // //     `property dengan key: ? telah dihapus`
// // // ]

// // // const obj = ['mahasiswa', 'jurusan', 'dosen', 'matakuliah', 'kontrak']
// // // const keys = ['NIM', 'id', 'NIP', 'Kode', 'id']

// // // let textmod = function (value) {
// // //     let updatedPrompt = []
// // //     for (let key in defaultPrompt) {
// // //         updatedPrompt.push(
// // //             defaultPrompt[key]
// // //                 .replace(/key/g, keys[value])
// // //                 .replace(/property/g, props[value])
// // //         )
// // //     }
// // //     return updatedPrompt
// // // }

// // // console.log(textmod(1));
// // // let a = 4

/* TEST PROMISE */
// // // const p = new Promise((resolve, reject) => {
// // //     if (a === 5) {
// // //         resolve(a)
// // //     } else {
// // //         reject(a)
// // //     }
// // // })

// // // p.then((message) => {
// // //     console.log(`waw ${message}`)
// // // }).catch((message) => {
// // //     console.log(`waduh ${message}`);
// // // })

// // // const Obj = {
// // //     "name": "tesa",
// // //     "class": "6a"
// // // }

// // // let c = Object.keys(Obj).toString()
// // // console.log(c);

/* TEST METODE LOOPING ARRAY */
// // // let a = arrOfTwo.entries()
// // // for (let [index, key] of  arrOfTwo.entries()) {
// // //     for (let key in arrOfTwo[index]) {
// // //         console.log(`ini let of entries ${index}, ${key}`);
// // //     }
// // // }

// metode looping buat array
// // // for (let key of arrOfOne) {
// // //     console.log(`ini let of ` + key);
// // // }

// // // for (let key in arrOfOne) {
// // //     console.log(`ini let in ` + key);
// // // }

// // // for (let key in arrOfTwo[0]) {
// // //     console.log(key + ' ' + arrOfTwo[0][key]);
// // // }

/*TEST METODE BUAT AKSES ARRAY DALAM OBJECT PROPERTY*/
// // // const query = {
// // //     mahasiswa: [
// // //         `SELECT * FROM mahasiswa`,
// // //         `SELECT * FROM mahasiswa WHERE nim=?`,
// // //         `INSERT INTO mahasiswa(nim, nama, alamat, jurusan, DoB) VALUES(?,?,?,?,?)`,
// // //         `DELETE FROM mahasiswa WHERE nim=?`,
// // //         `masukkan NIM: `,
// // //         `mahasiswa dengan NIM: ? tidak terdaftar!`,
// // //         `masukkan NIM mahasiswa yang akan dihapus: `,
// // //         `mahasiswa dengan NIM: ? telah dihapus!`,
// // //         ['NIM', 'Nama', 'Alamat', 'Jurusan', 'DoB']
// // //     ],
// // //     jurusan: [
// // //         `SELECT * FROM jurusan`,
// // //         `SELECT * FROM jurusan WHERE idjurusan=?`,
// // //         `INSERT INTO jurusan(idjurusan,nama_jurusan) VALUES(?,?)`,
// // //         `DELETE FROM jurusan WHERE idjurusan=?`,
// // //         `masukkan id jurusan: `,
// // //         `jurusan dengan id: ? tidak terdaftar!`,
// // //         `masukkan id jurusan yang akan dihapus:`,
// // //         `jurusan dengan id: ? telah dihapus!`,
// // //         ['ID jurusan', 'Jurusan']
// // //     ],
// // //     dosen: [
// // //         `SELECT * FROM dosen`,
// // //         `SELECT * FROM dosen WHERE nip=?`,
// // //         `INSERT INTO dosen(nip, nama, matakuliah) VALUES(?,?,?)`,
// // //         `DELETE FROM dosen WHERE nip=?`,
// // //         `masukkan nip: `,
// // //         `dosen dengan nip: ? tidak terdaftar!`,
// // //         `masukkan nip dosen yang akan dihapus:`,
// // //         `dosen dengan nip: ? telah dihapus!`,
// // //         ['NIP', 'Nama Dosen', 'Mata Kuliah']
// // //     ],
// // //     matakuliah: [
// // //         `SELECT * FROM matakuliah`,
// // //         `SELECT * FROM jurusan WHERE idjurusan=?`,
// // //         `INSERT INTO matakuliah(kodematkul, nama, sks) VALUES(?,?,?)`,
// // //         `DELETE FROM matakuliah WHERE kodematkul=?`,
// // //         `masukkan kode matakuliah: `,
// // //         `matakuliah dengan kode: ? tidak terdaftar!`,
// // //         `masukkan kode matakuliah yang akan dihapus: `,
// // //         `matakuliah dengan kode: ? telah dihapus!`,
// // //         ['Kode', 'Nama Matakuliah', 'Jumlah SKS']
// // //     ],
// // //     kontrak: [
// // //         `SELECT * FROM kontrak`,
// // //         `SELECT * FROM kontrak WHERE idkontrak=?`,
// // //         `INSERT INTO kontrak(id,mahasiswa,dosen,matakuliah,nilai) VALUES(?,?,?,?,?)`,
// // //         `DELETE FROM kontrak WHERE id=?`,
// // //         `masukkan id: `,
// // //         `kontrak dengan id: ? tidak terdaftar!`,
// // //         `masukkan id kontrak yang akan dihapus:`,
// // //         `kontrak dengan id: ? telah dihapus!`,
// // //         ['ID', 'Mahasiswa', 'Dosen', 'Matakuliah', 'Nilai']
// // //     ]
// // // }

// // // function setHeader(keys) {
// // //     const objSet = ['not found', 'mahasiswa', 'jurusan', 'dosen', 'matakuliah', 'kontrak']
// // //     const setHead = query[objSet[keys]][8]
// // //     return setHead
// // // }

// // // const finalArr = setHeader(5)

// // // console.log(finalArr);

/* METODE UNTUK AKSES ARRAY OF OBJECT */
// // // const arrOfTwo = [{
// // //     nim: '005',
// // //     nama: 'deri',
// // //     alamat: 'cianjur',
// // //     jurusan: 'teknik mesin',
// // //     DoB: '2003-02-01'
// // // },
// // // {
// // //     nim: '004',
// // //     nama: 'dani',
// // //     alamat: 'surabaya',
// // //     jurusan: 'teknik pangan',
// // //     DoB: '1999-12-29'
// // // }]

// // // let arrSelect = []
// // // let obj = []

// // // for (let i = 0; i < arrOfTwo.length; i++) {
// // //     for (let key in arrOfTwo[i]) {
// // //         arrSelect.push(key)
// // //         console.log(`ini ${key} for ${arrOfTwo[i][key]}`);
// // //     }
// // //     obj.push(arrSelect)
// // //     arrSelect = []
// // // }
// // // console.log(obj);

/* TEST TERNARY OPERATOR */

// // // let a = 5
// // // let b = 'test'

// // // typeof a === 'number' ? console.log('number') : console.log('bukan number');

// // // console.log(typeof a);

/* THIS keyword on normal vs arrow functin */

// function personCreator(name) {

//     this.name = name;

//     const foo = () => {
//         const bar = () => {
//             console.log(this); // Output: { name: 'John' }
//         }

//         console.log(this); // Output: { name: 'John' }

//         bar();
//     }

//     foo();
// }

// const person1 = new personCreator('John');

// const foo = () => {
//     const bar = () => {
//         console.log(this); // Output: { name: 'John' }
//     }

//     console.log(this); // Output: { name: 'John' }

//     bar();
// }

// foo();

/* ASYNC AWAIT */

// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         console.log(`Making request to ${location}`);
//         if (location === 'Google') {
//             resolve('Google says hi')
//         } else {
//             reject('We can only talk to Google')
//         }
//     })
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log("Processing response");
//         resolve(`Extra Information + ${response}`)
//     })
// }

// // makeRequest("facebook").then(response => {
// //     console.log(`Response Received`);
// //     return processRequest(response)
// // }).then(processedResponse => {
// //     console.log(processedResponse);
// // }).catch(err => {
// //     console.log(err);
// // })

// async function doWork() {
//     try {
//         const response = await makeRequest('Facebook')
//         console.log(`Response received`)
//         const processedResponse = await processRequest(response)
//         console.log(processedResponse);
//     } catch(err) {
//         console.log(err);
//     }
// }

// doWork()

/* CONVERT ARRAY OF OBJECT TO TEXT CONCANTENATING */

// let textA = 'test 1'
// let textB = 'test 2'
// let textMod = textA.concat(`\t\t\t text ${textB}`)


// const obj = [{
//     nim: '005',
//     nama: 'deri',
//     alamat: 'cianjur',
//     jurusan: 'teknik mesin',
//     DoB: '2003-02-01'
// }]

// function print() {
//     let result = []
//     let textMerge = ``
//     let textProcessed = ``
//     let textRaw = ``
    
//     for (let i = 0; i < obj.length; i++) {
//         for (let key in obj[i]) {
            
//             typeof obj[i][key] === 'number' ? textRaw = obj[i][key] : textRaw = obj[i][key][0].toUpperCase() + obj[i][key].substring(1)
//             textProcessed = textMerge.concat(`${key[0].toUpperCase() + key.substring(1)}\t: ${textRaw}\n`)
//             result.push(textProcessed)
//         }
//     }
    
//     return result.toString('').replace(/,/g, '')
// }

// console.log(print());

/* TEST TRUTHY DAN FALSY */

// let a = 0
// let b = 1

// if (b == true) {
//     console.log(`var is true`);
// } else {
//     console.log(`var is false`);
// }