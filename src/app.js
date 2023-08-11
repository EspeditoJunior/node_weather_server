const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const app = express()

app.set('view engine','hbs')
app.use(express.static(path.join(__dirname,'../public')))


app.get('', (req,res) => {
    res.render('index',{
        title: 'Weather app',
        name: 'Espedito'
    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        about: 'About!',
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        message: 'Help message',
    })
})

app.get('/weather', (req,res) => {
    res.send({forecast: 'Sunny', location: 'Sao Paulo'})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})