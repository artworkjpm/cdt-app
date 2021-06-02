import React from "react";
import { NavLink } from "react-router-dom";
import "./left-side.scss";
export default function LeftSideBar() {
	return (
		<div>
			<div className="left-bar">
				<NavLink to="/designs">
					<div className="item">Designs</div>
				</NavLink>
				<NavLink to="/setouts">
					<div className="item">Setouts</div>
				</NavLink>
			</div>
		</div>
	);
}
