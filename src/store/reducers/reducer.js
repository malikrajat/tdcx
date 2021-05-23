import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import { dashboardReducer, taskListReducer } from "./DashboardReducer";

const rootReducer = combineReducers({
	user: LoginReducer,
	dashboard: dashboardReducer,
	taskList: taskListReducer,
});

export default rootReducer;
