import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./topbar.scss";
export default function TopNav() {
	return (
		<div>
			<div className="top-bar">
				<div className="menu">
					<FontAwesomeIcon icon={faBars} />
				</div>
				<div className="app-name">
					<h3>CDT App - John </h3>
				</div>
			</div>
		</div>
	);
}
