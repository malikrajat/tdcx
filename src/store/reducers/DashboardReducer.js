import { TASKLIST, DASHBOARD } from "../types";

export const dashboardReducer = (state = {}, action) => {
	switch (action.type) {
		case DASHBOARD:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export const taskListReducer = (
	state = {
		list: [],
	},
	action
) => {
	switch (action.type) {
		case TASKLIST:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
