import React, { useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal, decreaseItemQuantity, DeleteCartItem, increaseItemQuantity } from "../features/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {

   const cart = useSelector((state)=>state.AllCart.cart)
   const Allcart = useSelector((state)=>state.AllCart)

   console.log(cart)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(cartTotal())
})

   

return (
<section className="h-100" style={{ backgroundColor: "#eee" }}>
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol md="10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
            Shopping Cart
          </MDBTypography>
          
        </div>

            {
                cart.map((value)=>(
                    <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  src={`/uploads/${value.productImage}`
                  }
                  alt="Cotton T-shirt" />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2">{value.productTitle}</p>
                <p>
                  {value.productDesc}
                </p>
              </MDBCol>
              <MDBCol md="3" lg="3" xl="2"
                className="d-flex align-items-center justify-content-around">
                <MDBBtn color="link" className="px-2" onClick={()=>{dispatch(decreaseItemQuantity(value))}}>
                  <MDBIcon fas icon="minus"   />
                </MDBBtn>

                <MDBInput  value={value.quantity} type="number" size="sm" />

                <MDBBtn color="link" className="px-2" onClick={()=>{dispatch(increaseItemQuantity(value))}}>
                  <MDBIcon fas icon="plus" />
                </MDBBtn>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                <MDBTypography tag="h5" className="mb-0">
                  Price:- {value.productPrice*value.quantity} 
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger" onClick={()=>{dispatch(DeleteCartItem(value))}}>
                  <MDBIcon fas icon="trash text-danger" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
                ))
            }
        
            <MDBCard className="mb-4">
          <MDBCardBody>
          {
            cart.length===0?"Your shopping cart is empty.":<h3>Total Amount :-  {Allcart.totalPrice}</h3>
          } 
          </MDBCardBody>
        </MDBCard>
       
     
            
      

        <MDBCard>
          <MDBCardBody>
          <Link to={"/product"}>
            <MDBBtn className="ms-3" color="warning" block size="lg">
              Continue Shopping...💁‍♂️
            </MDBBtn>
            </Link> 
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
);
}