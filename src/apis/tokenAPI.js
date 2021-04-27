import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const catApi = rootUrl + "token";

export const tokenAPI = token => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(catApi, {
				headers: {
					Authorization: token,
				},
			});

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
