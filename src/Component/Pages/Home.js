import React, { useEffect } from 'react'
import '../../CSS/Home.css';
import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../../Action/ProductAction';
import MetaData from '../MetaData';
import Product from '../Product/Product';
import Loading from '../Loading';
const accessories = require("../../images/accessories-collection.png")


function Home({title}) {
  const dispatch = useDispatch()
  const {loading, products } = useSelector((state)=>state.p) // state ke ander state mai data store hoga useSelector ki help se
  console.log(products,loading);

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <>
  {
    loading ? (
      <Loading />
    ):(
      <>
        <MetaData title = 'Buy Best Product | EaseShop' />
        <div class="container-fluid">
        <div className="row px-xl-5">
          <div className='col-lg-8'>
            <div id="carousel" class="carousel slide" data-bs-ride="false">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active " style={{

                  backgroundImage: `url(" https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?k=20&m=1293366109&s=612x612&w=0&h=sZxIOdBctJdLx71165XgRdUAQo1SPkGsRPzDR5IF4-Y=")`
                }} >
                  <div className='container'>
                    <h2>Men Fashion</h2>
                    <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>

                  </div>


                </div>
                <div class="carousel-item" style={{

                  backgroundImage: `url( "https://gl-images.condecdn.net/image/5xYxoE3jEMO/crop/3240/f/gettyimages-1166685976_sf.jpg")`
                }}>
                  <div className='container'>
                    <h2>Women Fashion</h2>
                    <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>

                  </div>


                </div>
                <div class="carousel-item" style={{
                  backgroundImage: `url("https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500")`
                }}>
                  <div className='container'>

                    <h2>Kids Fashion</h2>
                    <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>

                  </div>

                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <br></br>
          <div className='col-lg-4'>

            <div className="product-offer mb-30 ">
              <img src='https://media.istockphoto.com/photos/shopping-time-young-woman-in-shopping-looking-for-presents-shopping-picture-id683740686?b=1&k=20&m=683740686&s=170667a&w=0&h=cQipvOwD86Y6e8nMXF-R1UidFdLaUxPzo8mq5mIzmGs=' alt='offers' className='img-fluid'></img>
         
            </div>
            <br></br>
            <div className="product-offer mb-30 ">
              <img src='https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmd8ZW58MHx8MHx8&w=1000&q=80' alt='offers' className='img-fluid'></img>
        
            </div>
          </div>

        </div>
      </div>
      <br></br>



      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px;" }}>
              <h1 className="fa fa-check text-warning m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px;" }}>
              <h1 className="fa fa-shipping-fast text-warning m-0 mr-2"></h1>
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px;" }}>
              <h1 class="fas fa-exchange-alt text-warning m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px;" }}>
              <h1 className="fa fa-phone-volume text-warning m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div class="text-center pb-2">
                <p class="section-title1 px-5"><span class="px-2">Trandy Products</span></p>
                <h1 class="mb-4">Some Trandy Products</h1>
            </div>
      <section class="articles">
        {
              products && products.map((product)=>(
              <Product  product={product}/>
          
          ))
        }
        </section>
      <section className="collection-container">
        <Link to="" className="collection">
          <img src={accessories} alt="" />
          <p className="collection-title">Accessories</p>
        </Link>
      </section>
      <br></br>

      <div class="container-fluid mb-5">
      
        <div class="text-center pb-2">
                <p class="section-title1 px-5"><span class="px-2">Hygiene Products</span></p>
                <h1 class="mb-4">Healthcare & more</h1>
            </div>
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <div class="our-services settings">
                <div class="icon"> <img src="https://rukminim1.flixcart.com/image/150/150/j3xbzww0/face-wash/4/4/s/150-purifying-neem-face-wash-himalaya-original-imaeuyfzgdmythzw.jpeg?q=70" alt='a' /> </div>
                <h4>Skin Care</h4>
                <p>49₹</p>
                <div class="btn btn-warning">Add To Wishlist <span class="fas fa-arrow-right"></span></div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="our-services speedup">
                <div class="icon"> <img src="https://rukminim1.flixcart.com/image/150/150/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=70" alt='a' /> </div>
                <h4>Dry Fruits</h4>
                <p>49₹</p>
                <div class="btn btn-warning">Add To Wishlist <span class="fas fa-arrow-right"></span></div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="our-services privacy">
                <div class="icon"> <img src="https://rukminim1.flixcart.com/image/150/150/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=70" alt='a' /> </div>
                <h4>Puzzles & Cubes</h4>
                <p>49₹</p>
                <div class="btn btn-warning">Add To Wishlist <span class="fas fa-arrow-right"></span></div>
              </div>
            </div>
          </div>
        </div>
    
         
          
        </div>
   
      
      <hr></hr>
      <div class="container-fluid mb-5">
       
        <div class="text-center pb-2">
                <p class="section-title1 px-5"><span class="px-2">Daily used Products</span></p>
                <h1 class="mb-4">Home & Kitchen Essentials</h1>
            </div>
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <div class="our-services settings">
                <div class="icon"> <img src="https://rukminim1.flixcart.com/image/150/150/l4x2rgw0/mat/y/m/e/small-anti-skid-doormats-for-bathroom-entrance-and-bedrooms-original-imagfppfexh9ns3r.jpeg?q=70" alt='a' /> </div>
                <h4>Door Mats</h4>
                <p><span>Upto 80% Off</span></p>
                
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="our-services speedup">
                <div class="icon"> <img src="https://rukminim1.flixcart.com/image/150/150/ks4yz680/sticker/d/g/t/wall-stickers-wallpaper-home-decoration-whale-and-shaded-frames-original-imag5rvjdvrjdzgc.jpeg?q=70" alt='a' /> </div>
                <h4>Stickers & Wallpapers</h4>
                <p><span>Upto 80% Off</span></p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="our-services privacy">
                <div class="icon"> <img src="https://rukminim1.flixcart.com/image/150/150/k3j1z0w0/ceiling-lamp/w/7/r/gold-01-classical-original-imafmbywhhurgf6b.jpeg?q=70" alt='a' /> </div>
                <h4>Decor Lightings</h4>
                <p><span>Upto 80% Off</span></p>
              </div>
            </div>
          </div>
        </div>

      </div>
      </>
    )
  }

    </>
  )
}
export default Home