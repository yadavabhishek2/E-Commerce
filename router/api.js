const router = require("express").Router()
const UserC = require("../controller/usercontroller")
const AdminC = require("../controller/admincontroller")
const multer = require("multer")
const path = require("path")




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../Public/uploads"))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const upload = multer({ 
    storage: storage,
    limits:{fileSize:1024 * 1024 * 5}  // 5mb

   })


router.get('/',UserC.HomePageController)
router.post("/regdata",UserC.RegDataController)
router.post("/logindata",UserC.LoginDataController)
router.post("/adminproductsadd",upload.single("Pimg"),AdminC.AdminproductsController)
router.get("/alladminproduct",AdminC.AlladminproductController)
router.delete("/adminproductdelete/:id",AdminC.AdminProductDeleteController)
router.get("/adminupdatedata/:id",AdminC.AdminUpdateProductController)
router.put("/adminupdatedproduct/:id",AdminC.AdminupdatedDataController)
router.get("/userproducts",UserC.UserProductsController)
router.post("/userquery",UserC.userQueryController)
router.get("/querydata",AdminC.QueryDataController)
router.post("/adminqueryreply/:query",AdminC.QueryReplyController)
router.delete("/querydelete/:id",AdminC.deleteQueryController)
router.get("/userdata",AdminC.UserDataController)
router.put("/updateuserstatus/:id",AdminC.UpdateStatusController)




module.exports = router