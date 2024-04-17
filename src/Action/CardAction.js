import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../Constants/CartConstant.js";
  import axios from "axios";

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/pn/getProductDetail/${id}`);
    console.log(data)
  
    dispatch({
      type: ADD_TO_CART,
    //   payload se data pahuchate hai
      payload: {
        product: data.prodetails._id,
        name: data.prodetails.name,
        price: data.prodetails.price,
        image: data.prodetails.pimages[0].url,
        stock: data.prodetails.stock,
        quantity,
      },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
    
  }; 