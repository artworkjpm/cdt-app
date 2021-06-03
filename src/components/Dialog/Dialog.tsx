import { Button, DialogActions } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React, { ChangeEvent, useState } from "react";

export interface ModalProps {
	openDialog: boolean;
	editData: any;
	title: string;
	editableFields: string[];
	onEditSubmit: any;
	handleClose: any;
}

const DialogEdit = (props: ModalProps) => {
	const { handleClose, openDialog, editData, title, editableFields, onEditSubmit } = props;
	const [data, setData] = useState(editData);
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setData({
			...data,
			[event.target.id]: event.target.value,
		});
	};
	function onSubmit(event: React.FormEvent) {
		event.preventDefault();
		onEditSubmit(data);
	}

	function test() {
		console.log("tesssst");
	}

	return (
		<Dialog onClose={handleClose} open={openDialog}>
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
};

export default DialogEdit;
