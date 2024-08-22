const RegCollection = require("../models/reg")
const AdminProductCollections = require("../models/adminproduct")
const QueryCollection = require("../models/query")

exports.HomePageController = (req,res)=>{
    res.send("Home page '👤 ")
}

exports.RegDataController = async(req,res)=>{
    const {email,password,firstName,lastName} = req.body
    const record = new RegCollection({
        useremail:email,
        userpassword:password,
        userfisrt:firstName,
        userlast:lastName,
     })

     await record.save()

     res.send({Data:record,Message:"Successfully Registration 🥳"})


}

exports.LoginDataController = async(req,res)=>{
    const {email,password} = req.body
    const userCheck = await RegCollection.findOne({useremail:email})
    if(userCheck!==null){
        if(userCheck.userpassword ==password){
            res.json({Data:userCheck,Message:"Successfully Login.🥳"})
        }else{
            res.json({Message:"Email & Password did not match.😕"})
        }
        
    }else{
        res.json({Message:"Email & Password did not match.😕"})
    }
}


exports.UserProductsController = async(req,res)=>{
    const record = await AdminProductCollections.find({productStatus:"In-Stock"})
    res.json({Data:record})
}

exports.userQueryController = async(req,res)=>{

    const {userEmail,userQuery} = req.body

    const record = new QueryCollection({
        UserEmail:userEmail,
        UserQuery:userQuery,
    })

    await record.save()

    res.json({Data:record,Message:"Successfully Query Post..👍"})
}