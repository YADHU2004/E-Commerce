import { useState } from 'react'
import { Routes,Route} from 'react-router-dom'
import NavbarPage from './page/navbarpage.jsx'
import ProductDetail from './component/Product/productDetail.jsx'
import ProductDetailPage from './page/productDetailPage.jsx'


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarPage />} />
        <Route path="/product-detail/:id" element={<ProductDetailPage/>}/>
      </Routes>
    </>
  )
}

export default App;
