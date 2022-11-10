const Pool = require('pg').Pool

const pool = new Pool({
    user: 'ikhsan',
    host: 'localhost',
    database: 'rubicamp',
    password: '1234',
    port: 5432
})

module.exports = pool