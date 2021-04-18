import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import {
	fetchAProduct,
	updateAProduct,
} from "../../pages/edit-product/editProductAction";
import { useParams } from "react-router-dom";

const initialState = {
	name: "",
	slug: "",
	qty: 0,
	status: true,
	price: 0,
	salePrice: 0,
	saleEndDate: Date(),
	description: "",
	images: [],
	categories: [],
};

export const EditProductForm = () => {
	const dispatch = useDispatch();
	const { _id } = useParams();

	const { isLoading, status, message, product } = useSelector(
		state => state.selectedProduct
	);
	const [editProduct, setEditProduct] = useState(initialState);

	useEffect(() => {
		//call api and update our state for a individual product
		if (!editProduct._id) {
			dispatch(fetchAProduct(_id));
			setEditProduct(product);
		}
	}, [dispatch, editProduct, _id]);

	// product._id !== editProduct._id && setEditProduct(product);

	const handleOnchange = e => {
		const { name, value, checked } = e.target;
		let val = value;
		if (name === "status") {
			val = checked;
		}
		console.log(name, value, checked);
		setEditProduct({
			...editProduct,
			[name]: val,
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();

		const { __v, ...updateProduct } = editProduct;
		console.log(updateProduct);

		dispatch(updateAProduct(updateProduct));
	};

	return (
		<div>
			{isLoading && <Spinner variant="primary" animation="border" />}

			{message && (
				<Alert variant={status === "success" ? "success" : "danger"}>
					{message}
				</Alert>
			)}

			{!product._id ? (
				<h1>Product is not found</h1>
			) : (
				<Form onSubmit={handleOnSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control
							name="name"
							type="text"
							value={editProduct.name}
							onChange={handleOnchange}
							placeholder="Enter product name"
							required
						/>
						{/* <Form.Text className="text-muted">
				We'll never share your email with anyone else.
			</Form.Text> */}
					</Form.Group>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Slug</Form.Label>
						<Form.Control
							name="slug"
							type="text"
							value={editProduct.slug}
							required
							disabled
						/>
						{/* <Form.Text className="text-muted">
				We'll never share your email with anyone else.
			</Form.Text> */}
					</Form.Group>

					<Form.Group>
						<Form.Check
							name="status"
							id="status"
							type="switch"
							label="Available"
							checked={editProduct.status}
							// value={editProduct.status}
							onChange={handleOnchange}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Price</Form.Label>
						<Form.Control
							name="price"
							type="number"
							value={editProduct.price}
							onChange={handleOnchange}
							placeholder="45.0"
							required
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Sale Price</Form.Label>
						<Form.Control
							name="salePrice"
							type="number"
							value={editProduct.salePrice}
							onChange={handleOnchange}
							placeholder="45.0"
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Sale End Date</Form.Label>
						<Form.Control
							name="saleEndDate"
							type="date"
							value={editProduct.saleEndDate}
							onChange={handleOnchange}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Quantity</Form.Label>
						<Form.Control
							name="qty"
							type="number"
							value={editProduct.qty}
							onChange={handleOnchange}
							placeholder="50"
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							name="description"
							type="text"
							as="textarea"
							rows={5}
							required
							value={editProduct.description}
							onChange={handleOnchange}
							placeholder="Writ full description"
						/>
					</Form.Group>

					{/* <Form.Group>
			<Form.Label>Images</Form.Label>
			<Form.File
				name="images"
				id="exampleFormControlFile1"
				value={editProduct.images}
				onChange={handleOnchange}
				label="Example file input"
			/>
		</Form.Group> */}

					{/* <Form.Group>
			<Form.Label>Select Categories</Form.Label>
			<Form.Control
				name="categories"
				as="select"
				defaultValue={editProduct.categories}
				onChange={handleOnchange}
				multiple
				required
			>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
			</Form.Control>
		</Form.Group> */}

					<Button variant="primary" type="submit">
						Update Product
					</Button>
				</Form>

				// {isLoading && <Spinner variant="primary" animation="border" />}
			)}
		</div>
	);
};
