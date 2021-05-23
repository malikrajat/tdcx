import { LOGIN } from "../types";

const initialState = {
	name: "",
	image: "",
	isAuthenticated: false,
};

export const LoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
