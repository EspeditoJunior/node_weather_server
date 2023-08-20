const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicPath))


app.get('', (req,res) => {
    res.render('index',{
        title: 'Weather app',
        name: 'Espedito'
    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        title: 'About',
        name: 'Espedito'
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        message: 'Help message',
        title: 'Help',
        name: 'Espedito'
    })
})

app.get('/weather', (req,res) => {
    res.send({forecast: 'Sunny', location: 'Sao Paulo'})
})

app.get('/help/*', (req, res) => {
    res.send("Help article not found")
})


app.get('*', (req, res) => {
    res.send("404")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})