import { Button } from "@mui/material";
import Left from "./Left";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Products() {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  console.log(navigate)

  useEffect(() => {
    fetch("/api/alladminproduct")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setProductData(result.Data);
      });
  }, []);

  function handledelete(id) {
    fetch(`/api/adminproductdelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.Message) {
          toast.success(result.Message);
          navigate("/products");
        }
      });
  }



  return (
    <>
      <div className="w-11/12 flex flex-col  justify-center mx-auto mt-4 ">
        <Left />
        <div className="w-full mt-4">
          <h1 className="text-3xl font-bold mb-5  text-blue-700 text-center">Product Management</h1>
          <Link to={"/productadd"}>
            <Button variant="outlined" color="secondary" className="w-full">
              Add Product Here
            </Button>
          </Link>

          <div className="relative overflow-x-auto shadow-md  mt-10 ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#eafc3a4a] dark:text-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Product Image
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Product Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Update
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {productData.map((value, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-[#e3e7ee5c] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                    >
                      {value.productTitle}
                    </th>

                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                    >
                      <img src={`/uploads/${value.productImage}`} alt="Img" style={{width:"70px"}}/>
                    </th>

                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                    >
                      {value.productDesc}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                    >
                      {value.productPrice}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                    >
                      {value.productStatus}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                    >
                      <Link to={`/updateproduct/${value._id}`}>
                        <Button
                          variant="text"
                          color="success"
                          endIcon={<ArrowCircleUpIcon />}
                        >
                          Update
                        </Button>
                      </Link>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                    >
                      <Button
                        variant="text"
                        color="error"
                        onClick={() => {
                          handledelete(value._id);
                        }}
                        endIcon={<DeleteForeverIcon />}
                      >
                        Delete
                      </Button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
