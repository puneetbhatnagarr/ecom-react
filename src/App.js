import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Component/Pages/Home';
import Shop from './Component/Pages/Shop';
import Contact from "./Component/Contact";
import About from "./Component/Pages/About";

import Product from "./Component/Product/Product";
import ProductDetail from "./Component/Product/ProductDetail";

import Register_1 from "./Component/Users.js/Register_1";
import Login from "./Component/Users.js/Login";
import { useEffect } from "react";
import store from "./Store";
import { loadUser } from "./Action/UserAction";
import Checkout from "./Component/Checkout";
import Profile from "./Component/Profile/Profile";
import EditProfile from "./Component/ProfileUpdate/EditProfile";
import UpdatePassword from "./Component/Users.js/UpdatePassword/UpdatePassword";
import Shipping from "./Component/Shipping/Shipping";
import Dashboard from "./Component/Admin/Dashboard";
function App() {
  useEffect(()=>{
    store.dispatch(loadUser())
  },[])
  return (
    <>
     
     <Navbar />
        <Routes>
          <Route path='' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/user_login' element={<Login />}/>
             <Route path='/register' element={<Register_1 />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/productD/:id' element={<ProductDetail />}/>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/user_profile' element={<Profile />} />
          <Route path='/user_profile/update_profile' element={<EditProfile />} />
          <Route path='/update_password' element={<UpdatePassword />} />
          <Route path='/shipping' element={<Shipping />} />
          {/* Admin Routes */}
          <Route path='/admin/dashboard' element={<Dashboard />} />

        </Routes>
     <Footer />
      
    </>
  );
}

export default App;
