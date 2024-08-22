import { Button, styled, TextField } from "@mui/material";
import Left from "./Left";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


function ProductAdd() {
  const [Ptitle, setPtitle] = useState("");
  const [PDesc, setPdesc] = useState("");
  const [Pprice, setPprice] = useState("");
  const [Pimg,setPimg] = useState("")

  const navigate = useNavigate();

  function handleForm(e) {
    const formdata = new FormData()
    e.preventDefault();
    // const formData = { Ptitle, PDesc, Pprice , Pimg };

    formdata.append("Ptitle",Ptitle)
    formdata.append("PDesc",PDesc)
    formdata.append("Pprice",Pprice)
    if(Pimg){
        formdata.append("Pimg",Pimg)
    }   

    fetch("/api/adminproductsadd", {
      method: "POST",
      body: formdata,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result) {
            console.log(result)
          navigate("/products");
          toast.success(result.Message);
        }
      });
  }

  return (
    <>
      <div className="w-11/12  flex flex-col justify-center mx-auto mt-4">
        <Left />
        <div className="w-full mt-4">
          <h1 className="text-3xl font-bold mb-5  text-blue-700 text-center">Product Add Here</h1>
          <form onSubmit={handleForm} encType="multipart/form-data">
            <TextField
              id="outlined-basic"
              label="Product Title"
              variant="outlined"
              className="w-full"
              sx={{ marginBottom: "20px" }}
              value={Ptitle}
              onChange={(e) => {
                setPtitle(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Product Description"
              variant="outlined"
              className="w-full"
              sx={{ marginBottom: "20px" }}
              value={PDesc}
              onChange={(e) => {
                setPdesc(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Product Price"
              variant="outlined"
              className="w-full"
              sx={{ marginBottom: "20px" }}
              value={Pprice}
              onChange={(e) => {
                setPprice(e.target.value);
              }}
            />

            <Button
                sx={{
                    marginBottom:"12px"
                }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              color="warning"
              startIcon={<CloudUploadIcon />}
              onChange={(e)=>{setPimg(e.target.files[0])}}
            >
              Upload Product Image
              <VisuallyHiddenInput type="file" required />
            </Button>

            <Button
              className="w-full"
              sx={{ marginBottom: "20px" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Add Product
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductAdd;
