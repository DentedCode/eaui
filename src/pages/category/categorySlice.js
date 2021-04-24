import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	status: "",
	message: "",
	categoryList: [],
	show: false,
	selectedCategory: {},
	updateCatResponse: {},
};

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		requestPending: state => {
			state.isLoading = true;
		},

		addCategorySuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},

		fetchAllCategorySuccess: (state, { payload }) => {
			state.categoryList = payload.result;
			state.isLoading = false;
		},

		deleteCatsSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},

		updateCategorySuccess: (state, { payload }) => {
			state.isLoading = false;
			state.updateCatResponse = payload;
		},

		toggleCategoryEditModal: state => {
			state.show = !state.show;
			if (!state.show) {
				state.updateCatResponse = {};
			}
		},

		selectACategory: (state, { payload }) => {
			state.selectedCategory = payload;
		},

		requestFail: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},
	},
});

const { reducer, actions } = categorySlice;

export const {
	requestPending,
	addCategorySuccess,
	fetchAllCategorySuccess,
	toggleCategoryEditModal,
	selectACategory,
	deleteCatsSuccess,
	updateCategorySuccess,
	requestFail,
} = actions;

export default reducer;
