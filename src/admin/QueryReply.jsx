import { Button, TextField } from "@mui/material";
import Left from "./Left";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

function QueryReply() {

    const {id} = useParams()

    const navigate = useNavigate()

    
   const [mailSub,setMailsub] = useState("")
   const [mailBody,setMailbody] = useState("")

  function handleForm(e) {
    e.preventDefault();
    const formdata = {mailSub,mailBody}
    fetch(`/api/adminqueryreply/${id}`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formdata)
    }).then((res)=>{
      return res.json()
    }).then((result)=>{
      if(result.Message){
        toast.success(result.Message)
        navigate("/userquery")
      }
    })
  }

  return (
    <>
      <div className="w-11/12  flex-col justify-center mx-auto mt-4">
        <Left />
        <div className="w-full mt-4">
          <h1 className="text-3xl font-bold mb-5 text-blue-700 text-center">
            Query Reply..📧
          </h1>
          <form onSubmit={handleForm} encType="multipart/form-data">
            <TextField
              id="outlined-basic"
              label="Sub"
              variant="outlined"
              className="w-full"
              sx={{ marginBottom: "20px" }}
              value={mailSub}
              onChange={(e)=>{setMailsub(e.target.value)}}
            />

            <TextField
              id="filled-multiline-static"
              label="Mail-Body"
              multiline
              rows={4}
              variant="filled"
              className="w-full"
              sx={{ marginBottom: "20px" }}
              value={mailBody}
              onChange={(e)=>{setMailbody(e.target.value)}}
            />

            <Button
              className="w-full"
              sx={{ marginBottom: "20px" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Reply
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default QueryReply;
