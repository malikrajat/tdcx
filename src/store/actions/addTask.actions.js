import { URL } from "../types";
import axios from "../../axios.config";
import { taskListAction } from "./dashboard.actions";

export const AddTaskAction = (task, history) => async () => {
	try {
		const response = await axios.post(URL + "tasks", task);
		if (response.data) {
			taskListAction();
			history.push("/dashboard");
		}
	} catch (error) {
		console.error(error);
	}
};
