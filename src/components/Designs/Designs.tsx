import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DesignsItems } from "../../models/interfaces";
import { fetchUsersData } from "../../redux/actions";
import DataTable from "../DataTable.tsx/DataTable";

export default function Designs() {
	const dispatch = useDispatch();
	const data = useSelector((state: { designs: [DesignsItems] }) => state.designs);
	useEffect(() => {
		dispatch(fetchUsersData());
	}, [dispatch]);

	const tableHeaders = ["Name", "Courses", "Wales", "Last_Updated", "By"];

	return (
		<div>
			<DataTable tableHeaders={tableHeaders} data={data}></DataTable>
		</div>
	);
}
