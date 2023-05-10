import React from 'react'
import CartComp from '../components/cart/CartComp'
import Footer from '../components/Footer'
import MobileNavbar from '../components/MobileNavbar'
import NavBar from '../components/NavBar'

export default function CartPage() {
  return (
    <div id="home-version-1" class="home-version-1" data-style="default">
        <div class="site-content">
        <NavBar/>
        <MobileNavbar/>
        <CartComp/>
        <Footer/>
        </div>
        

    </div>
  )
}
