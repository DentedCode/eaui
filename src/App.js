import Login from "./pages/login/Login";
import PassworReset from "./pages/password-reset/PasswordReset";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/dashboard">
						<Dashboard />
					</Route>

					<Route path="/reset-password">
						<PassworReset />
					</Route>

					<Route path="/">
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
