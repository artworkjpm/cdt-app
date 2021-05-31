import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetoutsModel } from "../../models/interfaces";
import { fetchSetouts } from "../../redux/actions/setoutActions";
import DataTable from "../DataTable/DataTable";

export default function Setouts() {
	const dispatch = useDispatch();
	const data = useSelector((state: { setOutsReducer: { setouts: [SetoutsModel] } }) => state.setOutsReducer.setouts);
	useEffect(() => {
		dispatch(fetchSetouts());
	}, [dispatch]);

	const tableHeaders = ["Name", "Machine Name", "Machine Width", "Courses", "Last_Updated"];

	return (
		<div>
			<DataTable tableHeaders={tableHeaders} data={data}></DataTable>
		</div>
	);
}
