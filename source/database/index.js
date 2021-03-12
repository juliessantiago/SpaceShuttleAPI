//arquivo de configuração banco de dados 
const mongoose = require('mongoose'); 

mongoose.Promise = global.Promise; 

mongoose.connect("mongodb://localhost:27017/space", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


module.exports = mongoose