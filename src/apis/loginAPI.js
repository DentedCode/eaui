import axios from "axios";

const rootUrl = process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_PROD_ROOT_API : "http://localhost:8000/api/v1/";
 
const catApi = rootUrl + "login";

export const loginAPI = frmDt => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(catApi, frmDt);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
