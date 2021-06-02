import React from "react";
import { shallow } from "enzyme";
import DataTable from "../DataTable";
import { data } from "./dummyData";
import Designs from "../../Designs/Designs";

describe("foo test", () => {
	test("should return ReactComponent", () => {
		let props = { tableHeaders: ["Name", "Courses", "Wales", "Last_Updated", "By"], data: data, editTitle: "Designs", editableFields: ["name", "courses", "wales"], onEditSubmit: "", openDialog: "", handleClose: "", handleOpen: "" };

		let wrapper = shallow(<DataTable {...props} />);
	});
});
