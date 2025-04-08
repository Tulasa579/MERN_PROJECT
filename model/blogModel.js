const mongoose = require("mongoose")
const Schema = mongoose.Schema

const blogSChema = new Schema({
    faculty: {
        type : String,
    },
    course : {
        type : String,
    },
    mentor : {
        type : String,
    },
    image : {
        type : String
    }
})

const Blog = mongoose.model("Blog", blogSChema)
module.exports = Blog

