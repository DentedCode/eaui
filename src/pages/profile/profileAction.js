import {
	requestPending,
	getProfileSuccess,
	requestFail,
	passwordRestOTPRequest,
} from "./profileSlice";

import { passOtpRequestAPI } from "../../apis/profileAPI";

export const reqOtpForNewPassword = email => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await passOtpRequestAPI(email); //return {status, message, user, tokens..}

		dispatch(passwordRestOTPRequest(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};
