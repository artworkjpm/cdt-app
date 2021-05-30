import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DesignsItems, Users } from "../../models/interfaces";
import { fetchDesignsData, fetchUsersData } from "../../redux/actions";
import DataTable from "../DataTable.tsx/DataTable";

export default function Designs() {
	const dispatch = useDispatch();
	const data = useSelector((state: { designs: [DesignsItems] }) => state.designs);
	const users = useSelector((state: { users: [Users] }) => state.users);
	useEffect(() => {
		dispatch(fetchUsersData());
		dispatch(fetchDesignsData(users));
		// eslint-disable-next-line
	}, []);

	const tableHeaders = ["Name", "Courses", "Wales", "Last_Updated", "By"];

	/* if (data.length > 0) {
		const newArray: { name: string; courses: number; wales: number; last_updated: string; by: void }[] = [];
		data.map((item) => {
			return newArray.push({
				name: item.name,
				courses: item.courses,
				wales: item.wales,
				last_updated: item.updated,
				by: getUser(item.user_id_last_update),
			});
		});
		console.log(newArray);
		dispatch(updateDesigns(newArray));
	}

	function getUser(userNumber: number) {
		console.log(userNumber);
	} */

	return (
		<div>
			<DataTable tableHeaders={tableHeaders} data={data}></DataTable>
		</div>
	);
}
