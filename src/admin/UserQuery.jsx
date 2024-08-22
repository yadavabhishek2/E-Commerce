import { Link, useNavigate } from "react-router-dom";
import Left from "./Left";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from "react-hot-toast";

function UserQuery() {

    const [querData,setQueryData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        fetch("/api/querydata").then((res)=>{
            return res.json()
        }).then((result)=>{
            console.log(result)
            setQueryData(result.Data)
        })
    },[])

    function handleDelete(id){
      fetch(`/api/querydelete/${id}`,{
        method:"DELETE"
      }).then((res)=>{
        return res.json()
      }).then((result)=>{
        toast.success(result.Message)
        navigate('/userquery')
      })
    }

  
    

  return (
    <>
      <div className="w-11/12  flex-col justify-center mx-auto mt-4">
        <Left />
        <div className="w-full mt-4">
          <h1 className="text-3xl font-bold mb-5  text-blue-700 text-center">
            User Query Management
          </h1>

          <div className="relative overflow-x-auto shadow-md  mt-10 ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#eafc3a4a] dark:text-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No
                  </th>

                  <th scope="col" className="px-6 py-3">
                    UserEmail
                  </th>

                  <th scope="col" className="px-6 py-3">
                    User Query
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Query Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Reply
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
              {
                querData.map((value,index)=>(
                    <tr key={index} className="bg-white border-b dark:bg-[#e3e7ee5c] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {index+1}
                  </th>

                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {value.UserEmail}
                  </th>

                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {value.UserQuery}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {value.MailStatus}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                   <Link to={`/queryreply/${value._id}`}><Button endIcon={<ReplyIcon/>} color="success" >Reply</Button></Link> 
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    <Button variant="text" color="error" endIcon={<DeleteIcon/>} onClick={()=>{handleDelete(value._id)}}>
                      Delete
                    </Button>
                  </th>
                </tr>
                ))
              }
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserQuery;
