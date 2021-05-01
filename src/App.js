import Login from "./pages/login/Login";
import PasswordReset from "./pages/password-reset/PasswordReset";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import AddProduct from "./pages/product/AddProduct";
import EditProduct from "./pages/edit-product/EditProduct";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import Profile from "./pages/profile/Profile";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<PrivateRoute exact path="/dashboard">
						<Dashboard />
					</PrivateRoute>

					<PrivateRoute exact path="/category">
						<Category />
					</PrivateRoute>
					<PrivateRoute exact path="/products">
						<Product />
					</PrivateRoute>

					<PrivateRoute exact path="/product/new">
						<AddProduct />
					</PrivateRoute>

					<PrivateRoute exact path="/product/:_id">
						<EditProduct />
					</PrivateRoute>

					<PrivateRoute exact path="/profile">
						<Profile />
					</PrivateRoute>

					<Route exact path="/reset-password">
						<PasswordReset />
					</Route>

					<Route exact path="/">
						<Login />
					</Route>

					<Route exact path="*">
						<h1>404 Page not found</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
