import React from 'react';
import { FaEye, FaRupeeSign } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Card= ({product}) => {
    const originalPrice=product.price;
    const discountPrice=originalPrice * (1-product.discountPercentage.toFixed()/100);

    const navigate=useNavigate()
    const handleView=(id)=>{
        navigate(`/product-detail/${id}`)
    }
    return(
        <div className="col-6 col-md-4 col-lg-3 mb-4">
    <div className="card h-100 shadow-sm" >
        <div className="position-relative">
              <img src={product.images[0]} className="card-img-top" alt="Sunset Over the Sea" style={{objectFit:"contain",height:"180px", width:"100%"}}/>
              <span className="badge bg-danger position-absolute top-0 start-0 m-2">{product.discountPercentage.toFixed()}% OFF</span>
        </div>
  <div className="card-body d-flex flex-column">
    <h6 className="card-title mb-1 text-truncate">{product.title}</h6>
    <div className="small text-muted" aria-label="2 out of 5">
        <span className="ms-1">{product.rating} | {product.reviews.length} reviews</span>
    </div>
    <div clasName="mt-2">
        <span className="fw-bold me-2"><FaRupeeSign />{discountPrice.toFixed()}</span>
        <span className="text-decoration-line-through text-muted small"><FaRupeeSign />{product.price}</span>
        </div>
        <div className="d-flex justify-content-end" style={{gap:"20px"}}>
        <button className="btn btn-primary" onClick={()=>handleView(product.id)}><FaEye /></button>
         <button className="btn btn-success"><FaCartPlus /></button>
        </div>
  </div>
  </div>
</div>

    );
}
export default Card;