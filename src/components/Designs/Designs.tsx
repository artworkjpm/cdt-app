import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions";
import DataTable from "../DataTable.tsx/DataTable";

export default function Designs() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	console.log(state);

	return (
		<div>
			<DataTable></DataTable>
		</div>
	);
}
