import axios from "axios";
import { URL, LOGIN } from "../types";

export const LoginAction = (credentials) => async (dispatch) => {
	try {
		const response = await axios.post(URL + "login", credentials);
		if (response.data) {
			localStorage.setItem("login", response.data.token.token);
			dispatch({
				type: LOGIN,
				payload: {
					name: response.data.token.name,
					image: response.data.image,
					isAuthenticated: true,
				},
			});
		}
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
		localStorage.removeItem("login");
	} catch (error) {
		console.error(error);
	}
};
