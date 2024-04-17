import React from 'react'

function Shipping() {
  return (
    <>
       <div class="container-fluid">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class=" pr-3">Billing Address</span></h2>
        <div class="row px-xl-5">
            <div class="col-lg-7 mb-5">
                <div class="contact-form bg-light p-30">
                    <div id="success"></div>
                    <form  id="contactForm" novalidate="novalidate">
                        <div class="control-group">
                        Name
                            <input type="text" className='form-control' name="name" placeholder='Enter your Name'
                                required="required" data-validation-required-message="Please enter your name" />
                            <p class="help-block text-danger"></p>
                        </div>
                        Email
                        <div class="control-group">
                            <input type="email" className='form-control'  placeholder='Enter your Email' 
                                required="required" data-validation-required-message="Please enter your email" />
                            <p class="help-block text-danger"></p>
                        </div>
                        Address
                        <div class="control-group">
                            <input type="text"  className='form-control'  placeholder='Enter your Address' 
                                required="required" data-validation-required-message="Please enter your email" />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                        Mobile
                            <input type="text" className='form-control'  placeholder='Enter your Mobile'
                                required="required" data-validation-required-message="Please enter your name" />
                            <p class="help-block text-danger"></p>
                        </div>
                       
                       
                        <div>
                            <button class="btn btn-warning py-2 px-4" type="submit" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Shipping
