const express = require ('express')

const modelNaver = require('../models/naver')
const modelProject = require('../models/project')
const route = express.Router(); 

/*===========Rota de criação de novo Naver================*/ 
route.post('/store', async(req, res) => {
    try{
        const naver = await modelNaver.create(req.body)
        return (res.send({naver})) 
    }catch(error){ 
        res.send('Oops! '+error); 
    }
} )
/*========Rota de listagem de todos os Navers==============*/ 
route.get('/index', async(req, res) => {
    try{
        const navers = await modelNaver.find(req.body)
        res.send({navers})
    }catch(error){
        res.send('Oops! '+error)
    }
})
/*=========Rota de exibição de único Naver, passando ID=============*/ 
route.get('/show:id', async(req, res) => {
    console.log(req.params)
    try{
        const naver = await modelNaver.findById(req.params).populate('project')
        res.send({naver})
    }catch(error){
        res.send('Oops!Cannot find this Naver... '+error)
    }
})

module.exports = (App) => App.use('/navers',route) 