
// CHALLENGE - 8
// function pola(str) {
//     //write your code here
//     return str 
// }

// console.log(pola("42#3 * 188 = 80#204"));// result: [8, 5]
// console.log(pola("8#61 * 895 = 78410#5"));// [7, 9]

// FUNGSI NYARI LOKASI #
// let hashLoc = []
// let hashLocUpdated
// for (let i in strToArr) {
//     hashLoc.push(strToArr[i].indexOf('#'))
// }
// console.log(`hashloc update ${hashLoc}`);
// hashLocUpdated = hashLoc.filter(num => num > -1)
// console.log(hashLocUpdated);

let str = "42#3 * 188 = 80#204"
let strToArr = str.split(' ')
let lvlNum = 0
const container1 = [], container2 = [], result = []

// 1. GENERATE KEMUNGKINAN NUMBER KE DALAM ARRAY
for (let i = 0; i < 10; i++) {
    container1.push(strToArr[0].replace('#', i) * strToArr[2])
    container2.push(i)

}
// TEST RESULT
// console.log(container1)
// console.log(`nilai variasi ${container2}`)

// 2. CONVERT NUMBER TO ARRAY OF STRING
// bisa method dengan join dan split
// let contToStr2 = container1.join(',').split(',')
// console.log(contToStr2)
// atau method array map
let contToStr = container1.map(String)

// CHECKPOINT UNTUK KELUAR DARI NESTED LOOP
chkpoint_satu:

// 3. CHECK NUMBER YANG UDAH DI GENERATE
for (let i = 0; i < contToStr.length; i++) {
    //TEST OUTPUT I
    // console.log(contToStr[i]);

    //ACCESS ARRAY OF STRING contToStr SEBAGAI ARRAY OF CHARACTER
    for (let j = 0; j < contToStr[i].split('').length; j++) {
        //TEST OUTPUT J
        // console.log(`ini di i ke ${i}, j ke ${j}, angkanya ${contToStr[i].split('')[j]}`);
        
        // MULAI HITUNG NILAI KESAMAAN MASING-MASING DIGIT
        if (contToStr[i].split('')[j] === strToArr[4][j]) {
            lvlNum++
            //TES OUTPUT lvlNum
            // console.log(`ini lvlNum ${lvlNum}`);

            // CHECK JIKA NILAI LVLNUM SAMA DENGAN ATAU LEBIH DENGAN PANJANG NUMBER ARRAY ORIGINAL
            if (lvlNum >= strToArr[4].length - 1) {
                // console.log(`nilai lvlNum ${lvlNum} berhasil dicapai`);
                console.log(`angka berhasil didapatkan yaitu ${contToStr[i]}`);

                // HASIL AKHIR
                // console.log(`nomor yang hilang di bilangan 1 ada di index ${i}`);
                // console.log(`yaitu ${container2[i]}`);
                result.push(container2[i])
                // console.log(`nomor yang hilang di bilangan 2 ada di index ${strToArr[4].indexOf('#')}`);
                // console.log(`yaitu ${contToStr[i][strToArr[4].indexOf('#')]}`);
                result.push(parseInt(contToStr[i][strToArr[4].indexOf('#')]))
                break chkpoint_satu
            }
        }
    }
    // console.log(`angka ${contToStr[i]} sudah dicek`);

    // RESET LVLNUM + BREAK LOOP
    // lvlNum < strToArr[4].length - 1 ? lvlNum = 0: i = contToStr.length + 1
    lvlNum = 0
}

//FUNGSI PENGECHECKAN NUMBER
// for (let i in total.toString().split('')) {
//     if (total.toString()[i] === strToArr[4][i])  {
//         lvlNum++
//         //TES OUTPUT hampir sama
//         console.log(`ini lvlNum ${lvlNum}`);
//         if (lvlNum >= strToArr[4].length - 1) {
//             test = "lvlNum berhasil"
//             //TEST lvlNum
//             console.log(test);
//             console.log(`nilai lvlNum ${lvlNum}`);
//             console.log(`ini nilainya ${total}`);
//             break
//         }
//     }
// }

//COLLECTION TEST VAR FOR
// console.log(total.toString().length);
// console.log(`ini strToArt[4].length ${strToArr[4].length}`);
// console.log(`ini str slice ${str.slice(0,2)}`);
// console.log(`ini str slice ${strToArr[4].slice(0,2)}`);
// console.log(test);
// console.log(total.toString()[1]);
// console.log(typeof total.toString()[0]);
// console.log(typeof strToArr[4][0]);
// console.log(total.toString().split('').length);
// console.log(5 < 5);
console.log(result);