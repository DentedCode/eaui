import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/user";
const logOutEndPoint = rootUrl + "/logout";
const otpReqEP = rootUrl + "/otp";
const passResetEP = rootUrl + "/password";

export const adminLogoutAPI = _id => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(logOutEndPoint, { _id });

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const passOtpRequestAPI = email => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(otpReqEP, { email });

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const updatePasswordAPI = passObj => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(passResetEP, passObj);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
