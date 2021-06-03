import React from "react";
import renderer from "react-test-renderer";
import DataTable from "../DataTable";
import { dummyDataDesigns } from "./dummyData";

describe("<DataTable/>", () => {
	test("should have specific props", () => {
		let props = { tableHeaders: ["Name", "Courses", "Wales", "Last_Updated", "By"], data: dummyDataDesigns, editTitle: "Designs", editableFields: ["name", "courses", "wales"], onEditSubmit: "", openDialog: "", handleClose: "", handleOpen: "" };

		const fakeDataTable = renderer.create(<DataTable {...props} />).toJSON();
		expect(fakeDataTable).toMatchSnapshot();
	});
});
