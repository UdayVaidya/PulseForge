import dotenv from 'dotenv';
dotenv.config();

import app from "./src/app.js";

app.get('/api/v1/health',(req,res)=>{
    res.status(200).json({message:'OK'})
});

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});

