import Axios from "axios";

const instance = Axios.create({
	baseURL: "https://react-my-burger-5b5d3.firebaseio.com/",
	timeout: 1000,
	headers: {
		Authorization: "Bearer " + localStorage.getItem("login"),
		"Content-Type": "application/json",
	},
});
export default instance;
