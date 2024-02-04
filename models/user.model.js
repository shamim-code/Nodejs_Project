const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        }
    }
);

const UserModel = mongoose.model("UserInfos", UserSchema);

module.exports = UserModel;