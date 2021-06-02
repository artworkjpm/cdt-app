import { getByTestId } from "@testing-library/react";
import { shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../../redux/rootReducer";
import MainContent from "./MainContent";

describe("<MainContent />", () => {
	test("should have certain components", () => {
		const store = createStore(rootReducer, applyMiddleware(thunk));
		const wrapper = shallow(
			<Provider store={store}>
				<MainContent />
			</Provider>
		);
		expect(wrapper.contains(<MainContent />)).toBe(true);
	});
});
