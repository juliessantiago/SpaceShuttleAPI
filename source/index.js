//Entry point 

const express = require('express'); 
const bodyParser = require('body-parser')

const App = express(); 


App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended : false}))

require('./controllers/naverController')(App)
require('./controllers/projectController')(App)

App.get('/', (req, res) => {
    res.send('Ok')
})
App.listen(2000, () => {
    console.log('Server on')
})