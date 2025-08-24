import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { useParams } from "react-router-dom";
import ProductDetail from "../component/Product/productDetail";

 const ProductDetailPage = ({product}) => {
    const {id}=useParams();
    return(
        <div>
            <Header/>
            <ProductDetail id={id}/>
            <Footer/>
        </div>
    )
}
export default ProductDetailPage;