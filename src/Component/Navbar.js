import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import {clearErrors} from '../Action/UserAction.js'
import { useAlert } from "react-alert";
import { logout } from "../Action/UserAction.js";

const logo = require("../images/multi-white.png");

function Navbar() {
  const alert = useAlert()
  const dispatch = useDispatch();
  const {user,loading} = useSelector(state => state.auth)
  const {cartItems} = useSelector(state =>state.cart)
  // console.log(user);
  //console.log('cart length',cartItems.length)

  const Logout = () => {
    dispatch(logout())
    alert.success('LOGOUT SUCCESSFULLY')
}

  return (
    
    <>
      <table bgcolor="#DCDCDC" className="side1">
        <tr>
        <th  className="text-body  side">
        <Link style={{color:"black",textDecoration: 'none'}} to=''>Help |</Link></th>
          <th  className="text-body  side">
        <Link style={{color:"black",textDecoration: 'none'}} to=''>FAQs |</Link></th>
        <th  className="text-body  side">
        <Link style={{color:"black",textDecoration: 'none'}} to='/about'>About </Link></th>

          <th>
            <nav className="right">
            
              <div>
              {
                user ?(
                 
                <Link to='' onClick={Logout} className="btn right">
                 Logout 
                </Link>
                ): <Link to='/user_login' className="btn right">
                Log In
                </Link>
                
              }
              {/* <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            {
                                user ? (
                                    <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <span>{ user.name}</span>
                                    <img src={user.pimages && user.pimages.url} className='rounded-circle' style={{height:"50px",width:"50px",borderRadius:"100%"}} alt ={ user.name} />
                                    {
                                        user && user.role !=='admin' ?(
                                            <Link className="dropdown-item" to='/orders/me'>Orders</Link>
                                        ):(
                                            <Link className="dropdown-item" to='/dashboard'>Dasboard</Link>
                                           
                                        )
                                    }
                                    <Link className="dropdown-item" to='/me'>Profile</Link>
                                    <Link className="dropdown-item" onClick={Logout}>Logout</Link>
                                </div>
                            </div>

                                ):!loading &&   <Link className="dropdown-item" to='/user_login'>Sign in</Link> 
                            }
                          
                        </div>
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <Link to="/" className="btn px-0 ml-2">
                                <i className="fas fa-heart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                            </Link>
                            <Link to="/" className="btn px-0 ml-2">
                                <i className="fas fa-shopping-cart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                            </Link>
                        </div>
                    </div> */}
{/*                  
                <ul class="dropdown-menu">
                  <li>
                    <Link className="nav-item nav-link" to="/register">
                      SignUp
                    </Link>
                  </li>
                  <Link className="nav-item nav-link" to="/user_login"> SignIn </Link>
                  <li>
                  
                  </li>
                </ul> */}
              </div>
            </nav>
          </th>
        </tr>
      </table>

      <table bgcolor="#fffdfd" className="tabheight" width="100%">
        <tr>
          <td align="center">
            <img className="brand-logo" src={logo} alt="logo"></img>
            &nbsp;ShopEase
          </td>
          <td className="search">
            <input
              type="text"
              className="search-box"
              placeholder=" What are you looking for"
            ></input>
            <span className="curp">
              <i className="fa fa-search "></i>
            </span>
          </td>
        </tr>
      </table>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <table className="tabheight">
            <nav className="right">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-bars mx-1"></i> Variety
                </button>

                <ul class="dropdown-menu">
                  <li>
                    <Link className="nav-item nav-link" to="#">
                      Men's Dresses
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link" to="#">
                      Women's Dresses
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link" to="#">
                      Baby's Dresses
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link" to="#">
                      Best Sells
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link" to="#">
                      Brands
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="" class="nav-item nav-link">
                      Shirts
                    </Link>
                  </li>
                  <li>
                    <Link to="" class="nav-item nav-link">
                      Jeans
                    </Link>
                  </li>
                  <li>
                    <Link to="" class="nav-item nav-link">
                      Swimwear
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="" class="nav-item nav-link">
                      Sleepwear
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="" class="nav-item nav-link">
                      Sportswear
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="" class="nav-item nav-link">
                      Jumpsuits
                    </Link>
                  </li>
                  <li>
                    <Link to="" class="nav-item nav-link">
                      Blazers
                    </Link>
                  </li>
                  <li>
                    <Link to="" class="nav-item nav-link">
                      Jackets
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="" class="nav-item nav-link">
                      Shoes
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </table>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 middle">
              <li class="nav-item">
                <Link
                  className="nav-link active middle text-warning"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link active middle text-light" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link active middle text-light" to="/shopdetail">
                  Shop Details
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link active middle text-light" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item dropdown middle">
                <Link
                  className="nav-link dropdown-toggle active text-light"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="nav-item nav-link text-primary" to="#">
                      Shopping Cart
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link text-primary" to="/checkout">
                      Checkout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <table>
              <tr>
                <td>
                  <Link to="/checkout" className="m-3">
                    <i className="fas fa-shopping-cart text-light"> Cart</i>
                    {/* <img src={cart}></img> */}
                  </Link>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </nav>
      <br></br>
    </>
  );
}

export default Navbar;
