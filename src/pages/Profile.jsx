import React from "react";

import { useParams } from "react-router-dom";

const Profile = () => {
	const { username } = useParams();

	return (
		<div className="container mt-5">
			<div className="row gy-3 justify-content-center align-items-center text-center">
				<div className="col-12">
					<h1>{username ? username : "John Doe"}</h1>
				</div>
				<div className="col-12">
					<h4>WEB DESIGNER</h4>
				</div>
				<div className="col-md-5">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus dignissimos quia culpa dolorum quis voluptas aspernatur
						cum expedita officiis recusandae aut officia quibusdam placeat vel,
						nemo quae debitis. Veniam, cum.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
