import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { productDetailsReducer, productReducer } from './Reducers/ProductReducer';
import { userReducer } from './Reducers/UserReducer';
import { cartReducer } from './Reducers/CardReducer';

import { profileReducer } from './Reducers/ProfileReducer';
const reducer = combineReducers({
    p:productReducer,
    proDetails:productDetailsReducer,
    auth:userReducer,
    cart:cartReducer,
    profile : profileReducer,
})
let initializeState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
        // shippingInfo: localStorage.getItem("shippingInfo")
        //   ? JSON.parse(localStorage.getItem("shippingInfo"))
        //   : {},
      },
}

const store = createStore(reducer,initializeState,composeWithDevTools(applyMiddleware(thunk)))

export default store