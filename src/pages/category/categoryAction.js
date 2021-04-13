import {
	requestPending,
	addCategorySuccess,
	fetchAllCategorySuccess,
	requestFail,
} from "./categorySlice";

import { saveCategory, getCategories } from "../../apis/categoriAPI";

export const addNewCategory = frmDt => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await saveCategory(frmDt); //{status, message}

		dispatch(addCategorySuccess(result));

		result.status === "success" && dispatch(fetchCategories());
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

export const fetchCategories = () => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await getCategories(); //{status, message, result:[]}

		dispatch(fetchAllCategorySuccess(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};
