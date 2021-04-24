import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Form, Image, Spinner } from "react-bootstrap";
import {
	fetchAProduct,
	updateAProduct,
} from "../../pages/edit-product/editProductAction";
import { useParams } from "react-router-dom";
import { ProductCatList } from "../product-category-lists/ProductCatList";

const initialState = {
	name: "",
	slug: "",
	qty: 0,
	status: true,
	price: 0,
	salePrice: 0,
	saleEndDate: "",
	description: "",
	images: [],
	categories: [],
};

export const EditProductForm = () => {
	const dispatch = useDispatch();
	const { _id } = useParams();

	const { isLoading, status, message, product } = useSelector(
		state => state.selectedProduct
	);
	const [editProduct, setEditProduct] = useState(initialState);
	const [images, setImages] = useState([]);
	const [imgToDelete, setImgToDelete] = useState([]);

	useEffect(() => {
		//call api and update our state for a individual product
		if (!editProduct._id || editProduct._id !== product._id) {
			dispatch(fetchAProduct(_id));
			setEditProduct(product);
		}
	}, [dispatch, product, editProduct, _id]);

	// product._id !== editProduct._id && setEditProduct(product);

	const handleOnchange = e => {
		const { name, value, checked } = e.target;
		let val = value;
		if (name === "status") {
			val = checked;
		}
		console.log(name, value, checked);
		setEditProduct({
			...editProduct,
			[name]: val,
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		const { __v, ...updateProduct } = editProduct;
		console.log(updateProduct);

		const formData = new FormData();

		//append form data
		Object.keys(updateProduct).map(key => {
			key !== "images" && formData.append(key, updateProduct[key]);
		});

		//append new images
		images.length &&
			[...images].map(image => {
				formData.append("images", image);
			});

		//append image to delete
		imgToDelete.length && formData.append("imgToDelete", imgToDelete);

		console.log(formData);
		dispatch(updateAProduct(formData));
	};

	const onCatSelect = e => {
		const { checked, value } = e.target;
		if (checked) {
			//PUT _ID IN SIDE THE ARRAY
			setEditProduct({
				...editProduct,
				categories: [...editProduct.categories, value],
			});
		} else {
			//take _id out of the array
			const updatedCatIds = editProduct.categories.filter(id => id !== value);

			setEditProduct({
				...editProduct,
				categories: updatedCatIds,
			});
		}
	};

	const onImageDeleteSelect = e => {
		const { checked, value } = e.target;
		if (checked) {
			//PUT img path IN SIDE THE ARRAY
			setImgToDelete([...imgToDelete, value]);
		} else {
			//take img path out of the array
			const updatedImgToDelete = imgToDelete.filter(path => path !== value);

			setImgToDelete(updatedImgToDelete);
		}
	};

	const handleOnImageSelect = e => {
		const { files } = e.target;
		console.log(files);

		setImages(files);
	};

	console.log(imgToDelete);
	return (
		<div>
			{isLoading && <Spinner variant="primary" animation="border" />}

			{message && (
				<Alert variant={status === "success" ? "success" : "danger"}>
					{message}
				</Alert>
			)}

			{!product._id ? (
				<h1>Product is not found</h1>
			) : (
				<Form onSubmit={handleOnSubmit} encType="multipart/form-data">
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control
							name="name"
							type="text"
							value={editProduct.name}
							onChange={handleOnchange}
							placeholder="Enter product name"
							required
						/>
						{/* <Form.Text className="text-muted">
				We'll never share your email with anyone else.
			</Form.Text> */}
					</Form.Group>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Slug</Form.Label>
						<Form.Control
							name="slug"
							type="text"
							value={editProduct.slug}
							required
							disabled
						/>
						{/* <Form.Text className="text-muted">
				We'll never share your email with anyone else.
			</Form.Text> */}
					</Form.Group>
					<Form.Group>
						<Form.Check
							name="status"
							id="status"
							type="switch"
							label="Available"
							checked={editProduct.status}
							// value={editProduct.status}
							onChange={handleOnchange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Price</Form.Label>
						<Form.Control
							name="price"
							type="number"
							value={editProduct.price}
							onChange={handleOnchange}
							placeholder="45.0"
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Sale Price</Form.Label>
						<Form.Control
							name="salePrice"
							type="number"
							value={editProduct.salePrice}
							onChange={handleOnchange}
							placeholder="45.0"
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Sale End Date</Form.Label>
						<Form.Control
							name="saleEndDate"
							type="date"
							value={editProduct.saleEndDate}
							onChange={handleOnchange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Quantity</Form.Label>
						<Form.Control
							name="qty"
							type="number"
							value={editProduct.qty}
							onChange={handleOnchange}
							placeholder="50"
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							name="description"
							type="text"
							as="textarea"
							rows={5}
							required
							value={editProduct.description}
							onChange={handleOnchange}
							placeholder="Writ full description"
						/>
					</Form.Group>
					<hr />
					<Form.Label>Select Categories</Form.Label>
					<ProductCatList
						onCatSelect={onCatSelect}
						selectedCatIds={editProduct.categories}
					/>
					<hr />
					<div className="d-flex justify-content-start">
						{editProduct?.images?.length &&
							editProduct.images.map((imgSource, i) => (
								<div className="image-item">
									<Image
										src={imgSource}
										width="120px"
										height="auto"
										className="mr-2 p-1"
									/>
									<Form.Check
										type="checkbox"
										defaultValue={imgSource}
										onChange={onImageDeleteSelect}
										checked={imgToDelete?.includes(imgSource)}
										label="Delete"
									/>
								</div>
							))}
					</div>
					<hr />
					<Form.Group>
						<Form.Label>Images</Form.Label>
						<Form.File
							name="images"
							id="exampleFormControlFile1"
							onChange={handleOnImageSelect}
							label="Edit or Upload image file only"
							multiple
							accept="image/*"
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Update Product
					</Button>
				</Form>

				// {isLoading && <Spinner variant="primary" animation="border" />}
			)}
		</div>
	);
};
