import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Designs from "../Designs/Designs";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
/* import Setouts from "../Setouts/Setouts"; */

export default function MainContent() {
	const showSideBar = useSelector((state: { mainAppReducer: { showSideBar: boolean } }) => state.mainAppReducer.showSideBar);
	return (
		<div id="parent" className={showSideBar ? "grid-container" : "remove-grid"}>
			<BrowserRouter>
				{showSideBar && (
					<div className="left-bar">
						<LeftSideBar />
					</div>
				)}

				<div className="content-container">
					<Switch>
						<Route exact path="/" render={() => <Redirect to="/designs" />} />
						<Route exact path="/designs" render={() => <Designs />} />
						{/* <Route exact path="/setouts" render={() => <Setouts />} /> */}
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}
