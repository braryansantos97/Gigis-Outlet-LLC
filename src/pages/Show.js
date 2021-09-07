import React, { useState, useEffect } from 'react';
import Edit from '../components/Edit';
import { Link } from 'react-router-dom';

export default function Show(props) {
	const [product, setProduct] = useState({
		name: '',
		description: '',
		img: '',
		price: 0,
		qty: 0
	});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/gigis/${props.match.params.id}`);
				const data = await response.json();
				setProduct(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const checkqty = () => {
		if (product.qty > 0) {
			return (
				<>
					<a href={`/products/${product._id}/buy`} id="btn">
						<button className="btn btn-primary">BUY</button>
					</a>
					<br />
				</>
			);
		} else {
			return (
				<>
					<h3>Out of stock</h3>
					<br />
				</>
			);
		}
	};

	return (
		<div className="ShowPage text-center container-fluid">
			<div className="row">
				<div className="col-md-6 col-sm-12 justify-content-center">
					<h1>{product.name}</h1>
					<img src={product.img} className="w-100 h-auto p-3 img-thumbnail" />
				</div>
				<div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
					{product.description}
					<br />${product.price}
					<br />
					{product.qty} in stock
					<br />
					{checkqty()}
					<Link to="/home" className="btn btn-primary myButton">
						Back
					</Link>
				</div>
				<br />
				<div className="col-md-12 col-sm-12 d-flex flex-column">
					<Edit product={product} setProduct={setProduct} {...props} />
				</div>
			</div>
		</div>
	);
}
