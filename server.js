const express = require('express');
const connectDB = require('./config/db');
const app = express();

const { check, validationResult } = require('express-validator');

//mongoDb connected
connectDB();
app.use(express.json());
app.get('',(req,res) => {
    res.send('api running');
})

//Define routes

app.use('/api/user',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));

const PORT = process.env.PORT || 8080;
app.listen(PORT,function(){
    console.log(`Server Port started at ${PORT}`);
});