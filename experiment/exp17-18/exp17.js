// const ID = 0
// const string = "what"
// const integer = null
// const float = 2.5
// const date = "2002-10-04"
// const boolean = 1

// const dataForm = {
//     String: string,
//     Integer: integer,
//     Float: float,
//     Date: date,
//     Boolean: boolean
// }

// const data = [{
//     String: string,
//     Integer: integer,
//     Float: float,
//     Date: date,
//     Boolean: boolean
// },
// {
//     String: string,
//     Integer: integer,
//     Float: float,
//     Date: date,
//     Boolean: boolean
// }

// ]

// // for (let key in data) {
// //     console.log(data[key].String);
// // }

// for (let key of data) {
//     console.log(key.String);
// }

// // console.log(data);

/* TEST FALSY AND TRUTHY */

// let a = 0
// let b = []
// let c = {
//     "id": 0,
//     "string": 0,
//     "integer": 0,
//     "float": 0,
//     "date": 0,
//     "boolean": 0
// }

// const d = [
//     '',
//     'a',
//     '',
//     ''
// ]

// const e = d.filter(item => item.length > 0).length

// console.log(b == false);
// console.log(b == true);
// console.log(a == false);
// console.log(a == true);
// console.log(c == true);
// console.log(e);
// console.log(e == true);

/* TEST OBJECT */

// let id = ""
// let string = "test"
// let integer = "2"
// let float = ""
// let date = ""
// let boolean = ""

// let filterData = {
//     "ID": id,
//     "String": string,
//     "Integer": integer,
//     "Float": float,
//     "Date": date,
//     "Boolean": boolean
// }

// const filter2 = { "test": "" }

// for (let key in filterData) {
//     if (filterData[key]) {
//         console.log(key);
//     }
// }

// let a = [0]

// // console.log(filter2["test"] == true);
// // console.log(string == true);

// console.log(typeof Object.values(filterData).filter(item => item.length > 0))
// console.log(Object.values(filterData))
// console.log(Object.keys(filterData))

// if (a.length) {
//     console.log(`ada data`);
//     console.log(a);
// } else if (!a.length) {
//     console.log(`gada data`);
// }

/* PERCOBAAN SEARCH MULTIPLE FIELD */

let data = [
    {
        "ID": 1,
        "String": "One Piece",
        "Integer": 2,
        "Float": 2.5,
        "Date": "2022-11-02",
        "Boolean": 1
    },
    {
        "ID": 2,
        "String": "What Piece",
        "Integer": 2,
        "Float": 2.5,
        "Date": "2022-11-02",
        "Boolean": 1
    },
    {
        "ID": 3,
        "String": "Naruto Akipudden",
        "Integer": "2",
        "Float": "14.60008",
        "Date": "2022-10-08",
        "Boolean": "1"
    }
]

let id = "1"
let string = "Piece"
let integer = "2"
let float = ""
let date = ""
let boolean = ""

// let filterAll = {
//     "ID": id,
//     "String": "'",
//     "Integer": '',
//     "Float": '',
//     "Date": '',
//     "Boolean": 1
// }

let filterMulti = {
    "String": "Piece",
    "Integer": 2,
}

let filterSingle = {
    "String": "One Piece",
    "Integer": 1,
}

function filterData(source, itemSearch) {
    let count = 0
    let log = 1
    let resultFinal = []

    for (let i = 0; i < source.length; i++) {
        // for (let key in source[i]) {
        // console.log(key);
        console.log(`====== Percobaan ke ${log}=====`);
        console.log({arrayAkhir1: resultFinal});

        for (let item in itemSearch) {
            let itemToSearch = itemSearch[item]
            let itemTest = new RegExp(itemToSearch, "gi")
            if (itemTest.test(source[i][item])) {
                // resultTemp[item] = source[i][item]
                count++
            }
            console.log({ hasilCount: count});
            // console.log({
            //     Property: item,
            //     itemYgDicari: itemTest,
            //     dataValue: source[i][item],
            //     hasilRegex: itemTest.test(source[i][item]),
            // });

        }
        // }
        log++

        // console.log({
        //     hasilCount: count,
        //     tempResult: resultTemp,
        //     itemSearchLenght: Object.keys(itemSearch).length
        // });
        // console.log('\n');
        // console.log({arrayAkhir2: resultFinal});

        if (count === Object.keys(itemSearch).length) {
            resultFinal.push(source[i])
        }

        console.log({ arrayAkhir3: resultFinal });

        count = 0

    }

    return resultFinal
}

const test = filterData(data, filterMulti)

console.log({logHasil: test});

/* TEST CLASS REGEX */

// let stringTes = "what ehihahe, what hohohahehe 2 3 4 Naruto Akippuden"
// let tesString = "Naruto"
// let regex = new RegExp(tesString, 'gi')

// console.log(regex.test(stringTes));
// console.log(stringTes.match(regex));

// function filterData(source, itemSearch) {
//     let count = 0
//     let resultFinal = []

//     for (let i = 0; i < source.length; i++) {

//         for (let item in itemSearch) {
//             let itemToSearch = itemSearch[item]
//             let itemTest = new RegExp(itemToSearch, "gi")
//             if (itemTest.test(source[i][item])) {
//                 count++
//             }
//         }

//         if (count === Object.keys(itemSearch).length) {
//             resultFinal.push(source[i])
//         }

//         count = 0

//     }

//     return resultFinal
// }