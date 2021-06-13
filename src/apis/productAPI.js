import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const prodApi = rootUrl + "product";

const accessJWT = sessionStorage.getItem("accessJWT");

export const saveProduct = frmDt => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(prodApi, frmDt, {
				headers: {
					"Content-type": "multipart/form-data",
					Authorization: accessJWT,
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
			const { data } = await axios.get(prodApi, {
				headers: {
					Authorization: accessJWT,
				},
			});

			resolve(data);
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
};

export const getAProduct = _id => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(prodApi + "/" + _id, {
				headers: {
					Authorization: accessJWT,
				},
			});

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const updateProduct = formDt => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.put(prodApi, formDt, {
				headers: {
					"Content-type": "multipart/form-data",
					Authorization: accessJWT,
				},
			});

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const productDelete = _id => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.delete(
				prodApi,
				{ data: { _id } },
				{
					headers: {
						"Content-type": "multipart/form-data",
						Authorization: accessJWT,
					},
				}
			);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
