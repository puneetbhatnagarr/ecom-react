import React from 'react';
import { Link } from 'react-router-dom';
import MetaData from '../../Component/MetaData'
import { useSelector } from 'react-redux';
import Loading from '../../Component/Loading'

import '../../CSS/Profile.css'
function Profile() {

    const {user,loading} = useSelector((state) => state.auth)

  return (
    <>
    {
        loading ? (
            <Loading />
        ):(
            <>
            <MetaData title = 'Welcome to User Profile. Shop Online for Bracelets, Rings & Earings - Jwellery.in'  />
            <div className="card">
  <img src= {user.pimages && user.pimages[0].url} alt='pictures' />
  <div className="card-content">
    <h3>{user.name}</h3>
    <h5>{user.email}</h5>

    <p>{String(user.createdAt).substring(0,10)}</p>
    {
        user && user.role !== 'user' ? (
            <div className="d-grid mt-5">
            <Link to = '' className="btn btn-warning">MY Order</Link>
            </div>
        ):(
            <div className="d-grid mt-5">
            <Link to = '/user_profile/update_profile' className="btn btn-warning">Edit Your Profile</Link>
            </div>
        )
    }
 
  </div>
            </div>


            </>
        )
    }
  
           

    
    </>
  )
}

export default Profile
