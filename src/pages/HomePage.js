import React from 'react'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Instagram from '../components/Instagram'
import Jumbotron from '../components/Jumbotron'
import MobileNavbar from '../components/MobileNavbar'
import NavBar from '../components/NavBar'
import ProductList from '../components/ProductList'
import Trending from '../components/Trending'

export default function HomePage() {
  return (
    <div id="home-version-1" class="home-version-1" data-style="default">
        <div class="site-content">
        <NavBar/>
        <MobileNavbar/>
        <Jumbotron/>
        <Category/>
        <ProductList/>
        <section class="add-area">
			<a href="#"><img src="media/images/banner/add.jpg" alt=""/></a>
		</section>
    <Trending/>
    <Instagram/>
        <Footer/>

        </div>
       
    </div>
  )
}
