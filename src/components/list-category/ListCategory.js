import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { removeCategories } from "../../pages/category/categoryAction";
import { EditCategoryForm } from "../edit-category-form/EditCategoryForm";
import {
	toggleCategoryEditModal,
	selectACategory,
} from "../../pages/category/categorySlice";

export const ListCategory = () => {
	const dispatch = useDispatch();
	const { categoryList, selectedCategory } = useSelector(
		state => state.category
	);

	const [showForm, setShowForm] = useState("");

	const handleOnDeleteClicked = _id => {
		if (window.confirm("Are you sure you want to delete the category?")) {
			/// collection if _di

			const childIds = categoryList.map(row => {
				if (row.parentCat === _id) {
					return row._id;
				}
			});

			const idsToDelete = childIds.filter(row => row);

			dispatch(removeCategories([...idsToDelete, _id]));
		}
	};

	const handleEdit = _id => {
		dispatch(toggleCategoryEditModal());
		console.log(_id);
		const catItme = categoryList.filter(row => row._id === _id)[0];
		dispatch(selectACategory(catItme));

		// showForm === _id ? setShowForm("") : setShowForm(_id);
	};

	const topLevelCats = categoryList.filter(row => !row.parentCat);
	const childCats = categoryList.filter(row => row.parentCat);

	return (
		<>
			<EditCategoryForm />
			<ListGroup>
				{topLevelCats.map((row, i) => {
					return (
						<div key={row._id}>
							<ListGroup.Item>
								{row.name}
								<span className="item-buttons ml-5">
									<Button onClick={() => handleEdit(row._id)}>Edit</Button>
									<Button
										variant="danger"
										onClick={() => handleOnDeleteClicked(row._id)}
									>
										Delete
									</Button>
								</span>
							</ListGroup.Item>
							{childCats.map(
								itm =>
									itm.parentCat === row._id && (
										<ListGroup.Item key={itm._id}>
											{`--> ${itm.name}`}

											<span className="item-buttons ml-5">
												<Button onClick={() => handleEdit(itm._id)}>
													Edit
												</Button>
												<Button
													variant="danger"
													onClick={() => handleOnDeleteClicked(itm._id)}
												>
													Delete
												</Button>
											</span>
										</ListGroup.Item>
									)
							)}
						</div>
					);
				})}
			</ListGroup>
		</>
	);
};
