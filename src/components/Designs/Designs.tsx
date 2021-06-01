import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DesignsItems } from "../../models/interfaces";
import { fetchDesigns, updateAmount } from "../../redux/actions/designActions";
import DataTable from "../DataTable/DataTable";

export default function Designs() {
	const dispatch = useDispatch();
	const data = useSelector((state: { designsReducer: { designs: [DesignsItems] } }) => state.designsReducer.designs);
	const until = useSelector((state: { designsReducer: { until: number } }) => state.designsReducer.until);

	useEffect(() => {
		dispatch(fetchDesigns(5));
	}, [dispatch]);

	const tableHeaders = ["Name", "Courses", "Wales", "Last_Updated", "By"];
	const editableFields = ["name", "courses", "wales"];

	function handleScroll(event: any) {
		event.preventDefault();
		const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
		if (scrollHeight - scrollTop === clientHeight) {
			dispatch(updateAmount(until + 5));
			dispatch(fetchDesigns(until + 5));
		}
	}

	const onSubmit = (editedItem: any) => {
		console.log(editedItem);
	};

	return (
		<div className="scroll-div" onScroll={handleScroll}>
			<DataTable editTitle="Design" tableHeaders={tableHeaders} data={data} editableFields={editableFields} onEditSubmit={onSubmit}></DataTable>
		</div>
	);
}
