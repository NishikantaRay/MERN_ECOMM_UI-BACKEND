import React from 'react'

export default function OrderDetailsComp() {
  return (
    <div>
        <section class="contact-area">
			<div class="container-fluid custom-container mt-5">
				<div class="section-heading pb-30 mt-5 ">
					<h3>join with <span>us</span></h3>
				</div>
				<div class="row justify-content-center">
					<div class="col-md-8 col-lg-8 col-xl-6">
						<div class="contact-form">
							<form action="#">
								<div class="row">
									<div class="col-xl-6">
										<input type="text" placeholder="First Name*"/>
									</div>
									<div class="col-xl-6">
										<input type="text" placeholder="Last Name*"/>
									</div>
									<div class="col-xl-6">
										<input type="text" placeholder="Email*"/>
									</div>
									<div class="col-xl-6">
										<input type="text" placeholder="Website"/>
									</div>
									<div class="col-xl-12">
										<textarea name="message" placeholder="Message"></textarea>
									</div>
									<div class="col-xl-12">
										<input type="submit" value="SUBMIT"/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			
			</div>
			
		</section>
    </div>
  )
}
