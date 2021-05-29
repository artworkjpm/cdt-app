import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Designs from "./components/Designs/Designs";
import Setouts from "./components/Setouts/Setouts";
import TopNav from "./components/TopNav/TopNav";

function App() {
	return (
		<div>
			<BrowserRouter>
				<TopNav></TopNav>
				<div className="container">
					<Switch>
						<Route exact path="/" render={() => <Redirect to="/designs" />} />
						<Route exact path="/designs" render={() => <Designs />} />
						<Route exact path="/setouts" render={() => <Setouts />} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
