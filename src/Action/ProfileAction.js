import {
    
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,

   UPDATE_PASSWORD_REQUEST,
   UPDATE_PASSWORD_SUCCESS,
   UPDATE_PASSWORD_FAIL,
    CLEAR_ERRORS,
} from '../Constants/ProfileConstant.js'
import axios from 'axios'
export const updateProfile = (userObj) => async (dispatch) => {

    try {

        dispatch({
            type : UPDATE_PROFILE_REQUEST
        });
    
        const config = {
            headers : {
                "content-type" : "multipart/form-data",
            },
        };
        let link = `/api/pn/userprofile`

        const {data} = await axios.post(link,userObj,config)
        console.log(data);
       
    
        dispatch({
            type : UPDATE_PROFILE_SUCCESS,
            payload : data.result
    
        })
        
      } catch (error) {
        
        dispatch({
            type : UPDATE_PROFILE_FAIL,
            payload : error.response.data.message
        });
    
      }
}

export const updatePassword = (userObj) => async (dispatch) => {

    try {
  
      dispatch({
          type : UPDATE_PASSWORD_REQUEST
      });
  
      const config = {
          headers : {
              "content-type" : "multipart/form-data",
          },
      };
  
      const { data } = await axios.post('/api/pn/updatePassword', userObj, config);
      //console.log(data)
  
      dispatch({
          type : UPDATE_PASSWORD_SUCCESS,
          payload : data.user
  
      })
      
    } catch (error) {
      
      dispatch({
          type : UPDATE_PASSWORD_FAIL,
          payload : error.response.data.message
      });
  
    }
  };
  

// clear
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};