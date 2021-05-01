import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children, ...rest }) => {
	const { isAuth } = useSelector(state => state.login);

	// useEffect(() => {
	// 	console.log(isAuth, "from pr");
	// }, [isAuth]);

	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuth ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};
