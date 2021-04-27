import React, { useState, useEffect } from "react";
import { Card, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { sendLogin, userAutoLogin } from "../../pages/login/loginAction";
import { updateLogin } from "../../pages/login/loginSlice";
import "./loginForm.style.css";

const initialState = {
	email: "b@c.com",
	password: "123456",
};
export const LoginForm = () => {
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();

	const { isLoading, loginResponse, isAuth } = useSelector(
		state => state.login
	);
	const [login, setLogin] = useState(initialState);

	// const uri = sessionStorage.getItem("accessJWT") ? "/dashboard" : "/";
	let { from } = location.state || { from: { pathname: "/" } };

	useEffect(() => {
		// !isAuth && sessionStorage.getItem("accessJWT") && dispatch(updateLogin());

		!isAuth && dispatch(userAutoLogin());

		if (isAuth) history.replace(from);
	}, [isAuth]);

	const handleOnChange = e => {
		const { name, value } = e.target;

		setLogin({
			...login,
			[name]: value,
		});
	};

	const handOnSubmit = e => {
		e.preventDefault();

		if (!login.email || !login.password) {
			return alert("Plz fill up all the input fields");
		}

		dispatch(sendLogin(login));
	};

	return (
		<div className="login-form">
			<Card className="p-4">
				{isLoading && <Spinner variant="primary" animation="border" />}

				{loginResponse?.message && (
					<Alert
						variant={loginResponse?.status === "success" ? "success" : "danger"}
					>
						{loginResponse?.message}
					</Alert>
				)}

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
