import axios from "axios";
import { URL, TASKLIST, DASHBOARD } from "../types";

let config = {
	headers: {
		Authorization: "Bearer " + localStorage.getItem("login"),
		"Content-Type": "application/json",
	},
};
export const dashboardAction = () => async (dispatch) => {
	try {
		const response = await axios.get(URL + "dashboard", config);
		if (response.data) {
			dispatch({
				type: DASHBOARD,
				payload: response.data,
			});
		}
	} catch (error) {
		console.error(error);
	}
};

export const taskListAction = () => async (dispatch) => {
	try {
		const response = await axios.get(URL + "tasks", config);
		if (response.data) {
			let itemList = {
				list: response.data.tasks,
			};
			dispatch({
				type: TASKLIST,
				payload: itemList,
			});
		}
	} catch (error) {
		console.error(error);
	}
};

export const editTaskAction = (taskId, data) => async (dispatch) => {
	try {
		const response = await axios.put(URL + "tasks/" + taskId, data, config);
		if (response.data) {
			dispatch(taskListAction());
			dispatch(dashboardAction());
		}
	} catch (error) {
		console.error(error);
	}
};

export const deleteTaskAction = (taskId) => async (dispatch) => {
	try {
		const response = await axios.delete(URL + "tasks/" + taskId, config);
		if (response.data) {
			dispatch(taskListAction());
			dispatch(dashboardAction());
		}
	} catch (error) {
		console.error(error);
	}
};

export const updateTaskAction = (taskId, data) => async (dispatch) => {
	try {
		const response = await axios.put(URL + "tasks/" + taskId, data, config);
		if (response.data) {
			dispatch(taskListAction());
			dispatch(dashboardAction());
		}
	} catch (error) {
		console.error(error);
	}
};
