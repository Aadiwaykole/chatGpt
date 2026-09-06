
import User from "../model/userSchema.js";
import bcrypt from "bcryptjs";
// login
// logout
// signup
// profie

export const login = async (req,res)=>{
    
    try{

        const {name, age, email, password} =req.body; 

        if(!email || !password || !name || !age){
            return res.status(400).json({
                message: "some email are missed",
            })

            //check email already exist or not 
            const user = await User.findOne({ email });

            if(user){
                return res.status(409).json({
                    message:"Email ID already exists"
                })
            }

            const hashPassoword = await bcrypt.hash(password, 12); 

            //create user 
            const userCreated = await User.create({
                name, 
                age, 
                email,
                password: hashPassoword 
            });


            //token create karna padta hai 
            const createToken = (id, email) => {

                const token = jwt.sign({id, email}, process.env.JWT_SECRET, {   
                    expiresIn: "1h"
                });
                return token; 
            
        }
    } 
}


export const logout = async (req,res)=>{

}

export const signup = async (req,res)=>{

}

export const profile = async (req,res)=>{

}