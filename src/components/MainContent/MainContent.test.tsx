import { getByTestId } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../../redux/rootReducer";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import MainContent from "./MainContent";

describe("<MainContent />", () => {
	test("should have contain LeftSideBar", () => {
		const store = createStore(rootReducer, applyMiddleware(thunk));
		const wrapper = mount(
			<Provider store={store}>
				<MainContent />
			</Provider>
		);

		expect(wrapper.find(LeftSideBar)).toHaveLength(1);
	});
});
