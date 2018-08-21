const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const playerSchema = new Schema({
    name:{type:String, required:true}, 
    server:{type:String, required:true}, 
    createdAt:{type:Date, default:Date.now}
}); 


module.exports = mongoose.model('Player',playerSchema); 