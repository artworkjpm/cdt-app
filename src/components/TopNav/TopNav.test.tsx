import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../../redux/rootReducer";
import TopNav from "./TopNav";

describe("<MainContent />", () => {
	test("should have contain LeftSideBar", () => {
		const store = createStore(rootReducer, applyMiddleware(thunk));
		const wrapper = mount(
			<Provider store={store}>
				<TopNav />
			</Provider>
		);
		expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
	});
});
