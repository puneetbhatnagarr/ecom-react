import React, { useState ,Link} from 'react'
import axios from 'axios';

// import { toast } from 'react-toastify';
function Register() {

    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [password_confirmation,setpassword_confirmation]= useState('')
    // const [user_profile,setUser_profile]= useState('')
    
    const handleInput = async(e)=>{

        e.preventDefault()
        const userObj = new FormData();
        userObj.append('name',name)
        userObj.append('email',email)
        userObj.append('password',password)
        userObj.append('password_confirmation',password_confirmation)
        // userObj.append('user_profile',user_profile)

        try{
             const res = await axios.post('http://localhost:3001/api/pn/register',userObj)
           
             console.log(res);
             if(res.status ===200){
                setName('')
                setEmail('')
                setPassword('')
                setpassword_confirmation('')
                // setUser_profile('')
                // setMsg('user successfully registered')
                // toast.success(res.user)
             }
        }catch(err){
            if(err.res.data.status===400){
                // setMsg('user unsuccessfully registered')
            }
            console.log(err);

        }
    }
  return (
    <>
    
      <div className='container'>
                <div className='row'>
                {/* <h3>{msg}</h3> */}
                <form  onSubmit={handleInput}>
                    <div className='col-md-6 mb-3'>
                        <label> Name</label>
                        <input type="text" onChange={(e)=>setName(e.target.value)} className='form-control' value={name} name="name" placeholder='Enter your Name' />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label>Email</label>
                        <input type="text" onChange={(e)=>setEmail(e.target.value)}  className='form-control' value={email} name="email" placeholder='Enter your Email' />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label>Password</label>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)}  className='form-control' value={password} name="password" placeholder='Enter your Password' />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label>Confirm Password</label>
                        <input type="password" onChange={(e)=>setpassword_confirmation(e.target.value)}  className='form-control' value={password_confirmation} name="password_confirmation" placeholder='Enter your Password' />
                    </div>
                    {/* <div className='col-md-6 mb-3'>
                        <label>Image</label>
                        <input type="file" onChange={(e)=>setUser_profile(e.target.value)}  className='form-control' value={user_profile} name="user_profile"  />
                    </div> */}
                    <button type='submit'  className='btn btn-primary text-center'>SUBMIT</button>
                    </form>
                </div>
                <Link to='/user_login' className="btn right">
                Login
                </Link>
            </div>
    </>
  )
}

export default Register
