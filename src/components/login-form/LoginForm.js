import React from "react";
import { Card, Form, Button } from "react-bootstrap";

import "./loginForm.style.css";

export const LoginForm = () => {
	return (
		<div className="login-form">
			<Card className="p-4">
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Card>
		</div>
	);
};
