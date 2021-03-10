const express = require('express'); 
const bodyParser = require('body-parser')

const App = express(); 


App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended : false}))

App.get('/', (req, res) => {
    res.send('Ok')
})
App.listen(2000, () => {
    console.log('Servidor on')
})