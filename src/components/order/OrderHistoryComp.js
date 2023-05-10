import React from 'react'

export default function OrderHistoryComp() {
  return (
    <div>
        
		<section class="account-area">
			<div class="container-fluid custom-container">
				<div class="row">
					<div class="col-xl-3">
						<div class="account-details">
							<p>Account</p>
							<ul>
								<li>John Abraham</li>
								<li><a href="https://themeim.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dfbbbab2b09fbaa7beb2afb3baf1bcb0b2">[email&#160;protected]</a></li>
								<li>18 / d , North Hali </li>
								<li>1652</li>
							</ul>
						</div>
						
					</div>
				
					<div class="col-xl-9">
						<div class="account-table">
							<h6>Order History</h6>
							<table class="tables">
								<thead>
									<tr>
										<th>Order</th>
										<th>Date</th>
										<th>Payment Status </th>
										<th>Fulfillment Status</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<a href="#">#4545454</a>
										</td>
										<td>
											12-05-2017
										</td>
										<td>
											paid
										</td>
										<td>
											fullfilled
										</td>
										<td>
											150$
										</td>

									</tr>
									
								</tbody>
								<tbody>
									<tr>
										<td>
											<a href="#">#45585854</a>
										</td>
										<td>
											25-08-2018
										</td>
										<td>
											paid
										</td>
										<td>
											fullfilled
										</td>
										<td>
											180$
										</td>

									</tr>
									
								</tbody>
							</table>

						</div>
						
					</div>
					

				</div>
			</div>
		</section>
    </div>
  )
}
