import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetoutsModel } from "../../models/interfaces";
import { fetchSetouts, updateAmount } from "../../redux/actions/setoutActions";
import DataTable from "../DataTable/DataTable";

export default function Setouts() {
	const dispatch = useDispatch();
	const data = useSelector((state: { setOutsReducer: { setouts: [SetoutsModel] } }) => state.setOutsReducer.setouts);
	const until = useSelector((state: { setOutsReducer: { until: number } }) => state.setOutsReducer.until);
	const [openDialog, setOpenDialog] = useState(false);
	useEffect(() => {
		dispatch(fetchSetouts(5));
	}, [dispatch]);

	const tableHeaders = ["Name", "Machine_Name", "Machine_Width", "Courses", "Last_Updated"];
	const editableFields = ["name", "machine_name", "machine_width", "courses"];

	function handleScroll(event: any) {
		event.preventDefault();
		const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
		if (scrollHeight - scrollTop === clientHeight) {
			dispatch(updateAmount(until + 5));
			dispatch(fetchSetouts(until + 5));
		}
	}

	const onSubmit = (editedItem: any) => {
		axios
			.put(`http://localhost:5000/setouts/${editedItem.id}`, editedItem)
			.then(() => {
				dispatch(fetchSetouts(until));
				setOpenDialog(false);
			})
			.catch((error) => {
				console.error(error);
				setOpenDialog(false);
			});
	};

	function handleOpen() {
		setOpenDialog(true);
	}

	function handleClose() {
		setOpenDialog(false);
	}

	return (
		<div className="scroll-div" onScroll={handleScroll}>
			<DataTable handleOpen={handleOpen} handleClose={handleClose} openDialog={openDialog} editTitle="Setout" tableHeaders={tableHeaders} data={data} editableFields={editableFields} onEditSubmit={onSubmit}></DataTable>
		</div>
	);
}
