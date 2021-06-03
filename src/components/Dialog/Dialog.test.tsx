import { Button, DialogTitle } from "@material-ui/core";
import { shallow } from "enzyme";
import { dummyDataDesigns } from "../DataTable/__test__/dummyData";
import DialogEdit from "./Dialog";

//React 16 and above, instance() returns null for stateless functional components.

let props = { tableHeaders: ["Name", "Courses", "Wales", "Last_Updated", "By"], editData: dummyDataDesigns, title: "Designs", editableFields: ["name", "courses", "wales"], onEditSubmit: () => {}, openDialog: true, handleClose: () => {}, handleOpen: () => {} };
const wrapper = shallow(<DialogEdit {...props} />);

describe("<DialogEdit> ", () => {
	test("<DialogTitle> should use prop title  ", () => {
		expect(wrapper.find(DialogTitle).text()).toBe("Edit Designs");
	});
	test("should have a submit button  ", () => {
		expect(wrapper.find(Button).text()).toBe("Submit");
	});
});
