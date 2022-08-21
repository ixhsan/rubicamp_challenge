function pola(str) {
    let strToArr = str.split(' ')
    let lvlNum = 0
    const container1 = [], container2 = [], result = []

    // 1. GENERATE KEMUNGKINAN NUMBER KE DALAM ARRAY
    for (let i = 0; i < 10; i++) {
        container1.push(strToArr[0].replace('#', i) * strToArr[2])
        container2.push(i)
    }

    // 2. CONVERT NUMBER TO ARRAY OF STRING
    // bisa method dengan join dan split atau method array map
    let contToStr = container1.map(String)

    // CHECKPOINT UNTUK KELUAR DARI NESTED LOOP
    chkpoint_satu:

    // 3. CHECK NUMBER YANG UDAH DI GENERATE
    for (let i = 0; i < contToStr.length; i++) {

        //4. ACCESS ARRAY OF STRING contToStr SEBAGAI ARRAY OF CHARACTER
        for (let j = 0; j < contToStr[i].split('').length; j++) {

            //5. MULAI HITUNG NILAI KESAMAAN MASING-MASING DIGIT
            if (contToStr[i].split('')[j] === strToArr[4][j]) {
                lvlNum++

                //6. CHECK JIKA NILAI LVLNUM SAMA DENGAN ATAU LEBIH DENGAN PANJANG NUMBER ARRAY ORIGINAL
                if (lvlNum >= strToArr[4].length - 1) {

                    // 7. HASIL AKHIR
                    result.push(container2[i])
                    result.push(parseInt(contToStr[i][strToArr[4].indexOf('#')]))
                    break chkpoint_satu
                }
            }
        }

        lvlNum = 0
    }
    return result
}

console.log(pola("42#3 * 188 = 80#204"));// result: [8, 5]
console.log(pola("8#61 * 895 = 78410#5"));// [7, 9]