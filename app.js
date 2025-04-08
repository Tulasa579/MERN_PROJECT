const express = require("express")
const app = express()

app.get("/", (req, res) =>{
    res.send("Hello Node JS project")
})

app.get("/blog", (req, res) =>{
    res.status(200).json({
        msg : "Welcome to blog page..."
    })
})

app.post("/blog", (req, res) =>{
    res.status(200).json({
         msg : "Blog API hit successfully..."
    })
   
})

app.listen(3000, () => {
    console.log("NodeJS project has been stared")
})