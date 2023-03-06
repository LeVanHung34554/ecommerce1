const express=require('express');
const dbConnect = require('./config/dbConnect');
const app=express();
const dotenv=require('dotenv').config();
const authRouter=require('./routes/authRoute');
dbConnect();
const PORT =process.env.PORT|| 4000     ;


app.use('/api/user',authRouter);
app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);

})