const mongoose = require ('../database'); //módulo onde o mongoose já foi configurado
const NaverSchema = ({
    id: {
        type: String, 
        require: false
    }, 
    name : {
        type: String, 
        require: true
    }, 
    birthdate : {
        type: String, 
        require: false
    }, 
    admission_date: {
        type: String, 
        require: true
    }, 
    job_role: {
        type: String, 
        require: true
    }, 
    projects: [{ //Naver pode participar de mais de um projeto
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'project', 
        require: false
    }]
})

 const naver = mongoose.model('naver', NaverSchema); 

 module.exports = naver;  