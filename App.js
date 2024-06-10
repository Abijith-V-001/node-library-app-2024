const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const book=require("./Models/Book")

const app=express()
app.use(cors())

app.post("/add",(req,res)=>{
 res.send("test")
})

app.post("/search",(req,res)=>{
    res.send("test")
})
app.post("/delete",(req,res)=>{
    res.send("test")
})
app.get("/view",(req,res)=>{
    res.send("test")
})
app.listen(8080,()=>{
    console.log("server started")
})