const express = require('express');
const connect = require('./config/database');
const app = express();

app.listen(3000,async ()=>{
    console.log(`App started at port 3000`);
    await connect();
    console.log('Mongodb connected');
})