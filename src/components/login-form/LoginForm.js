import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./loginForm.style.css";

const initialState = {
	email: "",
	password: "",
};
export const LoginForm = () => {
	const history = useHistory();

	const [login, setLogin] = useState(initialState);

	const handleOnChange = e => {
		const { name, value } = e.target;

		setLogin({
			...login,
			[name]: value,
		});
	};

	const handOnSubmit = e => {
		e.preventDefault();

		console.log(login);
		history.push("/dashboard");
	};

	return (
		<div className="login-form">
			<Card className="p-4">
				<Form onSubmit={handOnSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							name="email"
							type="email"
							value={login.email}
							onChange={handleOnChange}
							placeholder="Enter email"
							required
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							name="password"
							type="password"
							value={login.password}
							onChange={handleOnChange}
							placeholder="Password"
							required
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>

				<a href="/reset-password" className="text-right">
					Forgot Password ?
				</a>
			</Card>
		</div>
	);
};
