import React from 'react'
import Footer from '../components/Footer'
import MobileNavbar from '../components/MobileNavbar'
import NavBar from '../components/NavBar'
import OrderHistoryComp from '../components/order/OrderHistoryComp'

export default function OrderHistoryPage() {
  return (
    <div>
        <NavBar/>
        <MobileNavbar/>
        <OrderHistoryComp/>
        <Footer/>

    </div>
  )
}
