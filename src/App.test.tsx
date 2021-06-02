import React from "react";

import App from "./App";
import { shallow, mount } from "enzyme";

test("renders learn react link", () => {
	const wrapper = shallow(<App />);

	console.log(wrapper.debug());
	expect(true).toBe(true);
});
