import React from "react";
import { Form, Col, Button } from "react-bootstrap";

export const AddCategoryForm = () => {
	return (
		<div className="add-category-form">
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId="">
						<Form.Label>New Category</Form.Label>
						<Form.Control
							name="category"
							type="text"
							placeholder="Enter New Category"
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>Select Parent Category</Form.Label>
						<Form.Control as="select" defaultValue="0">
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
