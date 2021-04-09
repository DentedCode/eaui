import React from "react";
import { PasswordResetForm } from "../../components/password-reset-form/PasssordResetForm";
import "./passwordReset.style.css";

const PassworReset = () => {
	return (
		<div className="password-reset-page bg-dark">
			<PasswordResetForm />
		</div>
	);
};

export default PassworReset;
