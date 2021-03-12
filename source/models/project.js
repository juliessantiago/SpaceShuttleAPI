const mongoose = require('../database')
//adicionar ID 
const projectSchema = ({
    name: {
        type: String, 
        require: true
    }, 
    description: {
        type: String, 
        require: false
    }, 
    navers: [{ //Naver pode participar de mais de um projeto
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'naver', 
        require: false
    }]
})
const project = mongoose.model('project', projectSchema); 
module.exports = project; 