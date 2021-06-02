import { shallow } from "enzyme";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MainContent from "./components/MainContent/MainContent";
import TopNav from "./components/TopNav/TopNav";

test("App should have certain components", () => {
	const wrapper = shallow(<App />);
	expect(
		wrapper.contains(
			<div>
				<BrowserRouter>
					<TopNav />
					<MainContent />
				</BrowserRouter>
			</div>
		)
	).toBe(true);
});
