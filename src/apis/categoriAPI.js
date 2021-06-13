import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const catApi = rootUrl + "category";

const accessJWT = sessionStorage.getItem("accessJWT");

export const saveCategory = frmDt => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(catApi, frmDt, {
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

export const updateCategory = frmDt => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.put(catApi, frmDt, {
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

export const getCategories = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(catApi, {
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

export const deleteCategories = idArg => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.delete(
				catApi,
				{ data: idArg },
				{
					headers: {
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
