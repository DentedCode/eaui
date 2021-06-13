import {
	requestPending,
	addProductSuccess,
	fetchAllProductSuccess,
	deleteProductSuccess,
	requestFail,
} from "./productSlice";

import { logOutLocally } from "../login/loginAction";

import { renewAccessJWT } from "../../helpers/authHelper";

import { saveProduct, getProducts, productDelete } from "../../apis/productAPI";

export const addNewProduct = frmDt => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await saveProduct(frmDt); //{status, message}

		dispatch(addProductSuccess(result));

		result.status === "success" && dispatch(fetchProducts());
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

export const fetchProducts = () => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await getProducts(); //{status, message, result:[]}

		if (result.message === "jwt expired") {
			const token = await renewAccessJWT();
			console.log(token, "from action");
			if (!token) {
				return dispatch(logOutLocally());
			}

			return dispatch(fetchProducts());
		}

		dispatch(fetchAllProductSuccess(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

export const deleteProduct = _id => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await productDelete(_id); //{status, message, result:[]}

		dispatch(deleteProductSuccess(result));

		result.status === "success" && dispatch(fetchProducts());
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

// export const removeCategories = idArg => async dispatch => {
// 	try {
// 		dispatch(requestPending());

// 		const result = await deleteCategories(idArg); //{status, message, result:[]}

// 		dispatch(deleteCatsSuccess(result));

// 		result.status === "success" && dispatch(fetchCategories());
// 	} catch (error) {
// 		const err = {
// 			status: "error",
// 			message: error.message,
// 		};

// 		dispatch(requestFail(err));
// 	}
// };
