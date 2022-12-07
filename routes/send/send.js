const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const { appendFile } = require('fs');
const jsonParse = bodyParser.json();
const app = express();

app.use(bodyParser.urlencoded({extended : true}));


router.post('/', jsonParse, async(res,req) =>{
    

})



module.exports =  router;