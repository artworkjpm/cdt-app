import { Button, DialogActions } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React, { ChangeEvent, useState } from "react";

export interface ModalProps {
	open: boolean;
	onClose: () => void;
	editData: any;
	title: string;
	editableFields: string[];
}

export default function DialogEdit(props: ModalProps) {
	const { onClose, open, editData, title, editableFields } = props;
	const handleClose = () => {
		onClose();
	};
	//form code
	console.log(editData);

	const [data, setData] = useState(editData);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setData({
			...data,
			[event.target.id]: event.target.value,
		});
	};

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		alert("test");
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Edit {title}</DialogTitle>
			<DialogContent>
				<form noValidate autoComplete="off" onSubmit={onSubmit}>
					{editableFields.map((item, i) => {
						return <TextField key={i} id={item} label={item.toUpperCase()} value={data[item]} onChange={handleChange} />;
					})}
					<Button variant="contained" color="primary" type="submit">
						Submit
					</Button>
				</form>
			</DialogContent>
			<DialogActions></DialogActions>
		</Dialog>
	);
}
