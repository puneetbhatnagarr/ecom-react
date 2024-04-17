import React, {useState} from 'react'
import MetaData from '../MetaData'
import { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { clearErrors,updateProfile } from '../../Action/ProfileAction'
import { loadUser } from '../../Action/UserAction'
import { useDispatch,useSelector } from 'react-redux'
import {UPDATE_PROFILE_RESET} from '../../Constants/ProfileConstant'

function EditProfile() {
    
    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate()

    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pimages, setImage] = useState();
    const [imagepreview, setImagepreview] = useState('');
    const { user } = useSelector((state) => state.auth)

    const {isUpdated,error} = useSelector((state) => state.profile)
    
    useEffect(() => {

        if(error){
            alert.error(error)
            dispatch(clearErrors)
        }

        if(user){
            setName(user.name)
            setEmail(user.email)
            setImagepreview(user.pimages && user.pimages[0].url)
        }

        if(isUpdated){
            alert.success('PROFILE UPDATED SUCCESSFULLY 😃🍻')
            dispatch(loadUser())
            navigate('/user_profile')
            dispatch({
                type : UPDATE_PROFILE_RESET
            })
        }


    },[dispatch, alert, navigate, user, isUpdated, error])

    const submitHandler = (e) => {

        e.preventDefault();
        console.log(name,email)
        console.log(pimages)
        
        const userObj = new FormData()

        userObj.append('name',name)
        userObj.append('email',email)
        userObj.append('pimage',pimages)

        

        dispatch(updateProfile(userObj))
    }

    return (
    <>
          <MetaData title = 'Update User Profile.' />
          <div class="container-fluid">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class=" pr-3">UPDATE Form</span></h2>
        <div class="row px-xl-5">
            <div class="col-lg-7 mb-5">
                <div class="contact-form bg-light p-30">
                    <div id="success"></div>
                    <form onSubmit={submitHandler} id="contactForm" novalidate="novalidate">
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
                        Image
                        <div class="control-group">
                        <img src= {imagepreview} alt="gam" className='img-fluid' style={{ width: '100px',height: '150px'}}  />
                        <br></br>
                            <input type="file" onChange={(e) => setImage(e.target.files[0])} className='form-control' name="pimages" 
                                required="required" data-validation-required-message="Please enter your image" />
                            <p class="help-block text-danger"></p>
                        </div>
                       
                       
                       
                        <div>
                            <button class="btn btn-warning py-2 px-4" type="submit" >UPDATE</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default EditProfile
