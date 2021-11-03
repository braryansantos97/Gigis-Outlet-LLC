import React, { useState } from 'react';

export default function About(props) {
	return (
		<div className="AboutPage text-center">
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
					<h5 className="card-title">About Us</h5>
					<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					<p className="card-text">this a family owned small store.</p>
					<a href="#" className="card-link">
						<i className="bi bi-facebook"></i>
					</a>
					<a href="#" className="card-link">
						<i className="bi bi-instagram"></i>
					</a>
				</div>
			</div>
		</div>
	);
}
