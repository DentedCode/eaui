import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const prodApi = rootUrl + "product";

export const saveProduct = frmDt => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(prodApi, frmDt, {
				headers: {
					"Content-type": "multipart/form-data",
				},
			});

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const getProducts = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(prodApi);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const getAProduct = _id => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(prodApi + "/" + _id);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const updateProduct = formDt => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.put(prodApi, formDt);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const productDelete = _id => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.delete(prodApi, { data: { _id } });

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
