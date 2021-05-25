import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { AddTaskAction } from "../store/actions/addTask.actions";
import { withRouter } from "react-router-dom";
import { editTaskAction } from "../store/actions/dashboard.actions";

const AddNewTask = ({
	editTaskAction,
	AddTaskAction,
	history,
	initialValues,
	title,
	task,
}) => {
	const formSubmit = (values, { resetForm }) => {
		if (title === "edit") {
			task.name = values.name;
			editTaskAction(task._id, task);
		} else {
			AddTaskAction(values, history);
		}
		resetForm();
	};
	return (
		<div className="d-flex justify-content-center align-items-center h-100 ">
			<div className="row bg-white login-window shadow-lg">
				{title === "add" ? (
					<h5> + Add New Task</h5>
				) : (
					<h5> Edit Task</h5>
				)}

				<div className="text-center">
					<Formik
						initialValues={{ name: initialValues }}
						validationSchema={TaskSchema}
						onSubmit={formSubmit}
					>
						{({ errors, touched }) => (
							<Form action="" className="mt-3">
								<div className="form-group">
									<Field
										type="text"
										name="name"
										className="form-control bg-light input-rd"
										id="inputUserName"
										aria-labelledby="emailnotification"
										placeholder="Task Name"
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
										{title === "add" ? (
											<>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="10"
													height="10"
													fill="currentColor"
													className="plus-icon"
													viewBox="0 0 16 16"
												>
													<path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
												</svg>
												New Task
											</>
										) : (
											"Edit Task"
										)}
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};
// form validation
const TaskSchema = Yup.object().shape({
	name: Yup.string().min(2, "Too Short!").required("Please enter name"),
});

const mapDispatchToProps = {
	AddTaskAction,
	editTaskAction,
};

export default withRouter(connect(null, mapDispatchToProps)(AddNewTask));
