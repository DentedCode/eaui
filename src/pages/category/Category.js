import React from "react";
import { ListGroup } from "react-bootstrap";
import { AddCategoryForm } from "../../components/add-category-form/AddCategoryForm";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { ListCategory } from "../../components/list-category/ListCategory";

const Category = () => {
	return (
		<DefaultLayout>
			<div className="dashboard">
				<AddCategoryForm />
				<hr />
				<div className="display-categories">
					<ListCategory />
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Category;
