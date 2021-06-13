import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const tokenApi = rootUrl + "token";

export const tokenAPI = token => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(tokenApi, {
				headers: {
					Authorization: token,
				},
			});

			console.log("from token api", data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
