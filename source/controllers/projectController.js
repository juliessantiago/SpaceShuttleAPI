const express = require ('express')
const modelProject = require('../models/project')
const modelNaver = require('../models/naver')
const route = express.Router(); 

/*===========Rota de criação de novo Naver================*/ 
route.post('/store', async(req, res) => {
    try{
        const project = await modelProject.create(req.body)
        return (res.send({project})) 
    }catch(error){ 
        res.send('Oops! '+error); 
    }
} )
/*========Rota de listagem de todos os Navers==============*/ 
route.get('/index', async(req, res) => {
    try{
        const project = await modelProject.find(req.body).populate('naver')
        res.send({project})
    }catch(error){
        res.send('Oops! '+error)
    }
})
/*=========Rota de exibição de único Project, passando ID=============*/ 
route.get('/show:id', async(req, res) => {
   
    try{
        const id = req.params
         //console.log(req.params)

        const project = await modelProject.findById(id).populate('naver')
        res.send({project})
        
        
    }catch(error){
        res.send('Oops!Cannot find this user... '+error)
    }
})


module.exports = (App) => App.use('/projects', route) 