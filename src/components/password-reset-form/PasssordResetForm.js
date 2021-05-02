import React, { useState } from "react";
import { Card, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { reqOtpForNewPassword } from "../../pages/profile/profileAction";
import "./passwordReset.style.css";

export const PasswordResetForm = () => {
	const dispatch = useDispatch();
	const { isLoading, passUpdateRes } = useSelector(state => state.profile);
	const [email, setEmail] = useState("b@c.com");

	const handleOnChange = e => {
		const { value } = e.target;

		setEmail(value);
	};

	const handOnSubmit = e => {
		e.preventDefault();

		if (!email) {
			return alert("Please enter the email");
		}

		dispatch(reqOtpForNewPassword(email));
		console.log(email);
	};

	return (
		<div className="login-form">
			{isLoading && <Spinner variant="primary" animation="border" />}

			{passUpdateRes?.message && (
				<Alert
					variant={passUpdateRes?.status === "success" ? "success" : "danger"}
				>
					{passUpdateRes?.message}
				</Alert>
			)}

			<Card className="p-4">
				<Form onSubmit={handOnSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							name="email"
							type="email"
							value={email}
							onChange={handleOnChange}
							placeholder="Enter email"
							required
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>

				<a href="/" className="text-right">
					Login Now ?
				</a>
			</Card>
		</div>
	);
};
