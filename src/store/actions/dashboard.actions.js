import axios from "axios";
import { URL, TASKLIST, DASHBOARD, DELETETASK, EDITTASK } from "../types";
import store from "../index";

export const dashboardAction = () => async (dispatch) => {
	try {
		// const response = await axios.get(URL + "dashboard");
		// console.log(response.data);
		// if (response.data) {
		// dispatch({
		// 	type: DASHBOARD,
		// 	payload: response.data,
		// });
		dispatch({
			type: DASHBOARD,
			payload: {
				tasksCompleted: 10,
				totalTasks: 19,
				latestTasks: [
					{
						name: "Refactor something",
						completed: false,
					},
				],
			},
		});
		// }
	} catch (error) {
		console.error(error);
	}
};

export const taskListAction = () => async (dispatch) => {
	try {
		// const response = await axios.get(URL + "tasks");
		// if (response.data) {
		// 	dispatch({
		// 		type: TASKLIST,
		// 		payload: response.data,
		// 	});
		// }

		dispatch({
			type: TASKLIST,
			payload: {
				list: [
					{
						name: "Refactor something",
						completed: false,
					},
				],
			},
		});
	} catch (error) {
		console.error(error);
	}
};

export const editTaskAction = () => async (dispatch) => {
	try {
		// const response = await axios.get(URL + "tasks");
		// if (response.data) {
		// 	dispatch({
		// 		type: TASKLIST,
		// 		payload: response.data,
		// 	});
		// }

		dispatch({
			type: EDITTASK,
			payload: {
				list: [
					{
						name: "Refactor something",
						completed: false,
					},
				],
			},
		});
	} catch (error) {
		console.error(error);
	}
};
export const deleteTaskAction = (taskId) => async (dispatch) => {
	try {
		const response = await axios.get(URL + "tasks/" + taskId);
		// if (response.data) {
		// 	dispatch({
		// 		type: TASKLIST,
		// 		payload: response.data,
		// 	});
		// }
		const storeData = store.getState();
		let updatedStore = storeData.map(
			(res) => res.name !== response.data.name
		);

		dispatch({
			type: DELETETASK,
			payload: {
				list: updatedStore,
			},
		});
	} catch (error) {
		console.error(error);
	}
};
