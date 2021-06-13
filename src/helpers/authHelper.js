import { tokenAPI } from "../apis/tokenAPI";

const refreshJWT = localStorage.getItem("ourEcommerceRJWT");
export const renewAccessJWT = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			if (refreshJWT) {
				const { accessJWT } = await tokenAPI(refreshJWT);

				if (accessJWT) {
					sessionStorage.setItem("accessJWT", accessJWT);
					resolve(accessJWT);
				}
			}
			resolve(false);
		} catch (error) {
			resolve(false);
		}
	});
};
