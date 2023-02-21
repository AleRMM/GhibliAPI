import {Schema, model} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Provide a valid email address"
        ]
    },
    password: {
        type: String,
        required: true
    }
})

export default model ("User", userSchema)