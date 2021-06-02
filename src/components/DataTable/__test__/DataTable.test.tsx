import React from "react";
import { shallow } from "enzyme";
import DataTable from "../DataTable";
import { dummyData } from "./dummyData";

import renderer from "react-test-renderer";

describe("<DataTable/>", () => {
	test("should have specific props", () => {
		let props = { tableHeaders: ["Name", "Courses", "Wales", "Last_Updated", "By"], data: dummyData, editTitle: "Designs", editableFields: ["name", "courses", "wales"], onEditSubmit: "", openDialog: "", handleClose: "", handleOpen: "" };

		const fakeDataTable = renderer.create(<DataTable {...props} />).toJSON();
		expect(fakeDataTable).toMatchSnapshot();
	});
});
