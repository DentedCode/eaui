import React from "react";
import { PasswordResetForm } from "../../components/password-reset-form/PasssordResetForm";
import { useSelector } from "react-redux";
import { NewPasswordForm } from "../../components/new-password-form/NewPasssordForm";
import "./passwordReset.style.css";
import { Alert, Spinner } from "react-bootstrap";

const PassworReset = () => {
	const { isLoading, passOtpRequest, showNewPassForm } = useSelector(
		state => state.profile
	);
	console.log(showNewPassForm);
	return (
		<div className="password-reset-page bg-dark">
			{isLoading && <Spinner variant="primary" animation="border" />}

			{passOtpRequest?.message && (
				<Alert
					variant={passOtpRequest?.status === "success" ? "success" : "danger"}
				>
					{passOtpRequest?.message}
				</Alert>
			)}
			{showNewPassForm ? <NewPasswordForm /> : <PasswordResetForm />}
		</div>
	);
};

export default PassworReset;
