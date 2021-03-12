const express = require ('express')

const modelNaver = require('../models/navers')

const route = express.Router(); 

route.post('/createNaver', async(req, res) => {
    try{
        const naver = await modelNaver.create(req.body)
        return (res.send({naver})) 
    }catch(error){ 
        res.send('Oops! '+error); 
    }
} )

route.get('/index', async(req, res) => {
    try{
        const naver = await modelNaver.find(req.body)
        return (res.send({naver}))
    }catch(error){
        res.send('Oops! '+error)
    }
})

module.exports = (App) => App.use(route) 