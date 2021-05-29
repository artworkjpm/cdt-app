import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Designs from "./components/Designs/Designs";
import Setouts from "./components/Setouts/Setouts";
import TopNav from "./components/TopNav/TopNav";

function App() {
	return (
		<div>
			<TopNav></TopNav>

			<BrowserRouter>
				<div className="container">
					<Switch>
						<Route exact path="/" render={() => <Designs />} />
						<Route exact path="/" render={() => <Setouts />} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
