const mongoose = require ('../database'); //módulo onde o mongoose já foi configurado
const NaverSchema = ({
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
    }
})

 const naver = mongoose.model('naver', NaverSchema); 

 module.exports = naver;  