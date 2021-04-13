import React from "react";
import { Link } from "react-router-dom";
import "./sideBarNav.style.css";

const SideBarNav = () => {
	return (
		<div className="sidebar-nav">
			<ul>
				<li>
					<Link to="/dashboard">
						<i className="fas fa-tachometer-alt"></i> Dashboard
					</Link>
				</li>
				<li>
					<Link to="/category">
						<i className="fas fa-sitemap"></i> Category
					</Link>
				</li>
				<li>
					<Link to="/products">
						<i className="fas fa-table"></i> Products
					</Link>
				</li>
				<li>
					<Link to="/orders">
						<i className="fas fa-shopping-cart"></i> Orders
					</Link>
				</li>
				<li>
					<Link to="/users">
						<i className="fas fa-user"></i> Users
					</Link>
				</li>
				<li>
					<Link to="/account">
						<i className="fas fa-cogs text-success"></i> Account
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideBarNav;
