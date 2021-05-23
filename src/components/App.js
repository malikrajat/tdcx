import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "../App.css";

import store from "../store";

const Login = lazy(() => import("./Login"));
const Dashboard = lazy(() => import("./Dashboard"));
const NotFound = lazy(() => import("./NotFound"));
const Header = lazy(() => import("./Header"));

const App = () => {
	return (
		<div className="container vh-100 bg-light">
			<Provider store={store}>
				<Router>
					<Suspense fallback={<div>Loading...</div>}>
						<Header />
						<Switch>
							<Route path="/" component={Login} exact />
							<Route path="/dashboard" component={Dashboard} />
							<Route path="**" component={NotFound} />
						</Switch>
					</Suspense>
				</Router>
			</Provider>
		</div>
	);
};

export default App;
