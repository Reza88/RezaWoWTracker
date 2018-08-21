const express = require('express'); 
const router = express.Router(); 
const Players = require('../models/player'); 



router.get('', function(req,res){
    Players.find({},function(err,players){
        if(err){
            throw err; 
        }
        res.json(players); 
    }); 
}); 

module.exports = router; 