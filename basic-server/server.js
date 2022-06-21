const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {

    console.log(`El path absoluto a este archivo es: ${__dirname}`)

    res.sendFile(`${__dirname}/views/index-page.html`)
})

app.get('/galeria', (req, res) => {

    res.sendFile(`${__dirname}/views/gallery-page.html`)
})


app.listen(5005, console.log('SERVIDOR LEVANTADO EN PUERTO 5005'))