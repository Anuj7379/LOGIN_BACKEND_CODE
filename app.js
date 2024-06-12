require('dotenv').config();
const express = require('express')
const app = express();
const authRouter = require('./router/authRoute')
const datbaseconnect =require('./config/Databaseconnection')
const cors = require('cors');

const cookieParser = require('cookie-parser')

datbaseconnect();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: [process.env.CLIENT_URL], credentials: true }));

app.use('/api/auth',authRouter)

app.use('/',(req,res)=>{
    res.status(200).json({data:'hi this is   anuj sharma'});

});
module.exports =app;
