import React, { useState, useEffect } from 'react';
import Create from '../components/Create';
import { Link } from 'react-router-dom';

export default function Home(props) {
	const [products, setProducts] = useState([]);

	const element = products.map(singleProduct => {
		return (
			<div
				key={singleProduct._id}
				className="col-lg-3 col-md-3 col-sm-6 col-xs-6"
			>
				<div className="card mb-4 box-shadow">
					<Link to={`/${singleProduct._id}`}>
						<img
							src={singleProduct.img}
							className="card-img-top img-fluid"
							alt="Responsive image"
						/>
					</Link>
					<div className="card-body">
						<p className="card-text">{singleProduct.name}</p>
					</div>
				</div>
			</div>
		);
	});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/gigis/');
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<div className="HomePage text-center">
			<br />
			<Create products={products} setProducts={setProducts} />
			<br />
			<h1>Gisi's Outlet LLC</h1>
			<h2>Our Products</h2>
			<div className="container">
				<div className="row">{element}</div>
			</div>
		</div>
	);
}
