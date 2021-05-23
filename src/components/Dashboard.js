import React, { lazy } from "react";
import AddNewTask from "./AddNewTask";
import { Pie } from "react-chartjs-2";

function Dashboard() {
	const noRecordFound = () => {
		const addNewTask = () => {
			console.log("addnew as");
		};
		return (
			<div className="d-flex justify-content-center align-items-center h-100 ">
				<div className="row bg-white login-window shadow-lg">
					<div className="text-center">
						<h5>You have no task</h5>
						<button
							type="button"
							className="btn btn-primary btn-block  w-75 button-rd "
							onClick={addNewTask}
						>
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
						</button>
					</div>
				</div>
			</div>
		);
	};

	const cards = () => {
		return (
			<div className="dashboard-header">
				<div className="row">
					<div className="col-sm-4">
						<div className="card button-rd h-100">
							<div className="card-body">
								<h5 className="card-title">Tasks Completed</h5>
								<div className="pt-4">
									<span className="display-4 text-primary font-bold">
										5
									</span>
									/<span className="card-text">20</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card button-rd h-100">
							<div className="card-body">
								<h5 className="card-title">
									Latest completed Tasks
								</h5>

								<ul>
									<li>Task1</li>
									<li>Task1</li>
									<li>
										<del>Task1</del>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card button-rd h-100">
							<div className="card-body">
								<Pie
									data={data}
									options={{ maintainAspectRatio: false }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const data = {
		labels: [],
		datasets: [
			{
				data: [12, 19],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
				],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
				borderWidth: 1,
			},
		],
	};

	const DashboardWithRecord = () => {
		return (
			<>
				{cards()}
				<div className="mt-5">
					<div className="table-header row">
						<div className="col-md-4 mb-4">Tasks</div>
						<div className="has-search col-md-4 mb-4 position-relative">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-search search-icon"
								viewBox="0 0 16 16"
							>
								<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
							</svg>
							<input
								type="text"
								className="form-control bg-light pl-30"
								placeholder="Search by task name"
							/>
						</div>
						<div className="col-md-4 mb-4">
							<button
								type="submit"
								className="btn btn-primary btn-block w-100 button-rd"
							>
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
							</button>
						</div>
					</div>
				</div>
				<div className="task-list bg-white button-rd shadow">
					<div className="row p-3">
						<div className="col-md-1">
							<input className="" type="checkbox" />
						</div>
						<div className="col-md-9 tasks-text">
							asdasdasdasdasd
						</div>
						<div className="col-md-1">
							<div className="row">
								<div className="col-md-6">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-pen-fill"
										viewBox="0 0 16 16"
									>
										<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
									</svg>
								</div>
								<div className="col-md-6">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-trash-fill"
										viewBox="0 0 16 16"
									>
										<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className="row p-3">
						<div className="col-md-1">
							<input className="" type="checkbox" />
						</div>
						<div className="col-md-9 text-primary">
							asdasdasdasdasd
						</div>
						<div className="col-md-1">
							<div className="row">
								<div className="col-md-6">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-pen-fill"
										viewBox="0 0 16 16"
									>
										<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
									</svg>
								</div>
								<div className="col-md-6">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-trash-fill"
										viewBox="0 0 16 16"
									>
										<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	};
	return (
		<>
			{/* {noRecordFound()} */}
			{/* <AddNewTask /> */}
			{DashboardWithRecord()}
		</>
	);
}

export default Dashboard;
