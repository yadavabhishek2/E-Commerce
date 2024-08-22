const mongoose = require("mongoose")

const {Schema,model} = mongoose


const QuerySchema = new Schema({
    UserEmail:String,
    UserQuery:String,
    MailStatus:{type:String,default:"Unread"}
})

const QueryColllection = model("query",QuerySchema)

module.exports = QueryColllection