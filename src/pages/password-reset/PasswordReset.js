import React from "react";
import { PasswordResetForm } from "../../components/password-reset-form/PasssordResetForm";
import { useSelector } from "react-redux";
import { NewPasswordForm } from "../../components/new-password-form/NewPasssordForm";
import "./passwordReset.style.css";
import { Alert, Spinner } from "react-bootstrap";

const PassworReset = () => {
	const { showNewPassForm } = useSelector(state => state.profile);
	console.log(showNewPassForm);
	return (
		<div className="password-reset-page bg-dark">
			{showNewPassForm ? <NewPasswordForm /> : <PasswordResetForm />}
		</div>
	);
};

export default PassworReset;
