import React, { useState } from 'react';

export default function Contact(props) {
	return (
		<div className="ContactPage text-center">
			<h1 className="display-2">Gigis Outlet LLC</h1>
			<div
				className="card container"
				style={{
					width: '18rem',
					background: 'transparent',
					border: 'solid white'
				}}
			>
				<div className="card-body">
					<h5 className="card-title">Contact Us</h5>
					<div>
						<i className="bi bi-envelope"></i>
						<p>gigisoutletllc@gmail.com</p>
					</div>
					<div>
						<i className="bi bi-telephone-fill"></i>
						<p>(571) 991-2887</p>
					</div>
				</div>
			</div>
		</div>
	);
}
