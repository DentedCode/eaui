import React from "react";
import { Card } from "react-bootstrap";
import { AddProductForm } from "../../components/add-product-form/AddProductForm";
import DefaultLayout from "../../components/layout/DefaultLayout";

const AddProduct = () => {
	return (
		<DefaultLayout>
			<h1>Add new Product</h1>
			<hr />

			<div className="add-new-product-form">
				<Card className="p-4">
					<AddProductForm />
				</Card>
			</div>
		</DefaultLayout>
	);
};

export default AddProduct;
