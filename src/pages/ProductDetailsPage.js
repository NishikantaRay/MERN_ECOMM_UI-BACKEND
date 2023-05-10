import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ProductDetailsComp from '../components/product/ProductDetailsComp'
import MobileNavbar from '../components/MobileNavbar'
export default function ProductDetailsPage() {
  return (
    <div id="home-version-1" class="home-version-1" data-style="default">
        <div class="site-content">
        <NavBar/>
        <MobileNavbar/>
        <ProductDetailsComp/>
        <Footer/>
        </div>
        

    </div>
  )
}
