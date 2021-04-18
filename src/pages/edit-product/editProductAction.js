import {
	requestPending,
	fetchProductSuccess,
	updateProductSuccess,
	requestFail,
} from "./selectedProductSlice";

import { getAProduct, updateProduct } from "../../apis/productAPI";
// export const addNewProduct = frmDt => async dispatch => {
// 	try {
// 		dispatch(requestPending());

// 		const result = await saveProduct(frmDt); //{status, message}

// 		dispatch(addProductSuccess(result));

// 		result.status === "success" && dispatch(fetchProducts());
// 	} catch (error) {
// 		const err = {
// 			status: "error",
// 			message: error.message,
// 		};

// 		dispatch(requestFail(err));
// 	}
// };

export const fetchAProduct = _id => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await getAProduct(_id); //{status, message, result:{}}
		dispatch(fetchProductSuccess(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

export const updateAProduct = formDt => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await updateProduct(formDt); //{status, message, result:{}}
		dispatch(updateProductSuccess(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};
