import axios from "axios";
import { URL, LOGIN, ERROR } from "../types";

export const LoginAction = (credentials) => async (dispatch) => {
	try {
		// const  response = await axios.post(URL + "login", credentials);
		// console.log(response.data);
		// if (response.data) {
		// localStorage.setItem("login", response.data.token.token);
		// dispatch({
		// 	type: LOGIN,
		// 	payload: {
		// 		name: response.data.token.name,
		// 		image: response.data.image,
		// 		isAuthenticated: true,
		// 	},
		// });
		dispatch({
			type: LOGIN,
			payload: {
				name: "Rajat",
				image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
				isAuthenticated: true,
			},
		});
		// }
	} catch (error) {
		console.error(error);
	}
};
export const LogoutAction = (credentials) => async (dispatch) => {
	try {
		dispatch({
			type: LOGIN,
			payload: {
				name: "",
				image: "",
				isAuthenticated: false,
			},
		});
	} catch (error) {
		console.error(error);
	}
};
