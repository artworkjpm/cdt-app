import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./styles/App.scss";
import Designs from "./components/Designs/Designs";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import Setouts from "./components/Setouts/Setouts";
import TopNav from "./components/TopNav/TopNav";

function App() {
	return (
		<div>
			<BrowserRouter>
				<TopNav></TopNav>
				<div className="grid-container">
					<div className="left-bar">
						<LeftSideBar />
					</div>
					<div className="content-container">
						<Switch>
							<Route exact path="/" render={() => <Redirect to="/setouts" />} />
							<Route exact path="/designs" render={() => <Designs />} />
							<Route exact path="/setouts" render={() => <Setouts />} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
