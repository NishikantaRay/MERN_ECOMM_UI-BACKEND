import React from 'react'
import OrderDetailsComp from '../components/form/OrderDetailsComp'
import Footer from '../components/Footer'
import MobileNavbar from '../components/MobileNavbar'
import NavBar from '../components/NavBar'
export default function OrderDetailsPage() {
  return (
    <div id="home-version-1" class="home-version-1" data-style="default">
        <div class="site-content">
            <NavBar/>
            <MobileNavbar/>
        <OrderDetailsComp/>
        <Footer/>
        </div>
    </div>
  )
}
