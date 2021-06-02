import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
