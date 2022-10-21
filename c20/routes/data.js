const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database(
    './data/data.db', sqlite.OPEN_READWRITE, (err) => {
        if (err) throw err
        console.log(`Database connected`);
    })

module.exports = db