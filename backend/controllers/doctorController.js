
// const validator =require("validator")
// const bcrypt =require("bcryptjs")
// const userModel=require("../models/userModel.js")
// const doctorModel=require("../models/doctorModel.js")
// const jwt=require('jsonwebtoken')


// const registerDoctor=async(req,res)=>{
//     try{
    
//        const {username,email,password,specialization}=req.body;
//         console.log(username)
//         console.log(email)
//         console.log(password)
//         console.log(specialization)
//        if(!email || !password || !username || !specialization ){
//             return res.status(400).json({success:false,message:"Missing fields"})
//        }
 
//        if(!validator.isEmail(email)){
//         return res.status(400).json({success:false,message:"Enter a valid email"})
//        }
        
//        const isEmailExists=await userModel.findOne({email});
//        if(isEmailExists){
//         return res.status(400).json({success:false,message:"Email already registered"})
//        }

//        const passwordFormat= /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
//        if(!passwordFormat.test(password)){
//         return res.status(400).json({
//             success:false,
//             message:"Password must be at least 8 characters long, include one uppercase letter and one number",
//         })
//        }

//        const salt=await bcrypt.genSalt(10)
//        const hashedPassword=await bcrypt.hash(password,salt)

//        const newUser=new userModel({
//             username,
//             email,
//             password:hashedPassword,
//             role:"doctor",
//        })
    
//        const savedUser=await newUser.save();

//        const newDoctor=new doctorModel({
//         userId:savedUser._id,
//         specialization,
       
//        })

//        await newDoctor.save()


//        const token=jwt.sign({id:savedUser._id,role:savedUser.role},process.env.JWT_SECRET);
//        res.status(201).json({
//         success:true,
//         token,
//         role:savedUser.role,
//         message:"Doctor registered successfully.Awaiting approval."
//        })
//     } catch(error){
//         console.log(error);
//         res.status(500).json({success:false,message:error.message})
//     }
// }

// module.exports={registerDoctor}