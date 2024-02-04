const app = require('./app');
const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/UsersDB");
        console.log("Database connection established !!");

    }catch(err){
        console.log("Database Connection Failed !");
        console.log(err.message);

    }
}

app.listen(5050, async ()=> {

    await dbConnection();
    console.log("Server is listening on !!")
})