import React from 'react'
import { Link } from 'react-router-dom'
import '../../CSS/Product.css'
function Product({product}) {
  // console.log(product)
  return (
    <>


  
  <article>
    <div class="article-wrapper">
      <figure>
        <img src={product.pimages[0].url} alt="mypic" />
      </figure>
      <div class="article-body">
        <h2 style={{color:"#fcb21b"}}>{product.name}</h2>
        <div className="d-flex mb-3">
                    <div className="text-primary mr-2">
                      <small style={{color:"#fcb21b"}} className="fas fa-star"></small>
                      <small style={{color:"#fcb21b"}} className="fas fa-star"></small>
                      <small style={{color:"#fcb21b"}} className="fas fa-star"></small>
                      <small style={{color:"#fcb21b"}} className="fas fa-star-half-alt"></small>
                      <small style={{color:"#fcb21b"}} className="far fa-star"></small>
                    </div>
                    <small className="pt-1">(99 Reviews)</small>
                  </div>
        <p>
        ₹{product.price}
        </p>
        <Link to={`/productD/${product._id}`} >
          Read more
            
        </Link>
      </div>
    </div>
  </article>
 
	 

    </>
  )
}

export default Product
