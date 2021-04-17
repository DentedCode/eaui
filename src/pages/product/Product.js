import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import DefaultLayout from "../../components/layout/DefaultLayout";
import ProductListTable from "../../components/product-table/ProductListTable";

const Product = () => {
	const history = useHistory();

	return (
		<DefaultLayout>
			<div className="product">
				<h1>Products</h1>
				<Button variant="success" onClick={() => history.push("/product/new")}>
					Add New Product
				</Button>

				<div className="product-lists">
					<ProductListTable />
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Product;
