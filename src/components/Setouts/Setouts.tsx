import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetoutsModel } from "../../models/interfaces";
import { fetchSetouts, updateAmount } from "../../redux/actions/setoutActions";
import DataTable from "../DataTable/DataTable";

export default function Setouts() {
	const dispatch = useDispatch();
	const data = useSelector((state: { setOutsReducer: { setouts: [SetoutsModel] } }) => state.setOutsReducer.setouts);
	const until = useSelector((state: { setOutsReducer: { until: number } }) => state.setOutsReducer.until);
	useEffect(() => {
		dispatch(fetchSetouts(5));
	}, [dispatch]);

	const tableHeaders = ["Name", "Machine_Name", "Machine_Width", "Courses", "Last_Updated"];

	function handleScroll(event: any) {
		event.preventDefault();
		const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
		if (scrollHeight - scrollTop === clientHeight) {
			dispatch(updateAmount(until + 5));
			dispatch(fetchSetouts(until + 5));
		}
	}

	return (
		<div className="scroll-div" onScroll={handleScroll}>
			<DataTable tableHeaders={tableHeaders} data={data}></DataTable>
		</div>
	);
}
