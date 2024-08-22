import { useEffect, useState } from "react";
import Cards from "./Cards";
import { Box } from "@mui/material";
import Query from "./Query";

function Product() {

    const [productData,setProductdata] = useState([])

    useEffect(()=>{
        fetch("/api/userproducts").then((res)=>{
            return res.json()
        }).then((result)=>{
            setProductdata(result.Data)
        })
    },[])

    return ( 
        <>
            <Box 
            sx={{
                display:"flex",
                flexWrap:'wrap',
                justifyContent:"center",
                gap:"17px",
                marginTop:"20px",
                marginBottom:"20px"
            }}
            >
            {
                productData.map((value,index)=>(
                    <Cards data={value} key={index}/>
                ))
            }
            </Box>
            <Query/>
        </>
     );
}

export default Product;