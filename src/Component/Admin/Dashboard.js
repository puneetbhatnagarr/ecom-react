import React from 'react'

import { useEffect, useState,Link } from 'react';
import { clearErrors, getUsers } from '../../Action/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert'
function Dashboard() {
    {
        const navigate = useNavigate()
      
        const alert = useAlert();
      
        const dispatch = useDispatch()
      
        const { isAuthenticated, error } = useSelector(state => state.auth)
      
        useEffect(() => {
          if (error) {
            alert.error(error)
            dispatch(clearErrors())
      
          }
      
          if (isAuthenticated) {
            alert.success('Product Insert SUCCESSFULLY 😃🍻')
            
          }
        }, [error, alert, dispatch, isAuthenticated, navigate])
      
        // state ke ander state mai data store hoga useSelector ki help se
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [password_confirmation, setpassword_confirmation] = useState('')
        const [images, setImages] = useState('')
      
        const handleInput = async (e) => {
      
          e.preventDefault()
          const userObj = new FormData();
          userObj.append('name', name)
          userObj.append('email', email)
          userObj.append('password', password)
          userObj.append('password_confirmation', password_confirmation)
          userObj.append('pimages',images)
          dispatch(getUsers(userObj));
      
          setName('')
          setEmail('')
          setPassword('')
          setpassword_confirmation('')
          setImages('')
      
        }
        return (
          <>
           <div class="container-fluid">
              <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class=" pr-3">Registration Form</span></h2>
              <div class="row px-xl-5">
                  <div class="col-lg-7 mb-5">
                      <div class="contact-form bg-light p-30">
                          <div id="success"></div>
                          <form onSubmit={handleInput} id="contactForm" novalidate="novalidate">
                              <div class="control-group">
                              Name
                                  <input type="text" onChange={(e) => setName(e.target.value)} className='form-control' value={name} name="name" placeholder='Enter your Name'
                                      required="required" data-validation-required-message="Please enter your name" />
                                  <p class="help-block text-danger"></p>
                              </div>
                              Email
                              <div class="control-group">
                                  <input type="email" onChange={(e) => setEmail(e.target.value)} className='form-control' value={email} name="email" placeholder='Enter your Email' 
                                      required="required" data-validation-required-message="Please enter your email" />
                                  <p class="help-block text-danger"></p>
                              </div>
                              Password
                              <div class="control-group">
                                  <input type="password" onChange={(e) => setPassword(e.target.value)} className='form-control' value={password} name="password" placeholder='Enter your Password' 
                                      required="required" data-validation-required-message="Please enter your email" />
                                  <p class="help-block text-danger"></p>
                              </div>
                              Confirm Password
                              <div class="control-group">
      
                              note* - Your password and Confirm Password must be same !!
                                  <input type="password"  onChange={(e) => setpassword_confirmation(e.target.value)} className='form-control' value={password_confirmation} name="password_confirmation" placeholder='Re-enter your Password'
                                      required="required" data-validation-required-message="Please enter your email" />
                                  <p class="help-block text-danger"></p>
                              </div>
                              Image
                              <div class="control-group">
                                  <input type="file" onChange={(e)=>setImages(e.target.files[0])} className='form-control'  name="pimages" 
                                      required="required" data-validation-required-message="Please enter your image"  />
                                  <p class="help-block text-danger"></p>
                              </div>
                             
                              <div>
                                  <button class="btn btn-warning py-2 px-4" type="submit" >Register</button>
                              </div>
                          </form>
                      </div>
                  </div>
                  
              </div>
          </div>
          </>
        )
      }
  
}

export default Dashboard
