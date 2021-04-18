import Login from "./pages/login/Login";
import PassworReset from "./pages/password-reset/PasswordReset";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import AddProduct from "./pages/product/AddProduct";
import EditProduct from "./pages/edit-product/EditProduct";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/dashboard">
						<Dashboard />
					</Route>
					<Route exact path="/category">
						<Category />
					</Route>
					<Route exact path="/products">
						<Product />
					</Route>

					<Route exact path="/product/new">
						<AddProduct />
					</Route>

					<Route exact path="/product/:_id">
						<EditProduct />
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
