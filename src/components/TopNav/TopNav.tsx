import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./topbar.scss";
import { Link } from "react-router-dom";
export default function TopNav() {
	return (
		<div>
			<div className="top-bar">
				<div className="menu">
					<FontAwesomeIcon icon={faBars} />
				</div>
				<div className="app-name">
					<Link to="/">
						<div>
							<h3>CDT App - John </h3>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
