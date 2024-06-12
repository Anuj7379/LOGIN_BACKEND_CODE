require('dotenv').config();
const port = process.env.port || 5000;
const app =require('./app.js')

app.listen(port,()=>{
    console.log(` server is running at port : ${port}`);
    
    
})