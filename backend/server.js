const express= require("express")
const app= express()
const cors= require("cors")
const mongoose= require("mongoose")
const dataRouter= require("./router/data.routes")

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://Fidan_Sharifova:fidan_2004@cluster0.zlx6suq.mongodb.net/").then(res=>{
    console.log("connected mongodb")
})
app.use("/pulse", dataRouter)
app.listen(8000, ()=>{
    console.log("app running on 8000")
})