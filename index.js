const mongoose = require('mongoose');
const app = require('./app');


const mongoUrl = 'mongodb+srv://Shamim_96:12345@cluster0.n9cylyz.mongodb.net/User';

const connect = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("Database connection established !!");
    }catch(e) {
        console.log(e.message);
    }
}


app.listen(5050, (req,res) => {
    console.log("Server listening on !!");
    connect();
})