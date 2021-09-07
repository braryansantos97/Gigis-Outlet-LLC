import React, { useState, useEffect, useRef } from 'react';

export default function Edit(props) {
	const { product, setProduct } = props;
	const nameInput = useRef(null);
	const descriptionInput = useRef(null);
	const imgInput = useRef(null);
	const priceInput = useRef(null);
	const qtyInput = useRef(null);

	const handleUpdate = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/gigis/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: nameInput.current.value,
					description: descriptionInput.current.value,
					img: imgInput.current.value,
					price: priceInput.current.value,
					qty: qtyInput.current.value
				})
			});

			const data = await response.json();
			setProduct(data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/gigis/${props.match.params.id}`, {
				method: 'DELETE',
				header: {
					'Content-Type': 'application/json'
				}
			});
			const deletedProduct = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/home');
		}
	};

	return (
		<div className="container text-center">
			<br />
			<p>
				<button
					className="btn btn-primary"
					type="button"
					data-toggle="collapse"
					data-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					Edit Product
				</button>
			</p>
			<div className="collapse" id="collapseExample">
				<form
					style={{ display: 'flex', flexDirection: 'column' }}
					onSubmit={handleUpdate}
				>
					<label>
						{' '}
						Product Name:{' '}
						<input
							className="form-control"
							type="text"
							ref={nameInput}
							defaultValue={product.name}
						/>
					</label>
					<label>
						{' '}
						Procuct img:{' '}
						<input
							className="form-control"
							type="text"
							ref={imgInput}
							defaultValue={product.img}
						/>
					</label>
					<label>
						{' '}
						Procuct description:{' '}
						<input
							className="form-control"
							type="text"
							ref={descriptionInput}
							defaultValue={product.description}
						/>
					</label>
					<label>
						{' '}
						Price:{' '}
						<input
							className="form-control"
							type="text"
							ref={priceInput}
							defaultValue={product.price}
						/>
					</label>
					<label>
						{' '}
						Product Quantity:{' '}
						<input
							className="form-control"
							type="text"
							ref={qtyInput}
							defaultValue={product.qty}
						/>
					</label>
					<label>
						{' '}
						<input
							className="rounded-pill btn btn-primary"
							type="submit"
							value="Update Product"
						/>
					</label>
					<label>
						<button
							className="btn btn-danger rounded-pill"
							onClick={handleDelete}
						>
							Delete product
						</button>
					</label>
				</form>
			</div>
		</div>
	);
}
