import React, { useState, useEffect } from "react";
import { Card, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword } from "../../pages/profile/profileAction";

import "./newPassordForm.style.css";

const initialState = {
	otp: "",
	password: "",
	confirmPassword: "",
};

const passwordCheckList = {
	isMatch: false,
	has8Chr: false,
	hasUpper: false,
	hasLower: false,
	hasNum: false,
	hasSpclChr: false,
};

export const NewPasswordForm = () => {
	const [newPassword, setNewPassword] = useState(initialState);
	const [passError, setPassError] = useState(passwordCheckList);
	const dispatch = useDispatch();

	const { isLoading, passUpdateRes, passResetEmail } = useSelector(
		state => state.profile
	);

	useEffect(() => {
		if (passUpdateRes.status === "success") {
			setNewPassword(initialState);
			setPassError(passwordCheckList);
		}
	}, [passUpdateRes]);

	const handleOnChange = e => {
		const { name, value } = e.target;

		setNewPassword({
			...newPassword,
			[name]: value,
		});

		if (name === "otp") {
			return;
		}
		// gonna do some custom validation
		// is matching
		const isMatch =
			name === "password"
				? newPassword.confirmPassword === value
				: newPassword.password === value;

		const has8Chr = value.length >= 8 ? true : false;
		const hasUpper = /[A-Z]/.test(value);
		const hasLower = /[a-z]/.test(value);
		const hasNum = /[0-9]/.test(value);
		const hasSpclChr = /[ @, # ,$ ,% ,^]/.test(value);

		setPassError({
			...passError,
			isMatch,
			has8Chr,
			hasUpper,
			hasLower,
			hasNum,
			hasSpclChr,
		});
	};

	const handOnSubmit = e => {
		e.preventDefault();
		const { otp, password } = newPassword;
		const newPass = { otp, password, email: passResetEmail };
		console.log(newPass);
		dispatch(updatePassword(newPass));
	};

	const btnDisabled = Object.values(passError).includes(false);

	return (
		<div className="new-pass-form">
			{passUpdateRes?.message && (
				<Alert
					variant={passUpdateRes?.status === "success" ? "success" : "danger"}
				>
					{passUpdateRes?.message}
				</Alert>
			)}
			{isLoading && <Spinner variant="primary" animation="border" />}
			<Card className="p-4">
				<Form onSubmit={handOnSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>OTP</Form.Label>
						<Form.Control
							name="otp"
							type="number"
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
							type="password"
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
							type="password"
							value={newPassword.confirmPassword}
							onChange={handleOnChange}
							placeholder="Confirm Password"
							required
						/>
					</Form.Group>

					<Form.Text>
						{!passError.isMatch && (
							<div className="text-danger">Password doesn't match</div>
						)}
					</Form.Text>
					<ul className="mt-4">
						<li className={passError.has8Chr ? "text-success" : "text-danger"}>
							Min 8 characters
						</li>
						<li className={passError.hasUpper ? "text-success" : "text-danger"}>
							At least on UPPER case
						</li>
						<li className={passError.hasLower ? "text-success" : "text-danger"}>
							At least on lower case
						</li>
						<li className={passError.hasNum ? "text-success" : "text-danger"}>
							At least one number
						</li>
						<li
							className={passError.hasSpclChr ? "text-success" : "text-danger"}
						>
							At least on of the following special characters i.e @ # $ % ^
						</li>
					</ul>

					<Button
						variant="primary"
						type="submit"
						disabled={btnDisabled && newPassword.otp}
					>
						{isLoading ? (
							<Spinner variant="primary" animation="border" />
						) : (
							"Submit"
						)}
					</Button>
				</Form>

				<a href="/" className="text-right">
					Login Now!
				</a>
			</Card>
		</div>
	);
};
