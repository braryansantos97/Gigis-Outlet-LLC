import React, { useState, useEffect } from 'react';
import Create from '../components/Create';
import { Link } from 'react-router-dom';

export default function Home(props) {
	const [products, setProducts] = useState([]);

	const element = products.map(singleProduct => {
		return (
			<div key={singleProduct._id} className="col mb-3">
				<div className="card box-shadow">
					<Link to={`/${singleProduct._id}`}>
						<img
							src={singleProduct.img}
							className="card-img-top"
							alt="Responsive image"
						/>
					</Link>
					<div className="card-body">
						<h5 className="card-title">{singleProduct.name}</h5>
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
			<h1 className="display-2">Gisi's Outlet LLC</h1>
			<h2>Our Products</h2>
			<div className="container">
				<div className="row row-cols-1 row-cols-md-4 g-4">{element}</div>
			</div>
		</div>
	);
}
