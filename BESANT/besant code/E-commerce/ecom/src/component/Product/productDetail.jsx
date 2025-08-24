import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaRupeeSign } from "react-icons/fa";

const ProductDetail = ({id}) => {

    const [product,setProduct]=useState();
    const [mainImage,setMainImage]=useState(product?.images[0]);
    const fetchOneData=async ()=>{
        const res= await axios.get(`https://dummyjson.com/products/${id}`).then((res)=>{setProduct(res.data);}).catch((err)=>{console.log(err);});
    };
    useEffect(()=>{
        if(id){
            fetchOneData();
        }
    },[])
     const originalPrice=product?.price;
    const discountPrice=(originalPrice * (1-product?.discountPercentage.toFixed()/100))
    return <>
    <div className="container mt-5">
    <div className="row">
        <div className="col-md-6 mb-4">
                <img src={mainImage || product?.images[0]} alt="Product" className="img-fluid rounded mb-3 product-image" id="mainImage"/>
                 <div className="d-flex justify-content-between">
                {product?.images.map((a,index)=>{
                  return(

                <img src={a} alt={index} className="thumbnail rounded active" style={{width:"80px",cursor:"pointer"} }  onClick={()=>setMainImage(a)}/>
            
                  )
                })}
             
               </div>     
        </div>

        <div className="col-md-6">
            <h2 className="mb-3">{product?.title}</h2>
  
            <p className="text-muted mb-4">Brand: {product?.brand}</p>
            <p className="text-muted mb-4">SKU: {product?.sku}</p>
            <div className="mb-3">
                <span className="h4 me-2"><FaRupeeSign/>{product?.price}</span>
                <span className="text-muted"><s><FaRupeeSign/>{discountPrice}</s></span>
            </div>
            <div className="mb-3">
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-half text-warning"></i>
                <span className="ms-2">{product?.rating} ({product?.reviews.length} reviews)</span>
            </div>
            <p className="mb-4">{product?.description}</p>
            <p className=" mb-4 text-green" style={{color:"green"}}>Stock: {product?.availabilityStatus}</p>

            <div className="mb-4">
                <label for="quantity" className="form-label">Quantity:</label>
                <input type="number" className="form-control" id="quantity" value="1" min="1" style={{width: "80px"}}/>
            </div>
            <button className="btn btn-primary btn-lg mb-3 me-2">
                    <i className="bi bi-cart-plus"></i> Add to Cart
                </button>
            <button className="btn btn-outline-secondary btn-lg mb-3">
                    <i className="bi bi-heart"></i> Add to Wishlist
                </button>
            <div className="mt-4">
                <h5>Key Features:</h5>
                <ul>
                    <li>Industry-leading noise cancellation</li>
                    <li>30-hour battery life</li>
                    <li>Touch sensor controls</li>
                    <li>Speak-to-chat technology</li>
                </ul>
            </div>
        </div>
    </div>
</div>

    </>;
}
export default ProductDetail;

/*import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchOneData = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id) {
      fetchOneData();
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img
            src={product.images?.[0]}
            alt="Product"
            className="img-fluid rounded mb-3 product-image"
            id="mainImage"
          />

          <div className="d-flex justify-content-between">
            {product.images?.map((a, index) => (
              <img
                key={index}
                src={a}
                alt={`thumb-${index}`}
                className="thumbnail rounded active"
                onClick={() => console.log("change image to", a)}
              />
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="mb-3">{product.title}</h2>
          <p className="text-muted mb-4">SKU: {product.sku || "N/A"}</p>
          <div className="mb-3">
            <span className="h4 me-2">${product.price}</span>
            <span className="text-muted">
              <s>${product.price + 50}</s>
            </span>
          </div>

          <div className="mb-4">
            <h5>Color:</h5>
            <div className="btn-group" role="group" aria-label="Color selection">
              <input type="radio" className="btn-check" name="color" id="black" autoComplete="off" defaultChecked />
              <label className="btn btn-outline-dark" htmlFor="black">Black</label>

              <input type="radio" className="btn-check" name="color" id="silver" autoComplete="off" />
              <label className="btn btn-outline-secondary" htmlFor="silver">Silver</label>

              <input type="radio" className="btn-check" name="color" id="blue" autoComplete="off" />
              <label className="btn btn-outline-primary" htmlFor="blue">Blue</label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input type="number" className="form-control" id="quantity" defaultValue="1" min="1" style={{ width: "80px" }} />
          </div>

          <button className="btn btn-primary btn-lg mb-3 me-2">
            <i className="bi bi-cart-plus"></i> Add to Cart
          </button>
          <button className="btn btn-outline-secondary btn-lg mb-3">
            <i className="bi bi-heart"></i> Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;*/
