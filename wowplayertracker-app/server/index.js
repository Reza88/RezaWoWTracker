const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');  
const config = require('./config/dev'); 

const FakeDb = require('./models/fake-db'); 

const playerRoutes = require('./routes/players'); 
 

mongoose.connect(config.DB_URI).then(()=>{
    const fakeDB = new FakeDb(); 
    fakeDB.seedDb(); 
}); 
const app = express(); 
app.use(cors());
app.use('/api/v1/players',playerRoutes); 


const PORT = process.env.PORT || 3001; 
app.listen(3001,function(){
    console.log('server is running'); 
}); 
