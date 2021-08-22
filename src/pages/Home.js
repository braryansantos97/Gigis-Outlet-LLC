import React, { useState, useEffect } from 'react';
import Create from '../components/Create';
import { Link } from 'react-router-dom';

export default function Home(props) {
	const [products, setProducts] = useState([]);

	const element = products.map(singleProduct => {
		return (
			<div key={singleProduct._id} className="product col-2 text-center">
				{singleProduct.name}
				<Link to={`/${singleProduct._id}`}>
					<img src={singleProduct.img} className="img-thumbnail" />
				</Link>
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
			<Create products={products} setProducts={setProducts} />
			<h1>hello</h1>
			<h2>Our Products</h2>
			<div className="d-inline-flex p-2 bd-highlight">
				<div className="row">{element}</div>
			</div>
		</div>
	);
}
