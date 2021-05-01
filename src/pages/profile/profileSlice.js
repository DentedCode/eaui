import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	userResponse: {},
	adminProfile: {},
	passOtpRequest: {},
	showNewPassForm: false,
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		requestPending: state => {
			state.isLoading = true;
		},
		getProfileSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.adminProfile = payload;
		},

		passwordRestOTPRequest: (state, { payload }) => {
			state.isLoading = false;
			state.showNewPassForm = payload.status === "success" ? true : false;
			state.passOtpRequest = payload;
		},

		requestFail: (state, { payload }) => {
			state.isLoading = false;
			state.userResponse = payload;
		},
	},
});

const { reducer, actions } = profileSlice;

export const {
	requestPending,
	getProfileSuccess,
	requestFail,
	passwordRestOTPRequest,
} = actions;

export default reducer;
