const express = require('express');
// const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
const send = require('./routes/send');
// const results = require('./routes/get/getEggResults');


const startServer = async(res,req) =>{

    const app = express();
    const corsOptions = {
        origin : "http://localhost:3000",
        optionsSuccessStatus : 200
    }
    
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("DB.Connected"))
    .catch(err => console.log('Sorry cant connect to Database'));



    app.get('/',(req,res) =>{
        res.send("Hello World");
    })

    app.use(cors());
    app.use('/sendover',send);
    // app.use('/systemreport', results);


    const PORT = 4000 || process.env.PORT    
    app.listen(PORT, ()=> console.log(`Server has started on Port : ${PORT}`));

}


startServer();
