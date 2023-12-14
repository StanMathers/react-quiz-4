import React from "react";

import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container">
				<div className="container-fluid d-flex justify-content-between">
					<a className="navbar-brand" onClick={() => navigate("/")}>
						Quest
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" onClick={() => navigate("/")}>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" onClick={() => navigate("/about")}>
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Courses
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Pages
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" onClick={() => navigate("/")}>
										Home
									</a>
								</li>
								<li>
									<a className="dropdown-item" onClick={() => navigate("/about")}>
										About
									</a>
								</li>
								<li>
									<a className="dropdown-item" onClick={() => navigate("/profile")}>
										Profile
									</a>
								</li>
							</ul>

						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Blog
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
