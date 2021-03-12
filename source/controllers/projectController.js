const express = require('express'); 
const modelProject = require('../models/project'); 
const route = express.Router(); 

route.post('/createProject', async(req, res) => {
    try{
        const project = modelProject.create(req.body); 
        return (res.send({project}))
    }catch(error){
        res.send('Oops! '+error)
    }
}) 

module.exports = (App) => App.use(route); 