import axios from "axios";
import { URL } from "../types";
import { taskListAction } from "./dashboard.actions";
let config = {
	headers: {
		Authorization: "Bearer " + localStorage.getItem("login"),
		"Content-Type": "application/json",
	},
};

export const AddTaskAction = (task, history) => async () => {
	try {
		const response = await axios.post(URL + "tasks", task, config);
		console.log(response, task);
		if (response.data) {
			taskListAction();
			history.push("/dashboard");
		}
	} catch (error) {
		console.error(error);
	}
};
