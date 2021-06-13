import {
	requestPending,
	loginSuccess,
	updateLogin,
	logoutSuccess,
	requestFail,
	passwordRestOTPRequest,
} from "./loginSlice";

import { getProfileSuccess } from "../profile/profileSlice";
import { adminLogoutAPI } from "../../apis/profileAPI";
import { loginAPI } from "../../apis/loginAPI";
import { tokenAPI } from "../../apis/tokenAPI";

export const sendLogin = formData => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await loginAPI(formData); //return {status, message, user, tokens..}
	 

		const { accessJWT, refreshJWT } = result;
		accessJWT && sessionStorage.setItem("accessJWT", accessJWT);
		refreshJWT && localStorage.setItem("ourEcommerceRJWT", refreshJWT);
		//if we get tokens for server, we need to store in our browser storeage

		if (result.status === "success") {
			dispatch(loginSuccess(result));
			dispatch(getProfileSuccess(result.user));
			return;
		}
		dispatch(requestFail(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

export const userAutoLogin = () => async dispatch => {
	const accessJWT = sessionStorage.getItem("accessJWT");
	const refresJWT = localStorage.getItem("ourEcommerceRJWT");

	accessJWT && dispatch(updateLogin());

	if (!accessJWT && refresJWT) {
		//call the server to get new access token
		const result = await tokenAPI(refresJWT);
		console.log(result);

		if (result.status === "success") {
			sessionStorage.setItem("accessJWT", result.accessJwt);
			dispatch(updateLogin());
		}
	}
};

export const logOutLocally = () => dispatch => {
	sessionStorage.removeItem("accessJWT");
	localStorage.removeItem("ourEcommerceRJWT");

	dispatch(logoutSuccess());
};

export const logOut = _id => dispatch => {
	// clear browse storage
	dispatch(logOutLocally());
	adminLogoutAPI(_id);

	// remove tokens form our server
};
