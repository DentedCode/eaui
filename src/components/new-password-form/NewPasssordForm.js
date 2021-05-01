import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./newPassordForm.style.css";

const initialState = {
	otp: "",
	password: "",
	confirmPassword: "",
};
export const NewPasswordForm = () => {
	const [newPassword, setNewPassword] = useState(initialState);

	const handleOnChange = e => {
		const { name, value } = e.target;

		setNewPassword({
			...newPassword,
			[name]: value,
		});
	};

	const handOnSubmit = e => {
		e.preventDefault();

		console.log(newPassword);
	};

	return (
		<div className="new-pass-form">
			<Card className="p-4">
				<Form onSubmit={handOnSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>OTP</Form.Label>
						<Form.Control
							name="otp"
							value={newPassword.otp}
							onChange={handleOnChange}
							placeholder="Enter OTP"
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>New Password</Form.Label>
						<Form.Control
							name="password"
							value={newPassword.password}
							onChange={handleOnChange}
							placeholder="Enter Password"
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							name="confirmPassword"
							value={newPassword.confirmPassword}
							onChange={handleOnChange}
							placeholder="Confirm Password"
							required
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>

				<a href="/" className="text-right">
					Login Now!
				</a>
			</Card>
		</div>
	);
};
