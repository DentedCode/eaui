import React from "react";
import { Navbar } from "react-bootstrap";

import { logOut } from "../../../pages/login/loginAction";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Headers = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { adminProfile } = useSelector(state => state.profile);

	const handleOnLogout = () => {
		console.log("logging out./..");

		dispatch(logOut(adminProfile?._id));
		history.push("/");
	};

	return (
		<Navbar bg="dark" variant="dark">
			{/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end">
				<Navbar.Text>
					<i className="fas fa-bell text-success"></i>
				</Navbar.Text>
				<Navbar.Text onClick={handleOnLogout} style={{ cursor: "pointer" }}>
					<i className="fas fa-user  text-primary"></i> Log Out
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Headers;
