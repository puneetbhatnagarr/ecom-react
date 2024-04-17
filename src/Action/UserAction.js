import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    
//     UPDATE_PROFILE_REQUEST,
//     UPDATE_PROFILE_SUCCESS,
//     UPDATE_PROFILE_FAIL,

//    UPDATE_PASSWORD_REQUEST,
//    UPDATE_PASSWORD_SUCCESS,
//    UPDATE_PASSWORD_FAIL,
    CLEAR_ERRORS,
    
} from '../Constants/UserConstant.js'

import axios from 'axios'

export const getUsers = (userObj) => async(dispatch)=>{
    try{
        dispatch({
            type:REGISTER_USER_REQUEST
            
        })
        let link = `/api/pn/register`

        const {data} = await axios.post(link,userObj)
        // console.log(data);
        dispatch({
            type:REGISTER_USER_SUCCESS,payload:data.data
        })
    }catch(error){
        dispatch({type:REGISTER_USER_FAIL,payload:error.response.data.message})
    }

}

export const loginUser = (email,password) => async(dispatch)=>{
    try{
        dispatch({
            type:LOGIN_REQUEST});
            
        
        const config = {
            headers: {
              "content-type": "application/json",
            },
          };
        let link = `/api/pn/userLogin`

        const {data} = await axios.post(link,{email,password},config)
        console.log(data);
        dispatch({
            type:LOGIN_SUCCESS,payload:data.user
        });
    }catch(error){
        dispatch({type:LOGIN_FAIL,payload:error.response.data.message})
    }

}

export const logout = () => async (dispatch) => {
    try {
      await axios.get(`/api/pn/logout`);
  
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
  };

export const loadUser = () => async(dispatch)=>{
    try{
        dispatch({
            type:LOAD_USER_REQUEST});
            
        
        
        let link = `/api/pn/me`

        const {data} = await axios.get(link)
        // console.log(data);
        dispatch({
            type:LOAD_USER_SUCCESS,payload:data.user
        });
    }catch(error){
        dispatch({type:LOAD_USER_FAIL,payload:error.response.data.message});
    }

};
// export const updateProfile = (userObj) => async (dispatch) => {

//     try {

//         dispatch({
//             type : UPDATE_PROFILE_REQUEST
//         });
    
//         const config = {
//             headers : {
//                 "content-type" : "multipart/form-data",
//             },
//         };
    
//         const { data } = await axios.post('/api/pn/userprofile', userObj, config);
//         console.log(data)
    
//         dispatch({
//             type : UPDATE_PROFILE_SUCCESS,
//             payload : data.data
    
//         })
        
//       } catch (error) {
        
//         dispatch({
//             type : UPDATE_PROFILE_FAIL,
//             payload : error.response.data.message
//         });
    
//       }
// }

// export const updatePassword = (userObj) => async (dispatch) => {

//     try {
  
//       dispatch({
//           type : UPDATE_PASSWORD_REQUEST
//       });
  
//       const config = {
//           headers : {
//               "content-type" : "multipart/form-data",
//           },
//       };
  
//       const { data } = await axios.post('/api/pn/updatePassword', userObj, config);
//       //console.log(data)
  
//       dispatch({
//           type : UPDATE_PASSWORD_SUCCESS,
//           payload : data.user
  
//       })
      
//     } catch (error) {
      
//       dispatch({
//           type : UPDATE_PASSWORD_FAIL,
//           payload : error.response.data.message
//       });
  
//     }
//   };
  

// clear
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};