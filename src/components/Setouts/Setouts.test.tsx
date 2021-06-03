import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { dummyDataSetouts } from "../DataTable/__test__/dummyData";
import Setouts from "./Setouts";
const mockStore = configureMockStore([thunk]);

describe("<Setouts>", () => {
	it("should render a startup component if startup is not complete", () => {
		const store = mockStore({
			setOutsReducer: { setouts: dummyDataSetouts },
		});
		const wrapper = mount(
			<Provider store={store}>
				<Setouts />
			</Provider>
		);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});
