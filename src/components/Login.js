import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";

function Login(props) {
	const formSubmit = (values, { resetForm }) => {
		console.log(values);
		props.history.push("/dashboard");
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
									type="email"
									name="email"
									autoFocus
									className="form-control bg-light input-rd"
									id="inputUserName"
									aria-labelledby="emailnotification"
									placeholder="Id"
								/>
								<ErrorMessage
									name="email"
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
	email: Yup.string()
		.min(2, "Too Short!")
		.required("Please enter email address")
		.email("Please enter correct email address "),
	name: Yup.string().min(2, "Too Short!").required("Please enter name"),
});
// form init
const formInit = {
	email: "",
	name: "",
};

export default Login;
