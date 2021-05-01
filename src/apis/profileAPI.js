import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/user";
const logOutEndPoint = rootUrl + "/logout";

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
