import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Designs from "./components/Designs/Designs";
import LeftSideBar from "./components/LeftSideBar.tsx/LeftSideBar";
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
							<Route exact path="/" render={() => <Redirect to="/designs" />} />
							<Route exact path="/designs" component={Designs} />
							<Route exact path="/setouts" render={() => <Setouts />} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
