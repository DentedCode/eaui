import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert, Button, Spinner, Table } from "react-bootstrap";
import {
	fetchProducts,
	deleteProduct,
} from "../../pages/product/productAction";

const ProductListTable = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { isLoading, status, deleteMsg, productList } = useSelector(
		state => state.product
	);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const handleOnDelete = _id => {
		dispatch(deleteProduct(_id));
	};

	return (
		<div>
			{isLoading && <Spinner variant="primary" animation="border" />}

			{deleteMsg && (
				<Alert variant={status === "success" ? "success" : "danger"}>
					{deleteMsg}
				</Alert>
			)}
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Status</th>
						<th>Thumbnail</th>
						<th>Name</th>
						<th>Price</th>
						<th> Edit </th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{productList.length &&
						productList.map((row, i) => (
							<tr key={row._id}>
								<td>{i}</td>
								<td>{row.status}</td>
								<td>put img here</td>
								<td>{row.name}</td>
								<td>{row.price}</td>
								<td>
									<Button
										variant="primary"
										onClick={() => history.push(`/product/${row._id}`)}
									>
										Edit
									</Button>{" "}
								</td>
								<td>
									<Button
										variant="danger"
										onClick={() => handleOnDelete(row._id)}
									>
										Delete
									</Button>{" "}
								</td>
							</tr>
						))}
				</tbody>
			</Table>
		</div>
	);
};

export default ProductListTable;
