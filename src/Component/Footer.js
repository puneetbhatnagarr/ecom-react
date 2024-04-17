import {Link} from 'react-router-dom';
import '../CSS/Footer.css';
import React from 'react'
const logo = require('../images/multi-white.png')
function Footer(){

    return(
        <> 
       
      <div className="footer">
        <div className="container-fluid why1">
            <div className="row m2">
            <div className="col-md-5 col-sm-5 a1">
                <Link to=''>
                    <img src={logo} alt='footer' className="img2"></img>
                </Link>
            </div>
<br></br>
<div className='col-md-7 col-sm-7'>
    <h2 className='m3'><span className='c'>GET IN </span> Touch</h2>
    <p>We're a team focusing on redefining the way the hospitality industry works by bringing in concept based restaurants across India. We are truly committed to catering to the ever-changing cosmopolitan taste of the customer and revolutioning the F &amp; B industry!</p>
<div className='row'>
    <div className='col-md-6 foot-add'>
        <span className='s'>
            <strong className='s1'>Address</strong>
            <br></br>
            6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021
        </span>
    </div>
    <br></br>
   <div className='col-md-6 foot-add'>
    <span className='s'>
    <strong class="s1">Franchise Enquiry</strong>
    <br></br>
    Mobile: &nbsp;
    <Link to="/" class="s2">
    <b class="s3">+91 9313663486</b>
    </Link>
    <br></br>
    Email: &nbsp;
    <Link to="/" class="s2">
    <b class="s3">Franchise@gmail.com</b>
    </Link>
    </span>
   </div> 
<br></br>

   <div className='row'>
    <div className='col-md-6 foot-add'>
        <span className='s'>
        <br></br>
            <strong className='s1'>HR Enquiry</strong>
            <br></br>
            Mobile: &nbsp;
     <Link to="/" class="s2">
    <b class="s3">+91 9313663458</b>
    </Link>
    <br></br>
    Email: &nbsp;
    <Link to="/" class="s2">
    <b class="s3">careers@Clothing.in</b>
    </Link>
        </span>
    </div>
    <br></br>
<div className='col-md-6 foot-add'>
<span class="s">
<br></br>
<strong class="s1">Other Enquiry</strong>

<br></br>
Email: &nbsp;
<Link to="/" class="s2">
<b class="s3">customercare@Clothing.in</b>
</Link>
</span>  

</div>

   </div>
</div>
</div>
            </div>
        </div>
      </div>
      <div class="container-fluid s6">
          <div class="row s7" >
            <div class="text-center">
              <p class="copyright-text s8" >
                PRIVACY POLICY | TERMS AND CONDITIONS |
                <Link to="" class="s9">BLOG</Link>
                <br></br>
                COPYRIGHT © 2021
                <Link to="" class="s10">Clothing Multi-Store</Link>
              </p>
            </div>
          </div>
        </div>
</> 
    )
};
export default Footer;