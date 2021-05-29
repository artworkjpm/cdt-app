import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DesignsItems } from "../../models/interfaces";
import { fetchData } from "../../redux/actions";
import DataTable from "../DataTable.tsx/DataTable";

export default function Designs() {
	const dispatch = useDispatch();
	const data = useSelector((state: { items: [DesignsItems] }) => state.items);
	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	const tableHeaders = ["Name", "Courses", "Wales", "Last Updated", "By"];

	return (
		<div>
			<DataTable tableHeaders={tableHeaders} data={data}></DataTable>
		</div>
	);
}
