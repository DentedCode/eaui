import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Col, Button, Spinner, Alert } from "react-bootstrap";

import {
	addNewCategory,
	fetchCategories,
} from "../../pages/category/categoryAction";

const initialState = {
	name: "",
};
export const AddCategoryForm = () => {
	const dispatch = useDispatch();

	const { isLoading, status, message, categoryList } = useSelector(
		state => state.category
	);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

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
		dispatch(addNewCategory(category));
		///we going to find the way to call our server
	};

	return (
		<div className="add-category-form">
			{isLoading && <Spinner variant="primary" animation="border" />}

			{message && (
				<Alert variant={status === "success" ? "success" : "danger"}>
					{message}
				</Alert>
			)}
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
							// defaultValue={category.parentCat}
						>
							<option>Choose...</option>
							{categoryList?.map((row, i) => (
								<option key={i} value={row._id}>
									{row.name}
								</option>
							))}
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
