import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Switch from "react-bootstrap/esm/Switch";

// const product = {
//   name,
//   slug,
// status
// isAvailable
//   qty,
//   description,
//   price,
//   salePrice,
// saleEndDate,
//   images:[],
//   thumbnail,
// // reviews,
// catgories[]
// }

const initialState = {
	name: "",
	qty: 0,
	isAvailable: "off",
	price: 0,
	salePrice: 0,
	saleEndDate: null,
	description: "",
	images: [],
	categories: [],
};

export const AddProductForm = () => {
	const [newProduct, setNewProduct] = useState(initialState);

	const handleOnchange = e => {
		const { name, value } = e.target;

		setNewProduct({
			...newProduct,
			[name]: value,
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();

		console.log(newProduct);
	};

	return (
		<div>
			<Form onSubmit={handleOnSubmit}>
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
						name="isAvailable"
						id="isAvailable"
						type="switch"
						label="Available"
						value={newProduct.isAvailable}
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

				{/* <Form.Group>
					<Form.Label>Images</Form.Label>
					<Form.File
						name="images"
						id="exampleFormControlFile1"
						value={newProduct.images}
						onChange={handleOnchange}
						label="Example file input"
					/>
				</Form.Group> */}

				{/* <Form.Group>
					<Form.Label>Select Categories</Form.Label>
					<Form.Control
						name="categories"
						as="select"
						defaultValue={newProduct.categories}
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
					Submit
				</Button>
			</Form>
		</div>
	);
};
