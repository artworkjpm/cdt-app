import React from "react";
import "./left-side.scss";
import { Link } from "react-router-dom";
export default function LeftSideBar() {
	return (
		<div>
			<div className="left-bar">
				<Link to="/designs">
					<div className="item">Designs</div>
				</Link>
				<Link to="/setouts">
					<div className="item">Setouts</div>
				</Link>
			</div>
		</div>
	);
}
