import React from 'react'
import '../CSS/Checkout.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart } from '../Action/CardAction';
import { Link } from 'react-router-dom';
function Checkout() {
	const { cartItems } = useSelector((state) => state.cart);
	console.log(cartItems.length)

	const dispatch = useDispatch()
	const [quantity, setQuantity] = useState(1);

	const increaseQty = (id,quantity,stock) => {
        //console.log(quantity,stock)

        const newQty = quantity + 1;
        if (stock <= quantity) {
        return;
        }
        
        dispatch(addItemsToCart(id,newQty))
    }
	const decreaseQty = (id,quantity) => {
        const newQty = quantity - 1;
        if (1 >= quantity) {
        return;
        }
        dispatch(addItemsToCart(id,newQty))

    }
	return (
		<>
			{
				cartItems.length === 0 ? (
					<div class="scroll-container">
  					<h5 class="scroll-text">Your Cart Is Empty</h5>
					</div>
				) : (
					<>
						
						{
							
							cartItems && cartItems.map((item) => (
								<div className='col-md-10'>
								<div className="bag-product">
									<div className="image">
										<img src={item.image} className="product-image" alt="img" />
									</div>
									<div className="col-lg-10 h-auto mb-30">
                                    <div className="h-100 bg-light p-30">
									<div className="description">
									<h1>{item.name}</h1>
										<h2 className="description">{item.description}</h2>
										
										<h4>Rs. {item.price}</h4>

										<h4>Order summary</h4>
							
										
										<div className="counter">
      <button className="counter-btn" onClick={()=> increaseQty(item.product,item.quantity,item.stock)}>+</button>
      <span className="counter-value">{item.quantity}</span>
      <button className="counter-btn" onClick={() => decreaseQty(item.product,item.quantity)}>-</button>
    </div>
	<h5 style={{font:"18px"}}>SUB TOTAL</h5> 
    <p><strong className="text-warning">{cartItems.reduce((acc,itm)=>(acc+Number(itm.quantity)),0)} (Units)</strong></p>         
	
	<h4>Total Amount : Rs. {cartItems.reduce((acc, item) => acc + item.quantity * item.price,0)} </h4>
	
									</div>
									</div>
								</div>
								</div>
								</div>
							))}
							
		<button to ='/shipping' className="btn-go-checkout">
		
			<span style={{color:'#000'}}> 	<i className="fas fa-lock"></i>Go to Checkout</span>
           
		</button>
	
					</>
					
				)
			}

		</>
	)
}

export default Checkout
