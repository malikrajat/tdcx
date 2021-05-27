import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import AddNewTask from "./AddNewTask";
import {
	dashboardAction,
	taskListAction,
	editTaskAction,
	deleteTaskAction,
	updateTaskAction,
} from "../store/actions/dashboard.actions";
import { Pie } from "react-chartjs-2";
const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		// position: "relative",
	},
};
try {
	let el = document.getElementById("model");
	Modal.setAppElement(el);
} catch (error) {
	console.log(error);
}

function Dashboard({
	dashboard,
	taskList,
	deleteTaskAction,
	dashboardAction,
	taskListAction,
	updateTaskAction,
	history,
}) {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [editTask, setEditTask] = useState("");
	const [chartData, setChartData] = useState({});

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		setEditTask("");
		taskListAction();
	};

	const [taskArray, settaskArray] = useState([]);

	useEffect(() => {
		dashboardAction();
		taskListAction();
	}, []);

	// let data = {};

	const searchData = (e) => {
		let search = e.target.value;
		if (search.length > 3) {
			let task = taskList.filter((task) => {
				return task.name.toUpperCase().includes(search.toUpperCase());
			});
			settaskArray(task);
		}
		if (search.length < 1) {
			let task = JSON.parse(JSON.stringify(taskList));
			settaskArray(task);
		}
	};

	useEffect(() => {
		let data = {
			labels: [],
			datasets: [
				{
					data: [dashboard.tasksCompleted, dashboard.totalTasks],
					backgroundColor: [
						"rgba(54, 162, 235, 0.2)",
						"rgba(255, 99, 132, 0.2)",
					],
				},
			],
		};
		setChartData(data);
		let task = JSON.parse(JSON.stringify(taskList));
		settaskArray(task);
	}, [taskList, dashboard]);

	const noRecordFound = () => {
		const addNewTask = () => {
			history.push("/add-task");
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
										{dashboard.tasksCompleted}
									</span>
									/
									<span className="card-text">
										{dashboard.totalTasks}
									</span>
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
									{dashboard?.latestTasks?.map(
										(task, index) =>
											index < 7 ? (
												task.completed ? (
													<li key={task._id}>
														<del>{task.name}</del>
													</li>
												) : (
													<li key={task._id}>
														{task.name}
													</li>
												)
											) : (
												""
											)
									)}
								</ul>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card button-rd h-100">
							<div className="card-body">
								<Pie
									data={chartData}
									options={{ maintainAspectRatio: false }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const deleteItem = (taskId) => {
		deleteTaskAction(taskId);
	};

	const editItem = (index) => {
		const taskDetails = taskList[index];
		setEditTask(taskDetails);
		openModal();
	};

	const updateStatus = (taskId, index) => {
		let data = taskArray[index];
		data.completed = !data.completed;

		updateTaskAction(taskId, data);
	};

	const tableDisplay = () => {
		return (
			<div className="task-list bg-white button-rd shadow">
				{taskArray.map((task, index) => (
					<div className="row p-3" key={task._id}>
						<div className="col-md-1">
							<input
								className=""
								type="checkbox"
								defaultChecked={task?.completed}
								onClick={() => updateStatus(task._id, index)}
							/>
						</div>
						{task.completed ? (
							<div className="col-md-9 tasks-text">
								<del> {task.name}</del>
							</div>
						) : (
							<div className="col-md-9 tasks-text">
								{task.name}
							</div>
						)}
						<div className="col-md-1">
							<div className="row">
								<div className="col-md-6 pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-pen-fill "
										viewBox="0 0 16 16"
										onClick={() => editItem(index)}
									>
										<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
									</svg>
								</div>
								<div className="col-md-6 pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-trash-fill"
										viewBox="0 0 16 16"
										onClick={() => deleteItem(task._id)}
									>
										<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	};

	const displayPopUp = () => {
		const title = editTask?._id ? "edit" : "add";
		const data = editTask?._id ? editTask.name : "";
		return (
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Add Task"
			>
				<span className="modelclose" onClick={closeModal}>
					X
				</span>

				<AddNewTask
					initialValues={data}
					title={title}
					task={editTask}
					closeModel={closeModal}
				/>
			</Modal>
		);
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
								onChange={(e) => searchData(e)}
							/>
						</div>
						<div className="col-md-4 mb-4">
							<button
								type="submit"
								className="btn btn-primary btn-block w-100 button-rd"
								onClick={() => openModal()}
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
				{tableDisplay()}

				{displayPopUp()}
			</>
		);
	};
	return <>{taskList.length > 0 ? DashboardWithRecord() : noRecordFound()}</>;
}

const mapStateToProps = (state) => ({
	dashboard: state?.dashboard,
	taskList: state.taskList.list,
});

const mapDispatchToProps = {
	dashboardAction,
	taskListAction,
	editTaskAction,
	deleteTaskAction,
	updateTaskAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
