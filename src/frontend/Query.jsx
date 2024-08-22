import { useState } from "react";
import {toast} from "react-hot-toast"

function Query() {

  const [userEmail,setUserEmail] = useState("")
  const [userQuery,setUserQuery] = useState("")


  function handleSubmit(e){
    e.preventDefault()
    const formdata = {userEmail,userQuery}
    fetch("/api/userquery",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formdata)
    }).then((res)=>{
      return res.json()
    }).then((result)=>{
      console.log(result)
      if(result.Data){
        toast.success(result.Message)
      }
    })
  }

  return (
    <>
      <section className="bg-gray-700 dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Query Form
          </h2>
          <form action="#" className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Email"
                required
                value={userEmail}
                onChange={(e)=>{setUserEmail(e.target.value)}}
              />
            </div>
            <div></div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your Query
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a Query..."

                value={userQuery}
                onChange={(e)=>{setUserQuery(e.target.value)}}

              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-gray-300 dark:bg-green-600 dark:hover:bg-success-700 dark:focus:ring-green-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Query;
