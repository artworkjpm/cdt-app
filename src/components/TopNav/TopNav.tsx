import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";
import { toggleSideBarAction } from "../../redux/actions/mainActions";
import "./topbar.scss";
export default function TopNav() {
	const dispatch = useDispatch();

	function toggleSideMenu() {
		dispatch(toggleSideBarAction());
	}

	return (
		<div>
			<div className="top-bar">
				<div className="menu" onClick={toggleSideMenu}>
					<FontAwesomeIcon icon={faBars} />
				</div>
				<div className="app-name">
					<BrowserRouter>
						<Link to="/">
							<div>
								<h3>CDT App - John </h3>
							</div>
						</Link>
					</BrowserRouter>
				</div>
			</div>
		</div>
	);
}
