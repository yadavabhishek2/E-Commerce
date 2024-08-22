const mongoose = require ("mongoose")

const {Schema,model} = mongoose


const regSchema = new Schema({
    useremail:String,
    userpassword:String,
    userfisrt:String,
    userlast:String,
    status:{type:String,default:"Active"},
    createDate:{type:Date,default: new Date()}
})

const regCollection = model("regdata",regSchema)

module.exports = regCollection