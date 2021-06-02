import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DesignsItems, NewDesignArrayObject } from "../../models/interfaces";
import { fetchDesigns, updateAmount } from "../../redux/actions/designActions";
import DataTable from "../DataTable/DataTable";
import InfiniteScroll from "react-infinite-scroll-component";

const Designs = () => {
	const dispatch = useDispatch();
	const data = useSelector((state: { designsReducer: { designs: [DesignsItems] } }) => state.designsReducer.designs);
	const until = useSelector((state: { designsReducer: { until: number } }) => state.designsReducer.until);
	const [openDialog, setOpenDialog] = useState(false);

	useEffect(() => {
		dispatch(fetchDesigns(10));
	}, [dispatch]);

	const tableHeaders = ["Name", "Courses", "Wales", "Last_Updated", "By"];
	const editableFields = ["name", "courses", "wales"];

	function handleScroll() {
		dispatch(updateAmount(until + 10));
		dispatch(fetchDesigns(until + 10));
	}

	function handleOpen() {
		setOpenDialog(true);
	}
	function handleClose() {
		setOpenDialog(false);
	}
	const onSubmit = (editedItem: NewDesignArrayObject) => {
		axios
			.put(`http://localhost:5000/designs/${editedItem.id}`, editedItem)
			.then(() => {
				dispatch(fetchDesigns(until));
				setOpenDialog(false);
			})
			.catch((error) => {
				console.error(error);
				setOpenDialog(false);
			});
	};

	return (
		<div className="scroll-div">
			<InfiniteScroll dataLength={data.length} next={handleScroll} hasMore={true} loader="">
				<DataTable editTitle="Design" tableHeaders={tableHeaders} data={data} editableFields={editableFields} onEditSubmit={onSubmit} handleOpen={handleOpen} handleClose={handleClose} openDialog={openDialog}></DataTable>
			</InfiniteScroll>
		</div>
	);
};

export default Designs;
