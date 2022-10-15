const express = require('express')
const router = express.Router()
const fs = require('fs')
let dataSource = require('./data')

router
    .route('/:id')
    .get((req, res) => {
        const { id } = req.params

        const newData = []
        for (let i = 0; i < dataSource.length; i++) {
            if (Number(id) !== dataSource[i].ID) {
                console.log({dataBaru: newData});
                newData.push(dataSource[i])
            }
        }
        // console.log({
        //     data: dataSource, 
        //     dataBaru: newData,
        //     checkModule: module.children
        // });
        // dataSource = newData
        fs.writeFileSync('./data/data.json', JSON.stringify(newData, null, 4))
        res.redirect('/?page=1')
    })

module.exports = router