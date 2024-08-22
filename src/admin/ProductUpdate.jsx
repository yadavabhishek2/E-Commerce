import { Button, FormLabel, MenuItem, Select, TextField } from "@mui/material";
import Left from "./Left";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function ProductUpdate() {

    const navigate = useNavigate()
    const {id} = useParams()
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [price,setPrice] = useState("")
    const [Pstatus,setPstatus] = useState("")


    useEffect(()=>{
        fetch(`/api/adminupdatedata/${id}`).then((res)=>{
            return res.json()
        }).then((result)=>{
            setTitle(result.Data.productTitle)
            setDesc(result.Data.productDesc)
            setPrice(result.Data.productPrice)
            
        })
    },[])
    

    function handleForm(e){
        e.preventDefault()
        const formdata = {title,desc,price,Pstatus}
        fetch(`/api/adminupdatedproduct/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }).then((res)=>{
            return res.json()
        }).then((result)=>{
            if(result.Message){
                toast.success(result.Message)
                navigate("/products")
            }
        })
    }


    return ( 
        <>
             <div className="w-11/12  flex-col justify-center mx-auto mt-4">
                <Left/>
                <div className="w-full mt-4">
                    <h1 className="text-3xl font-bold mb-5  text-blue-700 text-center">Update Product</h1>
                    <form onSubmit={handleForm}>  
                        <FormLabel>Product Title</FormLabel>
                        <TextField id="outlined-basic"  variant="outlined" className="w-full" sx={{marginBottom:"20px"}}
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value)}}
                         />   
                         <FormLabel>Product Description</FormLabel>
                        <TextField id="outlined-basic"  variant="outlined" className="w-full" sx={{marginBottom:"20px"}} 
                        value={desc}
                        onChange={(e)=>{setDesc(e.target.value)}}
                         />
                         <FormLabel>Product Price</FormLabel>
                        <TextField id="outlined-basic"  variant="outlined" className="w-full" sx={{marginBottom:"20px"}} 
                        value={price}
                        onChange={(e)=>{setPrice(e.target.value)}}
                         />

                        <select className="w-full mb-3 border-2 border-red-500 p-2 rounded-lg"
                        value={Pstatus}
                        onChange={(e)=>{setPstatus(e.target.value)}}
                        >
                            <option>---Select---</option>
                            <option value={"In-Stock"}>In-Stock</option>
                            <option value={"Out-Of-Stock"}>Out-Of-Stock</option>
                        </select>    


                        <Button className="w-full" sx={{marginBottom:"20px"}} variant="contained" color="primary" type="submit">Update Product</Button>
                    </form>
                </div>
            </div>
        </>
     );
}

export default ProductUpdate;