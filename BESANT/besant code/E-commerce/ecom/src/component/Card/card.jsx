import React from 'react';
import { FaEye, FaRupeeSign } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
const Card= () => {
    return(
        <div className="col-6 col-md-4 col-lg-3 mb-4">
    <div className="card h-100 shadow-sm" >
        <div className="position-relative">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" className="card-img-top" alt="Sunset Over the Sea" style={{objectFit:"cover",height:"180"}}/>
              <span className="badge bg-danger position-absolute top-0 start-0 m-2">10% OFF</span>
        </div>
  <div className="card-body d-flex flex-column">
    <h6 className="card-title mb-1 text-truncate">Men clothing</h6>
    <div className="small text-muted" aria-label="2 out of 5">
        <span className="ms-1">4.5 | 10 reviews</span>
    </div>
    <div clasName="mt-2">
        <span className="fw-bold me-2"><FaRupeeSign />550</span>
        <span className="text-decoration-line-through text-muted small"><FaRupeeSign />600</span>
        </div>
        <div className="d-flex justify-content-end" style={{gap:"20px"}}>
        <button className="btn btn-primary"><FaEye /></button>
         <button className="btn btn-success"><FaCartPlus /></button>
        </div>
  </div>
  </div>
</div>

    );
}
export default Card;