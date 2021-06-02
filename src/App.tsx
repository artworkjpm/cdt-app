import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import TopNav from "./components/TopNav/TopNav";
import "./styles/App.scss";

function App() {
	return (
		<div>
			<BrowserRouter>
				<TopNav />
				<MainContent />
			</BrowserRouter>
		</div>
	);
}

export default App;
