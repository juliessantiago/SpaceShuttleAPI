const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/space', {useMongoClient : true})
mongoose.Promise = global.Promise; 


