import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	status: "",
	message: "",
	deleteMsg: "",
	productList: [],
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		requestPending: state => {
			state.isLoading = true;
		},
		addProductSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},

		fetchAllProductSuccess: (state, { payload }) => {
			state.productList = payload.result || [];
			state.isLoading = false;
		},

		deleteProductSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.deleteMsg = payload.message;
		},

		requestFail: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},
	},
});

const { reducer, actions } = productSlice;

export const {
	requestPending,
	addProductSuccess,
	fetchAllProductSuccess,
	requestFail,
	deleteProductSuccess,
} = actions;

export default reducer;
