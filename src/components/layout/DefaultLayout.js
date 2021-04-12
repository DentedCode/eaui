import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

import SideBarNav from "../sidebar/SideBarNav";
import "./defaultLayout.style.css";

const DefaultLayout = ({ children }) => {
	return (
		<div className="default-layout">
			<div className="left-bar">
				<div className="admin-log p-2 mb-5">Admin Panned</div>
				<hr className="divider" />
				<SideBarNav />
			</div>

			<div className="main">
				<Header />
				<Jumbotron>{children}</Jumbotron>

				<Footer />
			</div>
		</div>
	);
};

export default DefaultLayout;
