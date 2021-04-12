import React from "react";
import { Link } from "react-router-dom";
import "./sideBarNav.style.css";

const SideBarNav = () => {
	return (
		<div className="sidebar-nav">
			<ul>
				<li>
					<Link to="/dashboard">
						<i class="fas fa-tachometer-alt"></i> Dashboard
					</Link>
				</li>
				<li>
					<Link to="/category">
						<i class="fas fa-sitemap"></i> Category
					</Link>
				</li>
				<li>
					<Link to="/products">
						<i class="fas fa-table"></i> Products
					</Link>
				</li>
				<li>
					<Link to="/orders">
						<i class="fas fa-shopping-cart"></i> Orders
					</Link>
				</li>
				<li>
					<Link to="/users">
						<i class="fas fa-user"></i> Users
					</Link>
				</li>
				<li>
					<Link to="/account">
						<i class="fas fa-cogs text-success"></i> Account
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideBarNav;
