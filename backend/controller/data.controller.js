const dataModel= require("../models/data.models")

const dataController= {
    getAll: async(req,res)=>{
        try {
            const datas= await dataModel.find()
            res.send(datas)
        } catch (error) {
            res.send("item not found")
        }
    },
    add: async(req,res)=>{
        try {
            const {name, desc, price}= req.body
            const newData= new dataModel({name,desc,price})
            await newData.save()
            res.send(newData)
        } catch (error) {
            res.send("item did not add")
        }
    },
    delete: async(req,res)=>{
        try {
            const {id}= req.params
            await dataModel.findByIdAndDelete(id)
            res.send("item deleted")
        } catch (error) {
            res.send("item did not delete")
        }
    }
}

module.exports= dataController