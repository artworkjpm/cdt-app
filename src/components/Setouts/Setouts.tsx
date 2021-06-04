import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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
		!data.length && dispatch(fetchSetouts(10));
	}, [dispatch, data]);

	const tableHeaders = ["Name", "Machine_Name", "Machine_Width", "Courses", "Last_Updated"];
	const editableFields = ["name", "machine_name", "machine_width", "courses"];

	function handleScroll() {
		dispatch(updateAmount(until + 10));
		dispatch(fetchSetouts(until + 10));
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
			<InfiniteScroll dataLength={data.length} next={handleScroll} hasMore={true} loader="">
				<DataTable handleOpen={handleOpen} handleClose={handleClose} openDialog={openDialog} editTitle="Setout" tableHeaders={tableHeaders} data={data} editableFields={editableFields} onEditSubmit={onSubmit}></DataTable>
			</InfiniteScroll>
		</div>
	);
}
