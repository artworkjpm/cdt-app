import { Action, Dispatch } from "redux";

export const toggleSideBarAction = () => (dispatch: Dispatch<Action>) => {
	dispatch({
		type: "TOGGLE_SIDE_BAR",
	});
};
