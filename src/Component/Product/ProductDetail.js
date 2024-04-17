import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../Action/ProductAction';
import { useAlert } from 'react-alert';
import { addItemsToCart } from '../../Action/CardAction';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';

import '../../CSS/Shopdetail.css';


function ProductDetail() {
 
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const IncreaseQty = () =>{
    if(proDetails.stock <= quantity) return 

    const qty = quantity + 1
    // console.log(qty)
    setQuantity(qty)
}

const DecreaseQty = () =>{
    if(1 >= quantity) return
    const qty = quantity - 1
    setQuantity(qty)
}
  
  const alert = useAlert()
  const dispatch = useDispatch()

  const {  proDetails } = useSelector((state) => (state.proDetails))
  // console.log(proDetails);
  useEffect(() => {
    dispatch(getProductDetails(id))

  }, [dispatch, id])

 


  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  };

  return (
           <>
            
          <div className="container-fluid pb-5">
          
            <div className="row px-xl-5">
              <div className="col-lg-5 mb-30">
                <div id="product-carousel" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner bg-light">
                    <div className="carousel-item active">
                      <Carousel>
                        {
                          proDetails.pimages && proDetails.pimages.map(pimage =>(
                            <Carousel.Item key = {pimage.public_id}>
                            <img src={pimage.url} alt={proDetails.title} /> 
                            </Carousel.Item>
                          ))
                        }
                      </Carousel>

                    </div>

                  </div>
                  <Link className="carousel-control-prev" to="#product-carousel" data-slide="prev">
                    <i className="fa fa-2x fa-angle-left text-dark"></i>
                  </Link>
                  <Link className="carousel-control-next" to="#product-carousel" data-slide="next">
                    <i className="fa fa-2x fa-angle-right text-dark"></i>
                  </Link>
                </div>
              </div>

                  <div className="col-lg-7 h-auto mb-30">
                  <div className="h-100 bg-light p-30">
                  <h3>{proDetails.name}</h3>
                  
                  <h3 className="font-weight-semi-bold mb-4">{proDetails.price} Rs.</h3>
                  <p className="mb-4"><b>Description of Product</b></p>
                  <p className="mb-4">{proDetails.description}</p>
                  
                
                            <div className="counter">
      <button className="counter-btn" onClick={IncreaseQty}>+</button>
      <span className="counter-value">{quantity}</span>
      <button className="counter-btn" onClick={DecreaseQty}>-</button>
    </div>

<br></br><br></br><br></br>
<Link to='/checkout' className="btn btn-warning px-3" onClick={addToCartHandler}><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</Link>
                  </div>
              </div>
            </div>
          </div>
  
         
            </>
          
    
  )
}

export default ProductDetail
