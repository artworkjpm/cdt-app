import { ActionData } from "../../models/interfaces";

const initState = {
	showSideBar: true,
};

export const mainAppReducer = (state = initState, action: ActionData) => {
	switch (action.type) {
		case "TOGGLE_SIDE_BAR":
			return {
				...state,
				showSideBar: !state.showSideBar,
			};

		default:
			return state;
	}
};
