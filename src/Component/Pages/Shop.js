import React from 'react';
import {Link} from 'react-router-dom';
import "../../CSS/Shop.css";
const cat = require('../../images/cat-1.jpg')
const cat1 = require('../../images/cat-2.jpg')
const cat2 = require('../../images/cat-3.jpg')
const cat3 = require('../../images/cat-4.jpg')
const cat4 = require('../../images/cat-5.jpg')

const cat5 = require('../../images/cat-6.jpg')
const cat6 = require('../../images/cat-8.jpg')
const cat7 = require('../../images/cat-9.jpg')
const cat8 = require('../../images/cat-7.jpg')
function Shop() {
  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
      <div class="container-fluid bg-secondary mb-5" >
        <div class="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px",backgroundColor:"#DCDCDC"}}>
            <h1 class="font-weight-semi-bold text-capitalize mb-3">weekly shop</h1>
            <div class="d-inline-flex">
                <p class="m-0"><Link to="/">Home</Link></p>
                <p class="m-0 px-2">-</p>
                <p class="m-0">Shop</p>
            </div>
        </div>
    </div>
 <div className='col-lg-12'>
   <div class="container-fluid">
        <div className="row px-xl-5" >
        
            <div className="col-lg-4 col-md-6  pb-1" >
                <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px;"}}>
                   
                    <Link to="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={cat3} alt="" />
                    </Link>
                    <div class="btn btn-warning">Add To Wishlist <span class="fas fa-arrow-right"></span></div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px;"}}>
                   
                    <Link to="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={cat1} alt="" />
                    </Link>
                    <div class="btn btn-warning">Add To Wishlist <span class="fas fa-arrow-right"></span></div>
                </div>
            </div>
         
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px;"}}>
               
                    <Link to="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={cat2} alt="" />
                    </Link>
                    <div class="btn btn-warning">Add To Wishlist <span class="fas fa-arrow-right"></span></div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px;"}}>
                    
                    <Link to="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={cat6} alt=""  />
                    </Link>
                    <div class="btn btn-warning">Add To Wishlist <span class="fas fa-arrow-right"></span></div>
                </div>
            </div>
          
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px;"}}>
                    
                    <Link to="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={cat7} alt="" />
                    </Link>
                    <div class="btn btn-warning">Add To Wishlist <span class="fas fa-arrow-right"></span></div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px;"}}>
                    
                    <Link to="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={cat8} alt="" />
                    </Link>
                    <div class="btn btn-warning">Add To Wishlist <span class="fas fa-arrow-right"></span></div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px;"}}>
                   
                    <Link to="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={cat} alt="" />
                    </Link>
                    <div class="btn btn-warning">Add To Wishlist <span class="fas fa-arrow-right"></span></div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px;"}}>
                    
                    <Link to="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={cat5} alt="" />
                    </Link>
                    <div class="btn btn-warning">Add To Wishlist <span class="fas fa-arrow-right"></span></div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px;"}}>
               
                    <Link to="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={cat4} alt="" />
                    </Link>
                    <div class="btn btn-warning">Add To Wishlist <span class="fas fa-arrow-right"></span></div>
                </div>
            </div>
           
    </div>

 </div>
 </div>
    </div>
  )
}

export default Shop

