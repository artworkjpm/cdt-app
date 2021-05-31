import { useState } from "react";
import DialogEdit from "../Dialog/Dialog";
import "./datatable.scss";

interface Props {
	tableHeaders: string[];
	data: any[];
}

export default function DataTable({ tableHeaders, data }: Props) {
	const [open, setOpen] = useState(false);
	const [editData, setEditData] = useState();

	const handleClickOpen = (itemData: any) => {
		setOpen(true);
		setEditData(itemData);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
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
							<tr key={index} onClick={() => handleClickOpen(item)}>
								{tableHeaders.map((el, i) => {
									return <td key={i}>{item[el.toLowerCase()]}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<DialogEdit open={open} onClose={handleClose} editData={editData} />
		</div>
	);
}
