import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCategories } from "../../pages/category/categoryAction";

import { Form, ListGroup } from "react-bootstrap";

export const ProductCatList = () => {
	const dispatch = useDispatch();
	const { categoryList } = useSelector(state => state.category);

	useEffect(() => {
		!categoryList.length && dispatch(fetchCategories());
	}, [categoryList, dispatch]);

	const parentCatList = categoryList.filter(row => !row.parentCat);
	const childCatList = categoryList.filter(row => row.parentCat);

	return (
		<div>
			<ListGroup>
				{parentCatList.map(row => (
					<>
						<ListGroup.Item key={row._id}>
							<Form.Check type="checkbox" label={row.name} />
						</ListGroup.Item>

						{childCatList.map(
							catItm =>
								row._id === catItm.parentCat && (
									<ListGroup.Item key={catItm._id}>
										<Form.Check
											type="checkbox"
											label={catItm.name}
											className="ml-4"
										/>
									</ListGroup.Item>
								)
						)}
					</>
				))}
			</ListGroup>
		</div>
	);
};
