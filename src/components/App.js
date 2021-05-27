import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Header";
import "../App.css";
import PrivateRoute from "./PrivateRoute";
import store from "../store";

const Login = lazy(() => import("./Login"));
const Dashboard = lazy(() => import("./Dashboard"));
const NotFound = lazy(() => import("./NotFound"));
const AddNewTask = lazy(() => import("./AddNewTask"));

const App = () => {
	return (
		<div className="vh-100 bg-light">
			<Provider store={store}>
				<Router>
					<Suspense fallback={<div>Loading...</div>}>
						<Header />
						<div className="container">
							<Switch>
								<Route path="/" component={Login} exact />
								<PrivateRoute
									path="/add-task"
									component={AddNewTask}
								/>
								<PrivateRoute
									path="/dashboard"
									component={Dashboard}
								/>
								<Route path="**" component={NotFound} />
							</Switch>
						</div>
					</Suspense>
				</Router>
			</Provider>
		</div>
	);
};

export default App;
