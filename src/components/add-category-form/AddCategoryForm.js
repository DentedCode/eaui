import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

const initialState = {
	name: "",
	parentCat: 0,
};
export const AddCategoryForm = () => {
	const [category, setCategory] = useState(initialState);

	const handleOnChange = e => {
		const { name, value } = e.target;

		setCategory({
			...category,
			[name]: value,
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();

		console.log(category);
		///we going to find the way to call our server
	};

	return (
		<div className="add-category-form">
			<Form onSubmit={handleOnSubmit}>
				<Form.Row>
					<Form.Group as={Col} controlId="">
						<Form.Label>New Category</Form.Label>
						<Form.Control
							name="name"
							type="text"
							value={category.name}
							onChange={handleOnChange}
							placeholder="Enter New Category"
							required
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>Select Parent Category</Form.Label>
						<Form.Control
							as="select"
							name="parentCat"
							onChange={handleOnChange}
							defaultValue={category.parentCat}
						>
							<option>Choose...</option>
							<option>...</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};
