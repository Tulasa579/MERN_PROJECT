const express = require("express")
const connectDatabase = require("./database")
const Blog = require("./model/blogModel")
const app = express()

app.use(express.json()) // to parse JSON data from request body

connectDatabase()
app.get("/", (req, res) =>{
    res.send("Hello Node JS project")
})

app.get("/blog", (req, res) =>{
    res.status(200).json({
        msg : "Welcome to blog page..."
    })
})

app.post("/blog", async (req, res) =>{
    const {faculty, course, mentor, image} = req.body
   await  Blog.create({
        faculty : faculty,
        course : course,
        mentor : mentor,
        image : image
    })
    console.log(req.body)
    res.status(200).json({
         msg : "Blog API hit successfully..."
    })
   
})

app.listen(3000, () => {
    console.log("NodeJS project has been stared")
})