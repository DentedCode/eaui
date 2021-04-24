import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const catApi = rootUrl + "category";

export const saveCategory = frmDt => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(catApi, frmDt);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const updateCategory = frmDt => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.put(catApi, frmDt);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const getCategories = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(catApi);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const deleteCategories = idArg => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.delete(catApi, { data: idArg });

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
