const JWT = require('jsonwebtoken');
require('dotenv').config();
const jwtAuth =(req , res , next)=>{
    const token = (req.cookies && req.cookie.token)||null
    if(!token){
        return res.status(400).json({
            success:false,
            message:"not authorized"
        })
    }
    try{
        const payLoad = JWT.verify(token , process.env.SECRET)
        req.user ={id:payLoad.id,email:payLoad.email}


    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })

    }
    next();
}
module.exports=jwtAuth;
