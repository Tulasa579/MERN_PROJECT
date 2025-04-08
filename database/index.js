const mongoose = require("mongoose")

function connectDatabase (){
    mongoose.connect("")
    console.log("Database connected successfully..")
}

module.exports = connectDatabase