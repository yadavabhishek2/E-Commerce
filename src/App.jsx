import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./common/Login";
import Navbar from "./common/Navbar";
import Registration from "./common/Registration";
import Product from "./frontend/Product";
import Admin from "./admin/Admin";
import Products from "./admin/Products";
import ProductAdd from "./admin/ProductAdd";
import ProductUpdate from "./admin/ProductUpdate";
import Footer from "./common/Footer";
import UserQuery from "./admin/UserQuery";
import QueryReply from "./admin/QueryReply";
import User from "./admin/User";
import Cart from "./frontend/Cart";



function App() {
  return ( 
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/reg" element={<Registration/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/productadd" element={<ProductAdd/>}/>
          <Route path="/updateproduct/:id" element={<ProductUpdate/>}/>
          <Route path="/userquery" element={<UserQuery/>}/>
          <Route path="/queryreply/:id" element={<QueryReply/>}/>
          <Route path="/usermanage" element={<User/>}/>
          <Route path="/cart" element={<Cart/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
   );
}

export default App;