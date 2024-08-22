const express = require ("express")
const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const apiRouter = require("./router/api")
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/project_mern_ecommerce").then(()=>{
    console.log("Successfully Connected Db")
})




app.use(express.static('public'))
app.use("/api",apiRouter)
let port = 5000
app.listen(port,()=>{
    console.log(`Running on Port :- ${port}`)
})