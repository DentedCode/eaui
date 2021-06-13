import axios from "axios";
const rootUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_ROOT_API : "http://localhost:8000/api/v1/";
 
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
