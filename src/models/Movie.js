import {Schema, model} from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    original_title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    date_of_realease: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    category: {
        type: String,
        require: true
    },
    picture_url: {
        type: String,
        require: true
    },
    trailer_url: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: false
    }
},{
    //Create_at and updated_at
    timestamps: true,
    versionKey: false
})

export default model ("Movie", movieSchema)