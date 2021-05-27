import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated === true ? (
					<Component {...props} />
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
};
const mapStateToProps = (state) => ({
	isAuthenticated: state?.user.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));
