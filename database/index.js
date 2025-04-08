const mongoose = require("mongoose")

function connectDatabase (){
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.yii18p4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database connected successfully..")
}

module.exports = connectDatabase