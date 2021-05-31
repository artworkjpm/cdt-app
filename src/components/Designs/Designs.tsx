import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DesignsItems } from "../../models/interfaces";
import { fetchDesigns, updateAmount } from "../../redux/actions/designActions";
import DataTable from "../DataTable/DataTable";
import "./designs.scss";

export default function Designs() {
	const dispatch = useDispatch();
	const data = useSelector((state: { designsReducer: { designs: [DesignsItems] } }) => state.designsReducer.designs);
	const until = useSelector((state: { designsReducer: { until: number } }) => state.designsReducer.until);

	useEffect(() => {
		dispatch(fetchDesigns(5));
	}, [dispatch]);

	const tableHeaders = ["Name", "Courses", "Wales", "Last_Updated", "By"];

	function handleScroll(event: any) {
		event.preventDefault();
		const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
		if (scrollHeight - scrollTop === clientHeight) {
			dispatch(updateAmount(until + 5));
			dispatch(fetchDesigns(until + 5));
		}
	}

	return (
		<div className="scroll-div" onScroll={handleScroll}>
			<DataTable tableHeaders={tableHeaders} data={data}></DataTable>
		</div>
	);
}
