import React from "react";
import { withRouter } from "react-router-dom";

import "../App.css";

function Header(props) {
	const redirectToCart = (page) => {
		props.history.push("/" + page);
	};
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<span className="navbar-brand mb-0 h1">
					<button
						type="button"
						className="btn btn-outline-dark"
						onClick={() => redirectToCart("")}
					>
						Home
					</button>
				</span>
				<button
					type="button"
					className="btn btn-outline-dark"
					onClick={() => redirectToCart("orders")}
				>
					Orders
				</button>
				<button
					type="button"
					className="btn btn-outline-dark"
					onClick={() => redirectToCart("cart")}
				>
					Cart
				</button>
			</div>
		</nav>
	);
}
export default withRouter(Header);
