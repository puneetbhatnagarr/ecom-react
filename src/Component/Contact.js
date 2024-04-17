import React from 'react'
import {Link} from 'react-router-dom'
function Contact() {
  return (
    <div>
	<div class="container-fluid bg-secondary mb-5" >
        <div class="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px",backgroundColor:"#DCDCDC"}}>
            <h1 class="font-weight-semi-bold text-capitalize mb-3">Contact Us</h1>
            <div class="d-inline-flex">
                <p class="m-0"><Link to="/">Home</Link></p>
                <p class="m-0 px-2">-</p>
                <p class="m-0">contact-us</p>
            </div>
        </div>
    </div>
      <div className="container">
	  
            <br></br>
			<div className="row">
				<div className="col-md-6">
					<form>
					  <div className="form-group">
						  <input type="name" className="form-control" id="exampleInputName" placeholder="Your Full Name..." />
					  </div><br></br>
            <div className="form-group">
						  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email Address..." />
					  </div><br></br>
					  
            <div className="form-group">
              <textarea  rows="3" className="form-control" aria-label="With textarea" placeholder='Drop Your message Here'></textarea>
            </div><br></br>
					  <button type="submit" className="btn btn-warning btn-lg btn-block">Submit</button>
					</form>
			  </div>
			  <div  className="col-md-6">
          <h5>Address: <small className="text-muted">Sindhi Colony Gwalior</small></h5><br></br>
          <h5>Email: <small className="text-muted">mywebsite@gmail.com.com</small></h5><br></br>
          <h5>Contact: <small className="text-muted">+91 9926415203 || +91 7898815203</small></h5>
      
	  		</div>
        
			</div>
		</div>
    </div>
  )
}

export default Contact
