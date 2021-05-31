import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export interface ModalProps {
	open: boolean;
	onClose: () => void;
	editData: any;
}

export default function DialogEdit(props: ModalProps) {
	const { onClose, open, editData } = props;
	console.log(editData);

	const handleClose = () => {
		onClose();
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Set backup account</DialogTitle>
			<DialogContent>
				<DialogContentText>Body text</DialogContentText>
			</DialogContent>
		</Dialog>
	);
}
