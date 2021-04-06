import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

import "./defaultLayout.css";

const DefaultLayout = ({ children }) => {
	return (
		<div>
			<Row>
				<Col xs={4}>
					<div className="left-bar">I am form the left menu</div>
				</Col>
				<Col xs={8}>
					<div className="main">
						<Header />
						{children}
						<Footer />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default DefaultLayout;
