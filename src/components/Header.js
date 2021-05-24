import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";
import { LogoutAction } from "../store/actions/login.actions";
import { URL } from "../store/types";

function Header({ user, history, LogoutAction }) {
	function logout(e) {
		e.preventDefault();
		LogoutAction();
		history.push("/");
	}
	useEffect(() => {}, [user]);
	return (
		<>
			{user?.isAuthenticated && (
				<nav className="navbar navbar-light bg-white shadow-lg mb-4">
					<div className="container container-fluid">
						<span className="navbar-brand">
							<img
								className="rounded-circle me-3 header-height w-48"
								alt="100x100"
								src={URL + user?.image}
								onError={(e) =>
									(e.target.src =
										"https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg")
								}
								data-holder-rendered="true"
							/>
							<span className="">{user?.name}</span>
						</span>

						<a
							href="#!"
							className="text-secondary text-decoration-none"
							onClick={(e) => logout(e)}
						>
							Logout
						</a>
					</div>
				</nav>
			)}
		</>
	);
}

const mapStateToProps = (state) => ({
	user: state?.user,
});

export default withRouter(connect(mapStateToProps, { LogoutAction })(Header));
