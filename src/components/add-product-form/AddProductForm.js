import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { addNewProduct } from "../../pages/product/productAction";
import { ProductCatList } from "../product-category-lists/ProductCatList";

const initialState = {
	name: "",
	qty: 0,
	status: false,
	price: 0,
	salePrice: 0,
	saleEndDate: "",
	description: "",
	images: [],
	categories: [],
};

export const AddProductForm = () => {
	const dispatch = useDispatch();
	const [newProduct, setNewProduct] = useState(initialState);
	const [images, setImages] = useState([]);

	const { isLoading, status, message } = useSelector(state => state.product);

	const handleOnchange = e => {
		const { name, value } = e.target;

		setNewProduct({
			...newProduct,
			[name]: value,
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		const formData = new FormData();

		Object.keys(newProduct).map(key => {
			key !== "images" && formData.append(key, newProduct[key]);
		});

		images.length &&
			[...images].map(image => {
				formData.append("images", image);
			});

		dispatch(addNewProduct(formData));
	};

	const onCatSelect = e => {
		const { checked, value } = e.target;
		if (checked) {
			//PUT _ID IN SIDE THE ARRAY
			setNewProduct({
				...newProduct,
				categories: [...newProduct.categories, value],
			});
		} else {
			//take _id out of the array
			const updatedCatIds = newProduct.categories.filter(id => id !== value);

			setNewProduct({
				...newProduct,
				categories: updatedCatIds,
			});
		}
	};

	const handleOnImageSelect = e => {
		const { files } = e.target;
		console.log(files);

		setImages(files);
	};

	return (
		<div>
			{isLoading && <Spinner variant="primary" animation="border" />}

			{message && (
				<Alert variant={status === "success" ? "success" : "danger"}>
					{message}
				</Alert>
			)}
			<Form onSubmit={handleOnSubmit} encType="multipart/form-data">
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control
						name="name"
						type="text"
						value={newProduct.name}
						onChange={handleOnchange}
						placeholder="Enter product name"
						required
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
						label="Status"
						value={newProduct.status}
						onChange={handleOnchange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Price</Form.Label>
					<Form.Control
						name="price"
						type="number"
						value={newProduct.price}
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
						value={newProduct.salePrice}
						onChange={handleOnchange}
						placeholder="45.0"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Sale End Date</Form.Label>
					<Form.Control
						name="saleEndDate"
						type="date"
						value={newProduct.saleEndDate}
						onChange={handleOnchange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Quantity</Form.Label>
					<Form.Control
						name="qty"
						type="number"
						value={newProduct.qty}
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
						value={newProduct.description}
						onChange={handleOnchange}
						placeholder="Writ full description"
					/>
				</Form.Group>

				<hr />
				<Form.Label>Select Categories</Form.Label>
				<ProductCatList
					onCatSelect={onCatSelect}
					selectedCatIds={newProduct.categories}
				/>
				<hr />
				<Form.Group>
					<Form.Label>Images</Form.Label>
					<Form.File
						name="images"
						id="exampleFormControlFile1"
						onChange={handleOnImageSelect}
						label="Upload image file only"
						multiple
						accept="image/*"
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>

			{isLoading && <Spinner variant="primary" animation="border" />}
		</div>
	);
};
