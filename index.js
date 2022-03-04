const path = require('path')
const express = require('express')
const app = express()
//import Demo from './easysizetest/src/Demo'
const port = 3355
const fs = require('fs')
const cors = require('cors')

require('dotenv').config()

app.use(cors())

app.use(express.static(path.join(__dirname, 'easysizetest/build')));

app.use('/images', express.static('/images'))

app.get('/demo.js',(req,res)=>{
    let json = {
        imageurl: req.query.imageurl,
        attributes: req.query.attributes
    }

    fs.writeFile(path.join(__dirname,'easysizetest','src','data.json'), JSON.stringify(json) ,(err)=>{
        if(err) throw err;
        console.log('file saved')
    })

    res.sendFile(path.join(__dirname, 'easysizetest','build','index.html'))
})


//POST ROUTE
app.listen(port, () => {
    console.log(`Starting server at http://localhost:${port}`)
})
