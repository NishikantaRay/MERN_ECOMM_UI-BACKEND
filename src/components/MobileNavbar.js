import React from 'react'

export default function MobileNavbar() {
  return (
    <div>
<header class="mobile-header">
			<div class="container-fluid custom-container">
				<div class="row">

					<div class="col-4">
						<div class="accordion-wrapper">
							<a href="#" class="mobile-open"><i class="flaticon-menu-1"></i></a>
						</div>
					</div>
					<div class="col-4">
						<div class="logo">
							<a href="index.html">
								<img src="media/images/logo.png" alt=""/>
							</a>
						</div>
					</div>
					<div class="col-4">
						<div class="top-cart">
							<a href="javascript:void(0)"><i class="fa fa-shopping-cart" aria-hidden="true"></i> (2)</a>
							<div class="cart-drop">
								<div class="single-cart">
									<div class="cart-img">
										<img alt="" src="media/images/product/car1.jpg"/>
									</div>
									<div class="cart-title">
										<p><a href="#">Aliquam Consequat</a></p>
									</div>
									<div class="cart-price">
										<p>1 x $500</p>
									</div>
									<a href="#"><i class="fa fa-times"></i></a>
								</div>
								<div class="single-cart">
									<div class="cart-img">
										<img alt="" src="media/images/product/car2.jpg"/>
									</div>
									<div class="cart-title">
										<p><a href="#">Quisque In Arcuc</a></p>
									</div>
									<div class="cart-price">
										<p>1 x $200</p>
									</div>
									<a href="#"><i class="fa fa-times"></i></a>
								</div>
								<div class="cart-bottom">
									<div class="cart-sub-total">
										<p>Sub-Total <span>$700</span></p>
									</div>
									<div class="cart-sub-total">
										<p>Eco Tax (-2.00)<span>$7.00</span></p>
									</div>
									<div class="cart-sub-total">
										<p>VAT (20%) <span>$40.00</span></p>
									</div>
									<div class="cart-sub-total">
										<p>Total <span>$244.00</span></p>
									</div>
									<div class="cart-checkout">
										<a href="cart.html"><i class="fa fa-shopping-cart"></i>View Cart</a>
									</div>
									<div class="cart-share">
										<a href="#"><i class="fa fa-share"></i>Checkout</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
			</div>
			
		</header>
        <div class="accordion-wrapper">

		
<div id="mobilemenu" class="accordion">
    <ul>
        <li class="mob-logo"><a href="index.html">
                <img src="media/images/logo.png" alt=""/>
            </a></li>
        <li><a href="#" class="closeme"><i class="flaticon-close"></i></a></li>
        <li>
            <a href="#" class="link">Home<i class="fa fa-chevron-down"></i></a>
            <ul class="submenu">
                <li><a href="index.html">Home one</a></li>
                <li><a href="index-2.html">Home two</a></li>
                <li><a href="index-3.html">Home three</a></li>

            </ul>
        </li>
        <li>
            <a href="#" class="link">Collections<i class="fa fa-chevron-down"></i></a>
            <ul class="submenu">
                <li><a href="collection.html">Collections four grid</a></li>
                <li><a href="collection-three-grid.html">Collections three grid</a></li>
                <li><a href="collection-two-grid.html">Collections two grid</a></li>
            </ul>
        </li>
        <li class="out-link"><a href="shop.html">Collections</a></li>

        <li>
            <a href="shop.html" class="link">Men<i class="fa fa-chevron-down"></i></a>
            <ul class="submenu">
                <li><a href="shop.html">Shop with sidebar</a></li>
                <li><a href="shop-four-grid.html">Shop four grid</a></li>
                <li><a href="shop-without-sidebar.html">Shop without sidebar</a></li>
                <li><a href="product.html">Product details</a></li>
                <li><a href="product-fullwidth.html">Product Fullwidth</a></li>
                <li><a href="cart.html">Cart</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="link">Women<i class="fa fa-chevron-down"></i></a>
            <ul class="submenu">
                <li><a href="shop.html">Woman Dresses</a></li>
                <li><a href="shop.html">Women & Flowers</a></li>
                <li><a href="shop.html">Girl Hat in Sunlights</a></li>
                <li><a href="shop.html">Men Watches</a></li>
                <li><a href="shop.html">Clothes Fashion</a></li>
                <li><a href="shop.html">Woman Dresses</a></li>
            </ul>
        </li>
        <li>
            <a href="#" class="link">Shop<i class="fa fa-chevron-down"></i></a>
            <ul class="submenu">
                <li><a href="shop.html">Shop with sidebar</a></li>
                <li><a href="shop-four-grid.html">Shop four grid</a></li>
                <li><a href="shop-without-sidebar.html">Shop without sidebar</a></li>
                <li><a href="product.html">Product details</a></li>
                <li><a href="product-fullwidth.html">Product Fullwidth</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="account.html">Order</a></li>
            </ul>
        </li>
        <li>
            <a href="#" class="link">Blog<i class="fa fa-chevron-down"></i></a>
            <ul class="submenu">
                <li><a href="single.html">Single post</a></li>
                <li><a href="blog.html">Blog three grid</a></li>
                <li><a href="blog-two-grid.html">Blog two grid</a></li>
            </ul>
        </li>
        <li>
            <a href="#" class="link">Pages<i class="fa fa-chevron-down"></i></a>
            <ul class="submenu">
                <li><a href="login.html">Account</a></li>
                <li><a href="create-account.html">Signup</a></li>
                <li><a href="account.html">Login</a></li>
            </ul>
        </li>


    </ul>
    <div class="mobile-login">
        <a href="login.html">Log in</a> |
        <a href="create-account.html">Create Account</a>
    </div>
    <form action="#" id="moble-search">
        <input placeholder="Search...." type="text"/>
        <button type="submit"><i class="fa fa-search"></i></button>
    </form>
</div>
</div>
    </div>
  )
}
