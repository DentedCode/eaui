import {
	requestPending,
	addCategorySuccess,
	fetchAllCategorySuccess,
	requestFail,
} from "./categorySlice";

import { saveCategory } from "../../apis/categoriAPI";

export const addNewCategory = frmDt => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await saveCategory(frmDt); //{status, message}

		dispatch(addCategorySuccess(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};
