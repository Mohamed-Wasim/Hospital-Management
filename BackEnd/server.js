const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config;

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Hospital'

//? --- Express middleWare ---
app.use(bodyParser.json());  // request content type
app.use(cors()); // cors - corse orgine resources sharing

//? --- Creating express server ---
app.listen(PORT,(error)=>{
    if(error)
    console.log(`Error occurred in express server ${error}`);
    else
    console.log(`server running successfully on port ${PORT}`)
});


//? --- Connectiong mongoDb with backend ---
mongoose
.connect(MONGODB_URI)
.then(()=>{
    console.log(`App connect to database`);
})
.catch((error)=>{
    console.log(`error occurred on ${error}`);
})