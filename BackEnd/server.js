const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./routers/rusers');

const dotenv = require('dotenv').config;

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Hospital'

//? --- Express middleWare ---
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());  // request content type
app.use(cors()); // cors - corse orgine resources sharing
app.use('/Hospital',userRouter);

//? --- Connectiong mongoDb with backend ---
mongoose
.connect(MONGODB_URI)
.then(()=>{
    console.log(`App connect to database`);
    //? --- Creating express server ---
    app.listen(PORT,()=>{
        console.log(`server running successfully on port ${PORT}`)
    });
})
.catch((error)=>{
    console.log(`error occurred on ${error}`);
})