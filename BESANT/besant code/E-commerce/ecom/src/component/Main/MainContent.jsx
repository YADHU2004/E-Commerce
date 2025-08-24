import React, { useEffect, useState } from 'react';
import Card from '../Card/card';
import axios from 'axios';
const MainContent = () => {
    const [data,setData]=useState([]);
    const fetchData=async() =>{
        const res=await axios.get("https://dummyjson.com/products").then((res)=>{setData(res.data.products)}).catch((err)=>{
            console.error(err)
        })
    }
    console.log(data,"data");
useEffect(()=>{
fetchData();
},[])
    return(
    <div className="container py-3">
        <div className="row" style={{display:"flex",gap:"20px"}}>
         {data.map((product)=>(
           <Card product={product}/>
         ))}
 
</div>
        </div>
    )
}
export default MainContent;