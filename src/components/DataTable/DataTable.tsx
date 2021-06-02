import { useState } from "react";
import DialogEdit from "../Dialog/Dialog";
import "./datatable.scss";

interface Props {
	tableHeaders: string[];
	data: any[];
	editTitle: string;
	editableFields: string[];
	onEditSubmit: any;
	openDialog: any;
	handleClose: any;
	handleOpen: any;
}

export default function DataTable({ tableHeaders, data, editTitle, editableFields, onEditSubmit, openDialog, handleClose, handleOpen }: Props) {
	const [editData, setEditData] = useState();

	const handleClickOpen = (itemData: any) => {
		handleOpen();
		setEditData(itemData);
	};

	return (
		<div id="datatable">
			<table>
				<thead>
					<tr>
						{tableHeaders.map((item, index) => {
							return <th key={index}>{item.replace("_", " ")}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => {
						return (
							<tr id="clicker" key={index} onClick={() => handleClickOpen(item)}>
								{tableHeaders.map((el, i) => {
									return <td key={i}>{item[el.toLowerCase()]}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			{openDialog && <DialogEdit title={editTitle} openDialog={openDialog} handleClose={handleClose} editData={editData} editableFields={editableFields} onEditSubmit={onEditSubmit} />}
		</div>
	);
}
