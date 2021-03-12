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
    }
})
const project = mongoose.model('project', projectSchema); 
module.exports = project; 