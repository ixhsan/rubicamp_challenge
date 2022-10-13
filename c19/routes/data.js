const fs = require('fs')

const readJson = fs.readFileSync('./data/data.json')
let data = JSON.parse(readJson)

module.exports = data