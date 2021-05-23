import React from "react";
import { withRouter } from "react-router-dom";

import "../App.css";

function Header(props) {
	const redirectToCart = (page) => {
		props.history.push("/" + page);
	};

	const logout = () => {
		console.log("logout");
	};
	return (
		<nav className="navbar navbar-light bg-white shadow-lg mb-4">
			<div className="container container-fluid">
				<span className="navbar-brand">
					<img
						className="rounded-circle me-3 header-height"
						alt="100x100"
						src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
						data-holder-rendered="true"
					/>
					<span className="">ALI</span>
				</span>

				<a
					href="#"
					className="text-secondary text-decoration-none"
					onClick={logout}
				>
					Logout
				</a>
			</div>
		</nav>
	);
}
export default Header;
