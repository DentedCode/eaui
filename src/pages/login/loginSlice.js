import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	loginResponse: {},

	isAuth: false,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		requestPending: state => {
			state.isLoading = true;
		},

		loginSuccess: (state, { payload }) => {
			// state.loginResponse = payload || {};
			state.isLoading = false;
			state.isAuth = true;
		},

		updateLogin: (state, { payload }) => {
			// state.loginResponse = payload || {};
			state.isLoading = false;
			state.isAuth = true;
		},

		logoutSuccess: (state, { payload }) => {
			// state.loginResponse = payload || {};
			state.isLoading = false;
			state.isAuth = false;
		},

		requestFail: (state, { payload }) => {
			state.isLoading = false;
			state.loginResponse = payload || {};
		},
	},
});

const { reducer, actions } = loginSlice;

export const {
	requestPending,
	loginSuccess,
	updateLogin,
	logoutSuccess,
	requestFail,
} = actions;

export default reducer;
