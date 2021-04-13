import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Col, Button, Spinner, Alert } from "react-bootstrap";

import {
	addNewCategory,
	fetchCategories,
} from "../../pages/category/categoryAction";

export const EditCategoryForm = ({ categoryEdit }) => {
	const dispatch = useDispatch();
	console.log(categoryEdit);
	const { isLoading, status, message, categoryList } = useSelector(
		state => state.category
	);
	const [category, setCategory] = useState(categoryEdit);

	useEffect(() => {
		setCategory(category);
	}, [dispatch, category]);

	const handleOnChange = e => {
		const { name, value } = e.target;

		setCategory({
			...category,
			[name]: value,
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		// dispatch(addNewCategory(category));
		///we going to find the way to call our server

		console.log(category);
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
						<Form.Control
							name="name"
							type="text"
							value={category.name}
							onChange={handleOnChange}
							placeholder="Enter New Category"
							required
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form.Row>
			</Form>
		</div>
	);
};
