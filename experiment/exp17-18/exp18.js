let string = 'test'
let integer = ''
let float = 1.2
let date = '2002-12-06'
let boolean = 'True'

const filter = [
    { String: string },
    { Integer: integer },
    { Float: float },
    { Date: date },
    { Boolean: boolean }
]

const payLoad = {}
payLoad.lookFor = filter.map((item, index) => {
    let newValue = item[Object.keys(item).toString()]
    if (newValue) {
        let key = Object.keys(item)
        return `${key}="${newValue}"`
    }
}).filter(item => item)

payLoad.lookForQuery = payLoad.lookFor.toString(',')
payLoad.sql = 'SELECT * FROM data_type WHERE ' + payLoad.lookForQuery

console.log(payLoad.lookFor);
console.log(payLoad.sql);