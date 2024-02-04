const userModel = require('../models/user.model');
const mongoose = require('mongoose');

const register = async (req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

         const newUser = await new userModel({username, email, password});
         newUser.save();

        res.send({message: "Success",
        data: newUser});

    }catch(err) {

        res.send({message: err.message});

    }
}

const login = async (req, res) => {
    
    const email = req.body.email;
    const password = req.body.password;

    const validEmail = await userModel.findOne({email:email});
    const validPassword = await userModel.findOne({password:password});

    if(validEmail){
        if(validPassword){
            res.send("User login successful...");
        }else{
            res.send("Please enter valid password...");
        }
    }else{
        res.send("Enter valid email...");
    }
}


module.exports = {register, login};