import { shallow } from "enzyme";
import { NavLink } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";

//React 16 and above, instance() returns null for stateless functional components.

const wrapper = shallow(<LeftSideBar />);

describe("<LeftSideBar/> ", () => {
	test("<LeftSideBar/> should use routing  ", () => {
		expect(wrapper.find(NavLink)).toHaveLength(2);
	});
});
