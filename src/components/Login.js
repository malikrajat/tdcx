import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { LoginAction } from "../store/actions/login.actions";
import "../App.css";

function Login({ LoginAction, isUserLogin, history }) {
	useEffect(() => {
		if (isUserLogin) {
			history.push("/dashboard");
		}
	}, [isUserLogin]);

	const formSubmit = (credentials, { resetForm }) => {
		LoginAction(credentials);
		resetForm();
		// console.log(values);
		// props.history.push("/dashboard");
	};
	return (
		<div className="d-flex justify-content-center align-items-center container h-100 ">
			<div className="row bg-white login-window shadow-lg">
				<h2>Login</h2>
				<Formik
					initialValues={formInit}
					validationSchema={SignupSchema}
					onSubmit={formSubmit}
				>
					{({ errors, touched }) => (
						<Form action="" className="mt-3">
							<div className="form-group">
								<Field
									type="text"
									name="apiKey"
									autoFocus
									className="form-control bg-light input-rd"
									id="inputUserName"
									aria-labelledby="emailnotification"
									placeholder="Id"
								/>
								<ErrorMessage
									name="apiKey"
									component="div"
									className="error"
								/>
							</div>
							<div className="form-group mt-2">
								<Field
									type="text"
									name="name"
									className="form-control bg-light input-rd"
									id="inputPassword"
									aria-labelledby="passwordnotification"
									placeholder="Name"
								/>
								<ErrorMessage
									name="name"
									component="div"
									className="error"
								/>
							</div>
							<div className="form-group mt-3">
								<button
									type="submit"
									className="btn btn-primary btn-block w-100 button-rd"
								>
									Login
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}
// form validation
const SignupSchema = Yup.object().shape({
	apiKey: Yup.string().min(2, "Too Short!").required("Please enter id"),
	name: Yup.string().min(2, "Too Short!").required("Please enter name"),
});
// form init
const formInit = {
	apiKey: "",
	name: "",
};

const mapStateToProps = (state) => ({
	isUserLogin: state?.user?.isAuthenticated,
});

const mapDispatchToProps = {
	LoginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
