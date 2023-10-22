const { UserModel } = require('../models/userModel');


// Controller for Home page
const home = (req,res) => {
    res.status(200).send({msg:"This is Home page!"});
};


// controller for registration actions
const register = async (req,res)=> {
    const {name,email,password} = req.body;
    try {
        await UserModel.create({...req.body})  
        res.status(200).send({msg:"User Registered Successfully"})
        
    } catch (error) {
        res.status(501).send({msg:error.message})
    }

}
// controller for login actions
const login = async(req,res)=>{
    const {email,password} = req.body;

    try {
        const userData= await UserModel.findOne({email});
        if(userData){
            if(userData.password == password){
                res.status(200).send({msg:"User Login Successfully, Enjoy!"})
            }else{
                res.status(401).send({msg:"You have Entered Wrong Password"})
            }
        }else{
            res.status(404).send({msg:"No Account Find associated to this email"})
        }
        
    } catch (error) {
        res.status(501).send({msg:error.message})   
    }
}

module.exports={
    home,
    register,
    login
}