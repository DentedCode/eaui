import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	status: "",
	message: "",
	product: {},
};

const selectedProductSlice = createSlice({
	name: "editProduct",
	initialState,
	reducers: {
		requestPending: state => {
			state.isLoading = true;
		},
		updateProductSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},

		fetchProductSuccess: (state, { payload }) => {
			state.product = payload.result || {};
			state.isLoading = false;
		},

		requestFail: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},
	},
});

const { reducer, actions } = selectedProductSlice;

export const {
	requestPending,
	fetchProductSuccess,
	updateProductSuccess,
	requestFail,
} = actions;

export default reducer;
