import { mount, shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "../../redux/rootReducer";
import Designs from "./Designs";

describe("<Designs /> unit test", () => {
	/* const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
	const getWrapper = () =>
		shallow(
			<Provider store={store}>
				<Designs />
			</Provider>
		); */

	it("should add to count and display the correct # of counts", () => {});
});
