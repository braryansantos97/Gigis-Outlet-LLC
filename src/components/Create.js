import React, { useState, useEffect } from 'react';

function Create(props) {
	const [products, setProducts] = useState([]);
	const [newProduct, setNewProduct] = useState({
		name: '',
		description: '',
		img: '',
		price: 0,
		qty: 0
	});

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/gigis', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newProduct)
			});
			const data = await response.json();
			props.setProducts([...props.products, data]);
			setNewProduct({
				name: '',
				description: '',
				img: '',
				price: 0,
				qty: 0
			});
		} catch (error) {
			console.log(error);
		}
	};
	const handleChange = e => {
		setNewProduct({ ...newProduct, [e.target.id]: e.target.value });
	};

	return (
		<div className="">
			<p>
				<button
					className="btn btn-primary"
					type="button"
					data-toggle="collapse"
					data-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					Add New Product
				</button>
			</p>
			<div className="collapse" id="collapseExample">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="rounded-pill name"
						placeholder="Name"
						id="name"
						value={newProduct.name}
						onChange={handleChange}
					/>
					<br />
					<input
						type="text"
						className="rounded-pill img"
						placeholder="Image url"
						id="img"
						value={newProduct.img}
						onChange={handleChange}
					/>
					<br />
					<input
						type="text"
						className="rounded-pill description"
						placeholder="Description"
						id="description"
						value={newProduct.description}
						onChange={handleChange}
					/>
					<br />
					<input
						type="number"
						className="rounded-pill price"
						placeholder="Price"
						id="price"
						value={newProduct.price}
						onChange={handleChange}
					/>
					<br />
					<input
						type="number"
						className="rounded-pill qty"
						placeholder="Quantity"
						id="qty"
						value={newProduct.qty}
						onChange={handleChange}
					/>
					<br />
					<input
						className="rounded-pill btn btn-primary"
						type="submit"
						value="Add Product"
					/>
				</form>
			</div>
		</div>
	);
}
export default Create;
