import Axios from "axios";

const instance = Axios.create({
	baseURL: "https://dev-dl.tdcx.com:3092/",
	timeout: 1000,
	headers: {
		Authorization: "Bearer " + localStorage.getItem("login"),
		"Content-Type": "application/json",
	},
});
export default instance;
