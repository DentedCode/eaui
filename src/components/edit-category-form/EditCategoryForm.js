import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Col, Button, Spinner, Alert } from "react-bootstrap";

import { categoryUpdate } from "../../pages/category/categoryAction";
import { toggleCategoryEditModal } from "../../pages/category/categorySlice";

import ModalBox from "../modal/ModalBox";

const initialState = {
	name: "",
	parentCat: null,
};

export const EditCategoryForm = () => {
	const dispatch = useDispatch();

	const {
		isLoading,
		updateCatResponse,
		selectedCategory,
		categoryList,
		show,
	} = useSelector(state => state.category);

	const [category, setCategory] = useState(initialState);

	useEffect(() => {
		setCategory(selectedCategory);
	}, [dispatch, selectedCategory]);

	const handleOnChange = e => {
		const { name, value } = e.target;
		console.log(name, value);

		setCategory({
			...category,
			[name]: value,
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();

		const updateCat = {
			_id: category._id,
			name: category.name,
			parentCat: category.parentCat ? category.parentCat : null,
		};

		console.log(updateCat);

		dispatch(categoryUpdate(updateCat));
	};

	const toggleModal = e => {
		dispatch(toggleCategoryEditModal());
	};

	return (
		<ModalBox show={show} toggleModal={toggleModal}>
			<div className="add-category-form">
				{isLoading && <Spinner variant="primary" animation="border" />}

				{updateCatResponse?.message && (
					<Alert
						variant={
							updateCatResponse?.status === "success" ? "success" : "danger"
						}
					>
						{updateCatResponse?.message}
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

						<Form.Group as={Col} controlId="formGridState">
							<Form.Control
								as="select"
								name="parentCat"
								onChange={handleOnChange}
								defaultValue={null}
							>
								<option value={null}></option>

								{categoryList?.map((row, i) => (
									<option
										key={i}
										value={row._id}
										selected={row._id === category.parentCat}
									>
										{row.name}
									</option>
								))}
							</Form.Control>
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form.Row>
				</Form>
			</div>
		</ModalBox>
	);
};
