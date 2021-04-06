import React from "react";
import { LoginForm } from "../../components/login-form/LoginForm";
import "./login.style.css";

const Login = () => {
	return (
		<div className="login-page bg-dark">
			<LoginForm />
		</div>
	);
};

export default Login;
