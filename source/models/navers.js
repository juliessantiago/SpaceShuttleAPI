const mongoose = require ('mongoose'); 
const NaverSchema = ({
    name : {
        type: String, 
        require: true
    }, 
    birthdate : {
        type: Date, 
        require: false
    }, 
    admission_date: {
        type: Date, 
        require: true
    }, 
    job_role: {
        type: String, 
        require: true
    }
})

 const Naver = mongoose.model('Naver', NaverSchema); 

 module.exports = Naver; 