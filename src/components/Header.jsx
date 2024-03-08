import React from "react";
import logo from "../helper/images/logo.svg";

const Header = () => {
	return (
		<div>
			<div className="header-container">
				<img className="logo" src={logo} alt="" />
				<nav>
					<ul>
						<li>
							<a href="">Skin First</a>
						</li>
						<li>
							<a href="">Doctors</a>
						</li>
						<li>
							<a href="">Locations</a>
						</li>
						<li>
							<a href="">Career</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="doctors"></div>
		</div>
	);
};

export default Header;
