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

	// const checkqty = () => {
	// 	if (product.qty > 0) {
	// 		return (
	// 			<>
	// 				<Link to={`/buy`}>
	// 					<button className="btn btn-primary">BUY</button>
	// 				</Link>
	// 				<br />
	// 			</>
	// 		);
	// 	} else {
	// 		return (
	// 			<>
	// 				<h3>Out of stock</h3>
	// 				<br />
	// 			</>
	// 		);
	// 	}
	// };

	return (
		<div className="ShowPage text-center container-fluid">
			<br />
			<div className="row">
				<div className="col-md-6 col-sm-12 justify-content-center">
					<img src={product.img} className="w-100 h-auto p-3 img-thumbnail" />
				</div>
				<div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
					<div
						className="card text-center"
						style={{
							background: 'transparent',
							border: 'solid white'
						}}
					>
						<div className="card-body">
							<h5 className="card-title">{product.name}</h5>
							<p className="card-text">{product.description}</p>
							<p>${product.price}</p>
							<p>{product.qty} in stock</p>
						</div>
					</div>
					<Link to="/home" className="btn btn-primary">
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
