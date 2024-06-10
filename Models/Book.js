const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "id":String,
    "title":String,
    "author":String,
    "publiyear":String,
})

let bookmodel=mongoose.Model("Books",schema);
module.exports=(bookmodel)