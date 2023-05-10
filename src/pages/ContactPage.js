import React from 'react'
import ContactForm from '../components/form/ContactForm'
import Footer from '../components/Footer'
import MobileNavbar from '../components/MobileNavbar'
import NavBar from '../components/NavBar'

export default function ContactPage() {
  return (
    <div id="home-version-1" class="home-version-1" data-style="default">
        <div class="site-content">
        <NavBar/>
        <MobileNavbar/>
        <ContactForm/>
        <Footer/>
        </div>
        

    </div>
  )
}
