import React, { useState } from 'react'
import MetaData from '../../MetaData'
import { updatePassword,clearErrors } from '../../../Action/ProfileAction'
import { loadUser } from '../../../Action/UserAction'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { UPDATE_PASSWORD_RESET } from '../../../Constants/ProfileConstant';
function UpdatePassword() {
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { user } = useSelector((state) => state.auth);
    const { isUpdated, error } = useSelector((state) => state.profile);

    useEffect(() => {

        if(error){
            alert.error(error)
            dispatch(clearErrors)
        }
        if(isUpdated){
            alert.success('PASSWORD UPDATED SUCCESSFULLY 😃🍻')
            dispatch(loadUser())
            navigate('/user_profile')
            dispatch({
                type : UPDATE_PASSWORD_RESET
            })
        }
    },[ dispatch, alert, navigate, user, isUpdated, error ])

    const submitHandler = (e) => {
        e.preventDefault();

        //console.log(oldPassword,newPassword,confirmPassword)

        const userObj = new FormData()
        userObj.append('oldPassword',oldPassword)
        userObj.append('newPassword',newPassword)
        userObj.append('confirmPassword',confirmPassword)

        //console.log(userObj)
        dispatch(updatePassword(userObj))
        
    }

  return (
    <>
      <MetaData title= 'update your password' />
     
      <div class="container-fluid">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class=" pr-3"> UPDATE PASSWORD</span></h2> 
      <div className='container'>
               
                <div class="row px-xl-5">
            <div class="col-lg-7 mb-5">
                <div class="contact-form bg-light p-30">
                    <div id="success"></div>
                    <form name="sentMessage" onSubmit={submitHandler} novalidate="novalidate">
                        <div class="control-group">
                       old_password
                            <input type='password' class='form-control' name = 'oldPassword' value={oldPassword} onChange = {(e) => setOldPassword(e.target.value)}
                                required="required" data-validation-required-message="Please enter your Password" />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                        New_password
                            <input type="password" class="form-control" name = 'newPassword' value={newPassword} onChange = {(e) => setNewPassword(e.target.value)}
                                required="required" data-validation-required-message="Please enter your Password" />
                            <p class="help-block text-danger"></p>
                        </div>
                      
                        <div class="control-group">
                        Confirm_password
                            <input type="password" class="form-control" name = 'confirmPassword' value={confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)}
                                required="required" data-validation-required-message="Please enter your Password" />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div>
                            <button class="btn btn-warning py-2 px-4" type="submit" >Update Password</button>
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

export default UpdatePassword
