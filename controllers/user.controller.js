// Import Model
const UserModel = require("../models/user.model");


//get all users
const getAllUser = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.send(users);
    }catch (err) {
        res.send({message: err.message});
    }
}

//get a single user

const getOne = async (req, res) => {
    try {

        const oneUser = await UserModel.findOne({_id: req.params.id});

        // amra specific kore dite pari j ki ki properties amra user k dekhate pari jokhon search korbe
        //const oneUser = await UserModel.findOne({_id: req.params.id}).select({name:1}); // er mane hocche id diye search korle shudu name ta dekhabe karon select method er moddhe j object pass korchi sekhane name:1 tar mane name er value true.

        res.send(oneUser);

    }catch (err) {

        res.send({message: err.message});

    }
}


//Create a user
const addUser = async (req, res) => {

    try{
        const name = req.body.name;
        const email = req.body.email;
        const phoneNumber = req.body.phoneNumber;

        // const newUser = new UserModel({name: name, email: email, phoneNumber: phoneNumber});
        // await newUser.save();

         const sendData = await UserModel.insertMany({name: name, email: email, phoneNumber: phoneNumber});

        res.status(200).json(sendData);

    }catch(err){

        console.log("Data is not inserved");
        console.log(err.message);

    }

};


const updateUser = async (req, res) => {

    try {
        const id = req.params.id;

        await UserModel.updateOne({_id: id}, { $set: {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
        }})

        res.send("User updated successfully !");

    }catch(err){

        res.send({message: err.message});

    }

}

const deleteUser = async (req, res) => {

    try {
        const id = req.params.id;
    
        await UserModel.deleteOne({_id: id});

        res.send({message: "User deleted successfully !!"});
    }catch(err){
        res.send({message: err.message});
    }

}


module.exports = {getAllUser, addUser, getOne, updateUser, deleteUser};