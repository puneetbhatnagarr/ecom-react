import React, { useEffect, useState } from 'react'
import {loginUser,clearErrors} from '../../Action/UserAction.js'
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../MetaData.js';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert'; 


function Login() {
  
    const dispatch =useDispatch()
    const alert = useAlert();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
  

    const { isAuthenticated, error, user} = useSelector((state)=>state.auth);
    useEffect(() => {
      if (error) {
        alert.error(error)
        dispatch(clearErrors())
  
      }  
      if (isAuthenticated) {
        alert.success('Login SuccessFully')
        if(user.role === 'admin'){
          navigate('/admin/dashboard')
        }
        else if(isAuthenticated){
          navigate('/')
        }
      }
      else{
        
          navigate('/user_login')
       
      }
    }, [dispatch,alert,error,isAuthenticated, navigate,user]) 
    const handleInput = async(e)=>{
    e.preventDefault();
    dispatch(loginUser(email,password))     
    };
   
    
    
  return (
    <>
   
        <MetaData title = 'User Login | shop online for Products you want'  />
        <div class="container-fluid">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class=" pr-3">Log In</span></h2> 
      <div className='container'>
               
                <div class="row px-xl-5">
            <div class="col-lg-7 mb-5">
                <div class="contact-form bg-light p-30">
                    <div id="success"></div>
                    <form name="sentMessage" onSubmit={handleInput} novalidate="novalidate">
                        <div class="control-group">
                        Email
                            <input type="text" onChange={(e)=>setEmail(e.target.value)} className='form-control' value={email} name="email" placeholder="Please enter your Email"
                                required="required" data-validation-required-message="Please enter your Email" />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                        Password
                            <input type="password" onChange={(e)=>setPassword(e.target.value)} className='form-control' value={password} name="password" placeholder="Please enter your Password"
                                required="required" data-validation-required-message="Please enter your Password" />
                            <p class="help-block text-danger"></p>
                        </div>
                      
                       
                        <div>
                            <button class="btn btn-warning py-2 px-4" type="submit" >Log In</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
            </div>
</div>
    </>
  )
}

export default Login
