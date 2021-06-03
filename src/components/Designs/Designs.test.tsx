import { mount, shallow } from "enzyme";
import InfiniteScroll from "react-infinite-scroll-component";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { dummyDataDesigns } from "../DataTable/__test__/dummyData";
import Designs from "./Designs";
const mockStore = configureMockStore([thunk]);

describe("<Designs>", () => {
	it("should contain InfiniteScroll component", () => {
		const store = mockStore({
			designsReducer: { designs: dummyDataDesigns },
		});
		const wrapper = mount(
			<Provider store={store}>
				<Designs />
			</Provider>
		);
		expect(wrapper.find(InfiniteScroll)).toHaveLength(1);
	});
});
