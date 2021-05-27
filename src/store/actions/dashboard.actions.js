import axios from "../../axios.config";
import { URL, TASKLIST, DASHBOARD } from "../types";

export const dashboardAction = () => async (dispatch) => {
	try {
		const response = await axios.get("dashboard");
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
		const response = await axios.get("tasks");
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
		const response = await axios.put("tasks/" + taskId, data);
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
		const response = await axios.delete("tasks/" + taskId);
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
		const response = await axios.put("tasks/" + taskId, data);
		if (response.data) {
			dispatch(taskListAction());
			dispatch(dashboardAction());
		}
	} catch (error) {
		console.error(error);
	}
};
