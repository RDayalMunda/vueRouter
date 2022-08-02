const express = require('express');
const PORT = 80;
const path = require('path')

const app = express()

app.use(express.static( path.join(__dirname, '/components') ) )
app.use((req, res)=>{ res.sendFile( path.join(__dirname, '/components/index.html') ) })

app.listen( PORT, ()=>{
    console.log('server Running http://localhost')
} )