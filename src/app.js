const express = require('express')

const app = express()

app.get('', (req,res) => {
    res.send('<h1>Weather!</h1>')
})

app.get('/help', (req,res) => {
    res.send([{
        name: "Andrew",
        age: 27
    },{
        name: "Andrew!",
        age: 30
    }])
})

app.get('/about', (req,res) => {
    res.send('<h1>About page</h1>')
})

app.get('/weather', (req,res) => {
    res.send({forecast: 'Sunny', location: 'Sao Paulo'})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})